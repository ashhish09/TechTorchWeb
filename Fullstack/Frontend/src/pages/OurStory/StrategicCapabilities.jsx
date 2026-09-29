import React from "react";

const capabilities = [
  {
    img: "/AI visualization.png",
    title: "AI-Delivered Right",
    description:
      "Ethical, scalable artificial intelligence implementations that drive measurable operational efficiency.",
  },
  {
    img: "/Cloud visualization.png",
    title: "Cloud Infrastructure",
    description:
      "Resilient, multi-cloud architectures built for high availability and stringent security compliance.",
  },
  {
    img: "/Engineering visualization.png",
    title: "Engineering Services",
    description:
      "Precision software development utilizing modern stacks to construct robust enterprise applications.",
  },
  {
    img: "/Digital apps visualization.png",
    title: "Digital Applications",
    description:
      "End-to-end transformation of legacy systems into unified, high-performance digital ecosystems.",
  },
];

export default function StrategicCapabilities() {
  return (
<<<<<<< HEAD
    <section className="w-full overflow-hidden bg-[#F4F6FB] px-4 py-10 font-inter sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[100px] lg:py-16 xl:py-20">
      {/* Heading */}
      <div className="mb-8 w-full text-center sm:mb-10 md:mb-12">
        <h2
          className="mb-3 text-2xl font-bold leading-tight text-[#111827] sm:mb-4 sm:text-3xl md:text-[32px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
=======
    <section
      className="
        w-full
        bg-[#F4F6FB]
        px-5
        sm:px-8
        md:px-10
        lg:px-12
        py-12
        sm:py-14
        md:py-16
        lg:py-20
        font-inter
      "
    >
      {/* Heading */}
      <div className="w-full max-w-5xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h2
          className="
            text-[#111827]
            font-bold
            text-2xl
            sm:text-3xl
            md:text-[32px]
            leading-tight
            mb-3
            sm:mb-4
            font-plus-jakarta
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
        >
          Strategic Capabilities
        </h2>

<<<<<<< HEAD
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
=======
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-inter">
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
          Comprehensive enterprise solutions designed for the modern
          architectural landscape. We translate technical complexity into
          business advantage.
        </p>
      </div>

      {/* Cards */}
<<<<<<< HEAD
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-9">
        {capabilities.map(({ img, title, description }) => (
          <div
            key={title}
            className="group w-full overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5"
          >
            {/* Image */}
            <div className="mb-4 h-36 w-full overflow-hidden rounded-lg sm:h-32 md:h-36 lg:h-28 xl:h-32">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
=======
      <div
        className="
          w-full
          max-w-5xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          sm:gap-6
          lg:gap-7
          xl:gap-9
        "
      >
        {capabilities.map(({ img, title, description }) => (
          <div
            key={title}
            className="
              group
              w-full
              bg-white
              rounded-xl
              overflow-hidden
              shadow-sm
              p-4
              sm:p-5
              transition-all
              duration-300
              hover:shadow-md
              hover:-translate-y-1
              font-inter
            "
          >
            {/* Image */}
            <div
              className="
                w-full
                h-36
                sm:h-32
                md:h-36
                lg:h-28
                xl:h-32
                overflow-hidden
                rounded-lg
                mb-4
              "
            >
              <img
                src={img}
                alt={title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-105
                "
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
              />
            </div>

            {/* Card Heading */}
            <h3
<<<<<<< HEAD
              className="mb-2 text-[16px] font-semibold leading-snug sm:text-base"
=======
              className="
                font-semibold
                text-[16px]
                sm:text-base
                leading-snug
                mb-2
                font-inter
              "
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
              style={{ color: "#111827" }}
            >
              {title}
            </h3>

            {/* Card Description */}
<<<<<<< HEAD
            <p className="text-[13px] leading-relaxed text-gray-500 sm:text-sm">
=======
            <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed font-inter">
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}