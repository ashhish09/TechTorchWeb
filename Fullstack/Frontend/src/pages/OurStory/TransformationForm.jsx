import { useState } from "react";
<<<<<<< HEAD
import { Mail, ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";
=======
import {
  Mail,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da

const INDUSTRIES = [
  "Technology & Software",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & E-commerce",
  "Energy & Utilities",
  "Other",
];

export default function TransformationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    industry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
<<<<<<< HEAD
    setForm((f) => ({ ...f, [field]: e.target.value }));
=======
    setForm((f) => ({
      ...f,
      [field]: e.target.value,
    }));
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da

  const validate = () => {
    const next = {};

    if (!form.fullName.trim()) {
      next.fullName = "Enter your full name";
    }

    if (!form.email.trim()) {
      next.email = "Enter your company email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }

    if (!form.industry) {
      next.industry = "Select an industry";
    }

    if (!form.message.trim()) {
      next.message = "Tell us about your objectives";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputBase =
    "w-full bg-transparent border-b pb-2 text-[15px] sm:text-[16px] lg:text-[17px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors font-inter";

  return (
    <section className="w-full bg-slate-950 font-inter">
<<<<<<< HEAD
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[100px] lg:py-16 xl:py-20">
        <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl md:flex-row">
          {/* ================= LEFT PANEL ================= */}
          <div
            className="relative flex w-full flex-col justify-between gap-10 overflow-hidden p-7 font-inter sm:p-9 md:w-[42%] md:gap-16 md:p-10 lg:p-12"
=======
      <div
        className="
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-10
          lg:px-8
          lg:py-14
        "
      >
        <div
          className="
            w-full
            max-w-4xl
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
            shadow-2xl
            flex
            flex-col
            md:flex-row
          "
        >
          {/* ================= LEFT PANEL ================= */}
          <div
            className="
              relative
              w-full
              md:w-[42%]
              p-7
              sm:p-9
              md:p-10
              lg:p-12
              flex
              flex-col
              justify-between
              gap-10
              md:gap-16
              overflow-hidden
              font-inter
            "
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
            style={{
              background:
                "radial-gradient(120% 140% at 15% 15%, #6b1345 0%, #3d0d2c 45%, #1a0716 100%)",
            }}
          >
            <div>
              {/* Heading */}
              <h1
<<<<<<< HEAD
                className="text-[28px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[32px] md:text-[30px] lg:text-[34px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
=======
                className="
                  text-white
                  font-semibold
                  text-[28px]
                  sm:text-[32px]
                  md:text-[30px]
                  lg:text-[34px]
                  leading-[1.15]
                  tracking-tight
                  font-plus-jakarta
                "
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
              >
                Start Your Transformation
              </h1>

<<<<<<< HEAD
              <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed text-white/70 sm:mt-5 sm:text-[16px]">
=======
              <p
                className="
                  mt-4
                  sm:mt-5
                  text-[14px]
                  sm:text-[16px]
                  leading-relaxed
                  text-white/70
                  max-w-[300px] max-w-full
                  font-inter
                "
              >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                Connect with our engineering leadership to architect your next
                phase of growth.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:contact@techtorch.solutions"
<<<<<<< HEAD
              className="inline-flex w-fit items-center gap-3 break-all rounded-xl bg-white/10 px-4 py-3 text-[12px] text-white/90 transition-colors hover:bg-white/15 sm:text-[14px]"
            >
              <span className="flex h-7 w-7 min-w-7 items-center justify-center rounded-md bg-white/15">
=======
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-white/10
                hover:bg-white/15
                transition-colors
                px-4
                py-3
                text-white/90
                text-[12px]
                sm:text-[14px]
                w-fit
                font-inter
                break-all
              "
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  min-w-7
                  w-7
                  h-7
                  rounded-md
                  bg-white/15
                "
              >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                <Mail size={14} />
              </span>

              <span>contact@techtorch.solutions</span>
            </a>
          </div>

          {/* ================= RIGHT PANEL ================= */}
<<<<<<< HEAD
          <div className="w-full bg-white p-7 font-inter sm:p-9 md:w-[58%] md:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center sm:min-h-[420px]">
                <CheckCircle2 className="text-[#7a1750]" size={40} />

                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  Inquiry received
                </h2>

                <p className="max-w-[280px] text-[14px] text-slate-500 sm:text-[15px]">
=======
          <div
            className="
              w-full
              md:w-[58%]
              bg-white
              p-7
              sm:p-9
              md:p-10
              lg:p-12
              font-inter
            "
          >
            {submitted ? (
              <div
                className="
                  min-h-[380px]
                  sm:min-h-[420px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  gap-4
                  font-inter
                "
              >
                <CheckCircle2
                  className="text-[#7a1750]"
                  size={40}
                />

                <h2
                  className="
                    text-lg
                    sm:text-xl
                    font-semibold
                    text-slate-900
                    font-inter
                  "
                >
                  Inquiry received
                </h2>

                <p
                  className="
                    text-slate-500
                    text-[14px]
                    sm:text-[15px]
                    max-w-[280px] max-w-full
                    font-inter
                  "
                >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                  Someone from our engineering leadership team will reach out
                  to {form.email} shortly.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
<<<<<<< HEAD
=======

>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                    setForm({
                      fullName: "",
                      email: "",
                      industry: "",
                      message: "",
                    });
<<<<<<< HEAD
                    setErrors({});
                  }}
                  className="mt-2 text-[14px] text-[#7a1750] hover:underline"
=======

                    setErrors({});
                  }}
                  className="
                    mt-2
                    text-[14px]
                    text-[#7a1750]
                    hover:underline
                    font-inter
                  "
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
                {/* ================= NAME + EMAIL ================= */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
=======
              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  flex-col
                  gap-6
                  sm:gap-7
                  font-inter
                "
              >
                {/* ================= NAME + EMAIL ================= */}
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-6
                  "
                >
                  {/* Full Name */}
                  <div>
                    <label
                      className="
                        block
                        text-[12px]
                        font-semibold
                        tracking-wide
                        text-slate-500
                        mb-2
                        font-inter
                      "
                    >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={form.fullName}
                      onChange={update("fullName")}
                      className={`${inputBase} ${
                        errors.fullName
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#7a1750]"
                      }`}
                    />

                    {errors.fullName && (
<<<<<<< HEAD
                      <p className="mt-1 text-[12px] text-red-500">
=======
                      <p className="mt-1 text-[12px] text-red-500 font-inter">
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
<<<<<<< HEAD
                    <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
=======
                    <label
                      className="
                        block
                        text-[12px]
                        font-semibold
                        tracking-wide
                        text-slate-500
                        mb-2
                        font-inter
                      "
                    >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                      Company Email
                    </label>

                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={update("email")}
                      className={`${inputBase} ${
                        errors.email
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#7a1750]"
                      }`}
                    />

                    {errors.email && (
<<<<<<< HEAD
                      <p className="mt-1 text-[12px] text-red-500">
=======
                      <p className="mt-1 text-[12px] text-red-500 font-inter">
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ================= INDUSTRY ================= */}
                <div>
<<<<<<< HEAD
                  <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
=======
                  <label
                    className="
                      block
                      text-[12px]
                      font-semibold
                      tracking-wide
                      text-slate-500
                      mb-2
                      font-inter
                    "
                  >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                    Industry
                  </label>

                  <div className="relative">
                    <select
                      value={form.industry}
                      onChange={update("industry")}
<<<<<<< HEAD
                      className={`${inputBase} cursor-pointer appearance-none pr-8 ${
                        form.industry ? "text-slate-800" : "text-slate-400"
=======
                      className={`${inputBase} appearance-none pr-8 cursor-pointer ${
                        form.industry
                          ? "text-slate-800"
                          : "text-slate-400"
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                      } ${
                        errors.industry
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#7a1750]"
                      }`}
                    >
                      <option value="" disabled>
                        Select an industry...
                      </option>

                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
<<<<<<< HEAD
                      className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#7a1750]"
=======
                      className="
                        pointer-events-none
                        absolute
                        right-1
                        top-1/2
                        -translate-y-1/2
                        text-[#7a1750]
                      "
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                    />
                  </div>

                  {errors.industry && (
<<<<<<< HEAD
                    <p className="mt-1 text-[12px] text-red-500">
=======
                    <p className="mt-1 text-[12px] text-red-500 font-inter">
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* ================= MESSAGE ================= */}
                <div>
<<<<<<< HEAD
                  <label className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-500">
=======
                  <label
                    className="
                      block
                      text-[12px]
                      font-semibold
                      tracking-wide
                      text-slate-500
                      mb-2
                      font-inter
                    "
                  >
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Briefly describe your enterprise objectives..."
                    value={form.message}
                    onChange={update("message")}
<<<<<<< HEAD
                    className={`w-full resize-none rounded-lg border p-3 text-[14px] text-slate-800 placeholder:text-slate-400 transition-colors focus:outline-none sm:p-4 sm:text-[15px] ${
                      errors.message
                        ? "border-red-400"
                        : "border-slate-200 focus:border-[#7a1750]"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-1 text-[12px] text-red-500">
=======
                    className={`
                      w-full
                      rounded-lg
                      border
                      p-3
                      sm:p-4
                      text-[14px]
                      sm:text-[15px]
                      text-slate-800
                      placeholder:text-slate-400
                      focus:outline-none
                      resize-none
                      transition-colors
                      font-inter
                      ${
                        errors.message
                          ? "border-red-400"
                          : "border-slate-200 focus:border-[#7a1750]"
                      }
                    `}
                  />

                  {errors.message && (
                    <p className="mt-1 text-[12px] text-red-500 font-inter">
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ================= SUBMIT ================= */}
                <button
                  type="submit"
<<<<<<< HEAD
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99] sm:py-3.5 sm:text-[15px]"
=======
                  className="
                    mt-1
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    py-3
                    sm:py-3.5
                    px-5
                    text-white
                    text-[14px]
                    sm:text-[15px]
                    font-medium
                    transition-all
                    duration-300
                    hover:brightness-110
                    active:scale-[0.99]
                    font-inter
                  "
>>>>>>> 47322c39672fdfe03189944a65265a3f146ed0da
                  style={{
                    background:
                      "linear-gradient(135deg, #8a1a5c 0%, #5c0f3d 100%)",
                  }}
                >
                  Submit Inquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}