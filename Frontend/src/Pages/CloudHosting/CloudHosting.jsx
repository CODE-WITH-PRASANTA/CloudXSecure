import React from "react";
import "./CloudHosting.css";
import HostingHeroSection from "../../Components/HostingHeroSection/HostingHeroSection";
import BrandBanner from "../../Components/BrandBanner/BrandBanner";
import CompanySection from "../../Components/CompanySection/CompanySection";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
import WorkProcessSection from "../../Components/WorkProcessSection/WorkProcessSection";
import CaseStudySection from "../../Components/CaseStudySection/CaseStudySection";
import CaseStudySection1 from "../../Components/CaseStudySection1/CaseStudySection1";
import PricingSection from "../../Components/PricingSection/PricingSection";
import ExpertTeamSection from "../../Components/ExpertTeamSection/ExpertTeamSection";
import ContactPage from "../../Components/ContactPage/ContactPage";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";

const CloudHosting = () => {
  return (
    <div className="cloud-hosting-page">
      <HostingHeroSection />
      <BrandBanner />
      <FeatureSection />
      <CompanySection />
      <ServiceSection />
      <WorkProcessSection />
      <CaseStudySection />
      <CaseStudySection1 />
      <PricingSection />
      <ExpertTeamSection />
      <ContactPage />
      {/* Add more sections/components related to Cloud Hosting as needed */}
      
    </div>
  );
};

export default CloudHosting;