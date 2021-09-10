import React from "react";
import Differences from "../parts/Differences";
import FindOut from "../parts/FindOut";
import Footer from "../parts/Footer";
import Hero from "../parts/Hero";
import Nav from "../parts/Navbar";

function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Differences />
      <FindOut />
      <Footer />
    </div>
  );
}

export default LandingPage;
