import React from "react";
import Hero from "./Hero";
import AboutSection from "./About";
import ProductSection from "./ProductSection";
import Testimonials from "./Testimonial";
import ContactSection from "./GetInTouch";

const Home = () => {
  return (
          <>
          <Hero />
          <AboutSection />
          <ProductSection/>
          <Testimonials />
          <ContactSection />
          </>
  );
};

export default Home;
