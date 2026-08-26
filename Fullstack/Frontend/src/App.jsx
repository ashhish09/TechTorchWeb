import React from "react";
import "./App.css";
<<<<<<< HEAD

import { Routes, Route } from "react-router-dom";

// ================= COMPONENTS =================
=======
import { Routes, Route } from "react-router-dom";

>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
import Navbar from "./components/Navbar";
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
import Slide1 from "./components/hero1slides/Slide1.jsx";
import Slide13 from "./components/hero1slides/Slide13.jsx";

import AdminLogin from "./pages/AdminLogin";
import AdminForgotPassword from "./pages/AdminForgotPassword";

<<<<<<< HEAD
// =================================================
// HOME PAGE
// =================================================
=======
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
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

<<<<<<< HEAD
function Slide1Page() {
  return (
    <div>
      <Slide1 />

      <Slide13 />
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


=======
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin-forgot-password"
        element={<AdminForgotPassword />}
      />
>>>>>>> 6d714355b09e8ea7477b6acc780e9b0b0fd4f34d
    </Routes>
  );
}

export default App;