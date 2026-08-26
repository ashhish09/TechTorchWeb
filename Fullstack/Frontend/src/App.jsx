import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// ================= COMPONENTS =================
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

import Section6 from "./components/Section6"

import Section6 from "./components/Section6";

import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/Footer";


import Slide1 from "./components/hero1slides/Slide1.jsx";
import Slide13 from "./components/hero1slides/Slide13.jsx";
import Slide21 from "./components/hero1slides/Slide21.jsx";
import Slide25 from "./components/hero1slides/Slide25.jsx";


// =================================================
// HOME PAGE
// =================================================
function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Hero2 />

      <Hero3 />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <Section9 />

      <Footer />
    </div>
  );
}

function Slide1Page() {
  return (
    <div>
      <HeroSlide01 />
      <HeroSlide02/>
      <HeroSlide03/>
      <HeroSlide04/>
    </div>
  );
}

function Slide2Page() {
  return (
    <div>
      <Hero02Slide01 />
      <Hero02Slide02 />
      <Hero02Slide05 />
      <Hero02Slide06 />

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

    </Routes>
  );
}

export default App;