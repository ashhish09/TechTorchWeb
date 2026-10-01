import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  IndianRupee,
  Warehouse,
  Wallet,
  Settings2,
  Contact,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MAROON_BG = "#5c0e34";

const cards = [
  {
    title: "Engage",
    desc: "Keep your employees connected and engaged by making communication, collaboration and everyday interactions easier across the organisation.",
    icon: Users,
  },
  {
    title: "Finance & Accounting",
    desc: "Keep your financial information organised and get a clearer view of your business performance.",
    icon: IndianRupee,
  },
  {
    title: "Inventory & Supply Chain",
    desc: "Keep track of stock, purchasing and movement so your teams know what is available and what needs attention.",
    icon: Warehouse,
  },
  {
    title: "Payroll",
    desc: "Manage employee salaries, payments and payroll processes more efficiently, while keeping important payroll information organised and accessible.",
    icon: Wallet,
  },
  {
    title: "Operations",
    desc: "Bring everyday operational activities together and give your teams a clearer view of what is happening.",
    icon: Settings2,
  },
  {
    title: "HRMS",
    desc: "Keep employee information and important HR processes organized in one place.",
    icon: Contact,
  },
];

// Cards are shown two at a time: [0,1], [2,3], [4,5]
const pairs = [
  [cards[0], cards[1]],
  [cards[2], cards[3]],
  [cards[4], cards[5]],
];

export default function OnePlatformSection() {
  const sectionRef = useRef(null);
  const pairRefs = useRef([]); // one wrapper element per pair (cards + connector)
  const [isMobile, setIsMobile] = useState(false);

  /* Watch the breakpoint so resizing / rotating switches modes. */
  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    setIsMobile(mq.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = pairRefs.current.filter(Boolean);
      if (els.length !== pairs.length) return;

      const offscreen = () => window.innerWidth + 500;

      /* ---------- INITIAL STATE ---------- */
      if (isMobile) {
        gsap.set(els, { x: 0, y: 40, opacity: 0 });
      } else {
        // everything waits outside the RIGHT edge
        gsap.set(els, { x: offscreen(), y: 0, opacity: 1 });
      }

      /* ---------- TIMELINE ---------- */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: isMobile ? "+=2300" : "+=2800",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const HOLD = 1.5;
      const SLIDE = 1.4;

      if (isMobile) {
        els.forEach((el, i) => {
          // in
          tl.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });

          // hold
          tl.to({}, { duration: HOLD });

          // out (keep the last pair on screen)
          if (i < els.length - 1) {
            tl.to(el, {
              opacity: 0,
              y: -40,
              duration: 0.7,
              ease: "power2.inOut",
            });
          }
        });
      } else {
        // first pair: right -> center
        tl.to(els[0], { x: 0, duration: SLIDE, ease: "power2.out" });
        tl.to({}, { duration: HOLD });

        // each next pair: current slides out LEFT while next slides in from RIGHT
        for (let i = 0; i < els.length - 1; i++) {
          tl.to(els[i], {
            x: () => -offscreen(),
            duration: SLIDE,
            ease: "power2.inOut",
          });
          tl.to(
            els[i + 1],
            { x: 0, duration: SLIDE, ease: "power2.out" },
            "<"
          );
          tl.to({}, { duration: HOLD });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="one-platform-section">
      <div className="one-platform-container">
        <div className="one-platform-header">
          <h2 className="one-platform-heading">
            One Platform for Your Everyday Business
          </h2>
          <p className="one-platform-description">
            An ERP system should make it easier for different parts of your
            business to work together. We help connect the functions that
            matter most to your day-to-day operations.
          </p>
        </div>

        <div className="one-platform-stage">
          {pairs.map(([left, right], i) => (
            <div
              key={i}
              ref={(el) => (pairRefs.current[i] = el)}
              className="platform-pair"
            >
              <PlatformCard card={left} />
              <div className="platform-connector" aria-hidden="true">
                <span className="connector-dot" />
                <span className="connector-line" />
                <span className="connector-dot" />
              </div>
              <PlatformCard card={right} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .one-platform-section {
          width: 100%;
          min-height: 100vh;
          background: ${MAROON_BG};
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .one-platform-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 70px 40px;
        }

        .one-platform-header {
          margin-bottom: 30px;
          max-width: 700px;
        }

        .one-platform-heading {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 14px 0;
        }

        .one-platform-description {
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #f1d9e4;
          line-height: 1.6;
          margin: 0;
        }

        /* Stage: fixed-height box that clips the sliding pairs */
        .one-platform-stage {
          position: relative;
          width: 100%;
          height: 340px;
          overflow: hidden;
        }

        .platform-pair {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .platform-card {
          flex: 0 0 auto;
          width: 360px;
          min-height: 260px;
          background: #ffffff;
          border-radius: 10px;
          padding: 30px 26px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
        }

        /* Connector between the two cards of a pair */
        .platform-connector {
          display: flex;
          align-items: center;
          width: 110px;
          flex: 0 0 auto;
        }

        .connector-line {
          flex: 1;
          height: 0;
          border-top: 1.5px dashed rgba(255, 255, 255, 0.55);
        }

        .connector-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffffff;
          flex: 0 0 auto;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${MAROON_BG};
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .card-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #141414;
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .card-desc {
          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          line-height: 1.5;
          color: #2f2f2f;
          margin: 0;
        }

        /* Tablet narrow: slightly smaller cards so the pair still fits */
        @media (max-width: 1100px) {
          .platform-card { width: 300px; padding: 26px 22px; }
          .platform-connector { width: 70px; }
        }

        /* ===== MOBILE / SMALL TABLET (<=900px): stacked pair, fade up ===== */
        @media (max-width: 900px) {
          .one-platform-section {
            min-height: 100vh;
          }

          .one-platform-container {
            padding: 40px 20px;
          }

          .one-platform-heading { font-size: 24px; }
          .one-platform-description { font-size: 13.5px; }

          .one-platform-stage {
            height: 520px;
          }

          .platform-pair {
            flex-direction: column;
          }

          .platform-card {
            width: min(420px, 100%);
            min-height: 0;
            padding: 22px 20px;
          }

          .platform-connector {
            flex-direction: column;
            width: auto;
            height: 28px;
          }

          .connector-line {
            flex: 1;
            width: 0;
            height: auto;
            border-top: 0;
            border-left: 1.5px dashed rgba(255, 255, 255, 0.55);
          }

          .card-icon {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
          }

          .card-title { font-size: 15px; }
          .card-desc { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}

function PlatformCard({ card }) {
  const Icon = card.icon;
  return (
    <div className="platform-card">
      <div className="card-icon">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="card-title">{card.title}</h3>
      <p className="card-desc">{card.desc}</p>
    </div>
  );
}