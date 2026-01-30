import React from 'react';
import HeroSection1 from '../../Components/HeroSection1/HeroSection1';
import MonitoringTestimonial from '../../Components/MonitoringTestimonial/MonitoringTestimonial';
import ExpertTeamSection1 from '../../Components/ExpertTeamSection1/ExpertTeamSection1';
import PricingSection1 from '../../Components/PricingSection1/PricingSection1';
import InsuranceSection from '../../Components/InsuranceSection/InsuranceSection';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import GetQuote from '../../Components/GetQuote/GetQuote';
import MarketingLogo from '../../Components/MarketingLogo/MarketingLogo';
import InsuranceHero from '../../Components/InsuranceHero/InsuranceHero';
const Monitoring = () => {
  return (
    <div>
      <HeroSection1 />
      <InsuranceHero />
      <MarketingLogo />
      <InsuranceSection />
      <WhyChooseUs />
      <GetQuote />
      <ExpertTeamSection1 />
      <MonitoringTestimonial />
      <PricingSection1 />
    </div>
  );
};

export default Monitoring;
