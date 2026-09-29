import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";



import { Routes, Route } from "react-router-dom";

// ================= COMPONENTS =================
>>>>>>>>> Temporary merge branch 2
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// =================================================
// HOME COMPONENTS
// =================================================
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6"
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/Footer";

<<<<<<<<< Temporary merge branch 1
import AdminLogin from "./pages/AdminLogin";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminVerifyOTP from "./pages/AdminVerifyOTP";

=========
import HeroSlide01 from "./components/HeroSlides/HeroSlide01.jsx";
import HeroSlide02 from "./components/HeroSlides/HeroSlide02.jsx";
import HeroSlide03 from "./components/HeroSlides/HeroSlide03.jsx";
import HeroSlide04 from "./components/HeroSlides/HeroSlide04.jsx";
import Hero02Slide04 from "./components/Hero2Slides/Hero02Slide04.jsx";

// =================================================
// HERO SLIDE 2
// =================================================
import Hero02Slide01 from "./components/Hero2Slides/Hero02Slide01.jsx";
import Hero02Slide02 from "./components/Hero2Slides/Hero02Slide02.jsx";
import Hero02Slide03 from "./components/Hero2Slides/Hero02Slide03.jsx";
import Hero02Slide04 from "./components/Hero2Slides/Hero02Slide04.jsx";
import Hero02Slide05 from "./components/Hero2Slides/Hero02Slide05.jsx";
import Hero02Slide06 from "./components/Hero2Slides/Hero02Slide06.jsx";
<<<<<<<<< Temporary merge branch 1
import Hero03Slide01 from  "./components/Hero3Slides/Hero03Slide01.jsx";
import Hero03Slide02 from "./components/Hero3Slides/Hero03Slide02.jsx";
=========

import Hero03Slide01 from "./components/Hero3Slides/Hero03Slide01.jsx";
import Hero03Slide05 from "./components/Hero3Slides/Hero03Slide05.jsx";
import Hero03Slide07 from "./components/Hero3Slides/Hero03Slide07.jsx";
>>>>>>>>> Temporary merge branch 2



// =================================================
// HOME PAGE
// =================================================

function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin-forgot-password"
        element={<AdminForgotPassword />}
      />
      <Route
  path="/admin-verify-otp"
  element={<AdminVerifyOTP />}
/>
=========
function Slide1Page() {
  return (
    <>
      <HeroSlide01 />
      <HeroSlide02 />
      <HeroSlide03 />
      <HeroSlide04 />
    </>
  );
}

// =================================================
// SLIDE 2 PAGE
// =================================================
function Slide2Page() {
  return (
    <>
      <Hero02Slide01 />
      <Hero02Slide02 />
      <Hero02Slide03 />
      <Hero02Slide04 />
      <Hero02Slide05 />
      <Hero02Slide06 />
    </>
  );
}

function Slide3Page() {
  return (
    <div>
      <Hero03Slide01 />
<<<<<<<<< Temporary merge branch 1
      <Hero03Slide02 />
=========
      <Hero03Slide05 />
      <Hero03Slide07 />
>>>>>>>>> Temporary merge branch 2
    </div>
  );
}

// =================================================
// APP
// =================================================
function App() {
  return (
    <Routes>

      {/* ================= HOME PAGE ================= */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* ================= SLIDE 1 / SOLUTIONS PAGE ================= */}
      <Route
        path="/Slide1"
        element={<Slide1Page />}
      />

      <Route
        path="/Slide2"
        element={<Slide2Page />}
      />
      <Route
        path="/Slide3"
        element={<Slide3Page />}
      />

>>>>>>>>> Temporary merge branch 2
    </Routes>
  );
}
export default App;