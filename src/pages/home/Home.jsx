import React from "react";
import "./Home.scss";
import CtaSection from "../../components/cta-section/CtaSection";
import FeatureSection from "../../components/feature-section/FeatureSection";
import FooterSection from "../../components/footer-section/FooterSection";
import Hero from "../../components/hero-section/Hero";
import PeopleSection from "../../components/people-section/PeopleSection";
import Section from "../../components/section/Section";
import TestimonialsSection from "../../components/testimonials-section/TestimonialsSection";
import FooterBottom from "../../components/footer-bottom/FooterBottom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Hero />
        <FeatureSection />
        <Section />
        <TestimonialsSection />
        <PeopleSection />
        <CtaSection />
        <FooterSection />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Home;
