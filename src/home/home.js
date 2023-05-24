import React from "react";
import NavBar from "../common/NavBar";
import Products from "../pages/Products";
import { Experiences } from "../pages/Experiences";
import { Testimonials } from "../pages/Testimonials";
import { Footer } from "../common/Footer";

const home = () => {
  return (
    <div>
      <NavBar />
      <Products />
      <Experiences />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default home;
