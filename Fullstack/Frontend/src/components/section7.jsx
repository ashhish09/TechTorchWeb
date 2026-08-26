import React from "react";

// ---- Brand tokens -----------------------------------------------------
const colors = {
  cream: "#F9F8F2",
  ink: "#191013",
  inkSoft: "#4A3E43",
  brand: "#730042",
};

// ---- Small building blocks ---------------------------------------------

function Eyebrow({ children }) {
  return (
    <div
      className="flex items-center gap-2.5"
      style={{
        marginBottom: "28px",
        fontSize: "15px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        color: colors.ink,
      }}
    >
      {children}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CTAButton({ children }) {
  return (
    <button
      className="tx-cta inline-flex items-center justify-center gap-2.5 self-start rounded-lg whitespace-nowrap w-full sm:w-auto"
      style={{
<<<<<<< HEAD
        marginTop: "16px",
        border: `1.5px solid ${colors.brand}`,
        color: colors.brand,
        padding: "12px 22px",
        fontSize: "16px",
=======
        marginTop: "clamp(16px, 2vw, 24px)",
        border: `1.5px solid ${colors.brand}`,
        color: colors.brand,
        padding: "12px 22px",
        fontSize: "clamp(14px, 1vw, 16px)",
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
        fontWeight: 700,
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      {children}
      <ArrowIcon />
    </button>
  );
}

function CopyPanel() {
  return (
    <div
<<<<<<< HEAD
      className="flex w-full max-w-2xl flex-col justify-center tx-copy"
      style={{
        paddingTop: "65px",
        paddingBottom: "65px",
        paddingLeft: "70px",
        paddingRight: "70px",
=======
      className="flex w-full flex-col justify-center"
      style={{
        padding:
          "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px)",
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
      }}
    >
      <Eyebrow>The Next Chapter</Eyebrow>

      <h1
        style={{
          marginBottom: "24px",
          fontSize: "32px",
          lineHeight: 1.18,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 600,
          color: colors.ink,
          letterSpacing: "-0.01em",
          transform: "translateY(10px)",
          whiteSpace: "nowrap",
        }}
      >
        We had an{" "}
        <span style={{ color: colors.brand }}>idea.</span> Then we{" "}
        <span style={{ color: colors.brand }}>built it.</span>
      </h1>

      <p
        style={{
          marginBottom: "20px",
          fontSize: "30px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 600,
          lineHeight: 1.25,
          color: colors.brand,
          transform: "translateY(20px)",
        }}
      >
        TorchX Suite
      </p>

      <p
        style={{
          marginBottom: "40px",
          fontSize: "22px",
          maxWidth: "28rem",
          lineHeight: 1.65,
          fontWeight: 500,
          color: "#1e1e1e",
          transform: "translate(-6px, 10px)",
        }}
      >
        One connected platform for the way your business works.
      </p>

      <p
        style={{
          marginBottom: "16px",
          fontSize: "18px",
          fontFamily: "Inter",
          maxWidth: "28rem",
          lineHeight: 1.65,
          fontWeight: 400,
          color: "#1e1e1e",
          transform: "translate(-6px, 10px)",
        }}
      >
        TorchX Suite brings HR, finance, payroll, inventory, and customer
        operations together in one place — helping teams work with less
        complexity, better visibility, and more confidence.
      </p>

      <CTAButton>Explore TorchX Suite</CTAButton>
    </div>
  );
}

// ---- Image --------------------------------------------------------------

function ImagePanel() {
  return (
<<<<<<< HEAD
    <div className="tx-image-panel relative w-full h-full flex items-center justify-end overflow-hidden">
      <img
        src="/sec7.png"
        alt="TorchX"
        className="tx-image block w-full h-full object-contain"
=======
    <div className="tx-image-panel relative w-full overflow-hidden">
      <img
        src="/sec7.png"
        alt="TorchX"
        className="tx-image block w-full h-full"
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
      />
    </div>
  );
}

// ---- Main component ------------------------------------------------------

export default function TorchXVideoSection() {
  return (
    <div
<<<<<<< HEAD
      className="w-full font-sans"
=======
      className="w-full font-sans overflow-hidden"
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
      style={{
        backgroundColor: "#fff",
        isolation: "isolate",
      }}
    >
      <style>{`
        /* ---------------------------------------------------------------
           CTA
        ---------------------------------------------------------------- */

        .tx-cta {
          transition:
            background-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .tx-cta:hover {
          background-color: ${colors.brand} !important;
          color: ${colors.cream} !important;
          transform: translateY(-1px);
        }

        .tx-cta svg {
          transition: transform 0.25s ease;
        }

        .tx-cta:hover svg {
          transform: translateX(3px);
        }

<<<<<<< HEAD
        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 767px) {
          .tx-section {
            display: flex;
            flex-direction: column;
            height: auto;
          }

          .tx-copy-wrapper {
            order: 1;
            width: 100%;
          }

          .tx-image-wrapper {
            order: 2;
            width: 100%;
            height: auto;
          }

          .tx-copy {
            transform: none !important;
            padding: 40px 20px 35px !important;
          }

          .tx-image-panel {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .tx-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: contain;
            object-position: right center;
          }
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (min-width: 768px) and (max-width: 1023px) {
          .tx-section {
            height: 500px;
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
          }

          .tx-copy-wrapper {
            height: 500px;
          }

          .tx-image-wrapper {
            height: 500px;
=======

        /* ---------------------------------------------------------------
           MAIN SECTION
        ---------------------------------------------------------------- */

        .tx-section {
          width: 100%;
          background: ${colors.cream};
        }


        /* ---------------------------------------------------------------
           IMAGE
        ---------------------------------------------------------------- */

        .tx-image-panel {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${colors.cream};
        }

        .tx-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          object-position: center;
        }


        /* ---------------------------------------------------------------
           TABLET / MEDIUM
        ---------------------------------------------------------------- */

        @media (min-width: 640px) and (max-width: 1023px) {
          .tx-section {
            display: grid;
            grid-template-columns: 1fr;
          }

          .tx-image-panel {
            max-height: 500px;
          }

          .tx-image {
            max-height: 500px;
            object-fit: contain;
          }
        }


        /* ---------------------------------------------------------------
           LAPTOP
        ---------------------------------------------------------------- */

        @media (min-width: 1024px) {
          .tx-section {
            display: grid;
            grid-template-columns: 50% 50%;
            min-height: 560px;
          }

          .tx-image-panel {
            height: 560px;
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
            display: flex;
            align-items: center;
            justify-content: flex-end;
            overflow: hidden;
          }

<<<<<<< HEAD
          .tx-image-panel {
            width: 100%;
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

=======
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
          .tx-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right center;
          }
<<<<<<< HEAD

          .tx-copy {
            transform: translateY(-10px);
            padding-left: 40px !important;
            padding-right: 35px !important;
          }
        }

        /* =====================================================
           DESKTOP
           ===================================================== */

        @media (min-width: 1024px) and (max-width: 1279px) {
          .tx-section {
            height: 520px;
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
          }

          .tx-copy-wrapper {
            height: 520px;
          }

          .tx-image-wrapper {
            height: 520px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            overflow: hidden;
          }

          .tx-image-panel {
            width: 100%;
            height: 520px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          .tx-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right center;
          }

          .tx-copy {
            transform: translate(40px, 20px);
          }
        }

        /* =====================================================
           LARGE DESKTOP
           ===================================================== */

        @media (min-width: 1280px) {
          .tx-section {
            height: 550px;
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
          }

          .tx-copy-wrapper {
            height: 550px;
          }

          .tx-image-wrapper {
            height: 550px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            overflow: hidden;
          }

          .tx-image-panel {
            width: 100%;
            height: 550px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
=======
        }


        /* ---------------------------------------------------------------
           LARGE DESKTOP
        ---------------------------------------------------------------- */

        @media (min-width: 1280px) {
          .tx-section {
            grid-template-columns: 50% 50%;
            min-height: 600px;
          }

          .tx-image-panel {
            height: 600px;
          }

          .tx-image {
            object-position: right center;
          }
        }


        /* ---------------------------------------------------------------
           EXTRA LARGE DESKTOP
        ---------------------------------------------------------------- */

        @media (min-width: 1536px) {
          .tx-section {
            grid-template-columns: 48% 52%;
            min-height: 620px;
          }

          .tx-image-panel {
            height: 620px;
          }
        }


        /* ---------------------------------------------------------------
           MOBILE
        ---------------------------------------------------------------- */

        @media (max-width: 639px) {
          .tx-section {
            display: flex;
            flex-direction: column;
          }

          .tx-image-panel {
            order: 1;
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
          }

          .tx-image {
            width: 100%;
<<<<<<< HEAD
            height: 100%;
            object-fit: contain;
            object-position: right center;
          }

          .tx-copy {
            transform: translate(60px, -25px);
=======
            height: auto;
            object-fit: contain;
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
          }
        }
      `}</style>

<<<<<<< HEAD
      <section
        className="tx-section grid grid-cols-1 md:grid-cols-2 w-full"
        style={{
          backgroundColor: colors.cream,
        }}
      >
        {/* ================= IMAGE ================= */}

        <div className="tx-image-wrapper order-1 md:order-2 min-h-0 flex justify-end">
          <ImagePanel />
        </div>

        {/* ================= COPY ================= */}

        <div className="tx-copy-wrapper order-2 md:order-1 flex items-center">
=======
      <section className="tx-section">
        {/* IMAGE */}
        <div className="order-1 lg:order-2 w-full">
          <ImagePanel />
        </div>

        {/* COPY */}
        <div className="order-2 lg:order-1 flex items-center w-full">
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
          <CopyPanel />
        </div>
      </section>
    </div>
  );
}