import React from "react";
import Services from "../../Component/Services/Services";
import BestITSolution from "../../Component/BestITSolution/BestITSolution";
import HowItsWork from "../../Component/HowItsWork/HowItsWork";
import PricingPlans from "../../Component/PricingPlans/PricingPlans";
import FaqSection from "../../Component/FaqSection/FaqSection";
import Testimonials from "../../Component/Testimonials/Testimonials";
import ContactSection from "../../Component/ContactSection/ContactSection";

import HeroSection from "../../Component/HeroSection/HeroSection";
import HeroBusiness from "../../Component/HeroBusiness/HeroBusiness";
import LatestBlog from "../../Component/LatestBlog/LatestBlog";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroBusiness />
      <Services />
      <BestITSolution />
      <HowItsWork />
      <PricingPlans />
      <FaqSection />
      <Testimonials />
      <ContactSection />
      <LatestBlog />
    </div>
  );
};

export default Home;
