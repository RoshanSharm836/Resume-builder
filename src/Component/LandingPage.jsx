import React from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing_page/Landing";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <div style={{ background: "white" }}>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default LandingPage;
