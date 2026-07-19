import React from "react";
import { Helmet } from "react-helmet-async";

import Services from "../../Component/Services/Services";
import BestITSolution from "../../Component/BestITSolution/BestITSolution";
import HowItsWork from "../../Component/HowItsWork/HowItsWork";
import PricingPlans from "../../Component/PricingPlans/PricingPlans";
import FaqSection from "../../Component/FaqSection/FaqSection";
import ContactSection from "../../Component/ContactSection/ContactSection";
import HeroSection from "../../Component/HeroSection/HeroSection";
import HeroBusiness from "../../Component/HeroBusiness/HeroBusiness";
import LatestBlog from "../../Component/LatestBlog/LatestBlog";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          CloudXSecure | Cloud Security, Hosting & Managed Cloud Services
        </title>

        <meta
          name="description"
          content="CloudXSecure provides secure cloud hosting, managed cloud services, cybersecurity, DevOps automation, cloud migration, backup solutions, monitoring, cloud security, and IT consulting for businesses worldwide."
        />

        <meta
          name="keywords"
          content="CloudXSecure, Cloud Hosting, Managed Cloud Services, Cloud Security, DevOps, Cloud Migration, VPS Hosting, Cyber Security, Cloud Backup, Cloud Monitoring, IT Consulting"
        />

        <meta name="author" content="CloudXSecure" />

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://cloudxsecure.com/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="CloudXSecure | Cloud Security, Hosting & Managed Cloud Services"
        />

        <meta
          property="og:description"
          content="Secure cloud hosting, cybersecurity, managed cloud services, cloud monitoring, DevOps automation, backup and disaster recovery solutions."
        />

        <meta
          property="og:image"
          content="https://cloudxsecure.com/og-image.jpg"
        />

        <meta
          property="og:url"
          content="https://cloudxsecure.com/"
        />

        <meta
          property="og:site_name"
          content="CloudXSecure"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="CloudXSecure | Cloud Security & Managed Cloud Services"
        />

        <meta
          name="twitter:description"
          content="Enterprise-grade cloud security, cloud hosting, DevOps automation, cloud migration, monitoring and managed cloud services."
        />

        <meta
          name="twitter:image"
          content="https://cloudxsecure.com/twitter-card.jpg"
        />
      </Helmet>

      <HeroSection />
      <HeroBusiness />
      <Services />
      <BestITSolution />
      <HowItsWork />
      {/* <PricingPlans /> */}
      <FaqSection />
      <ContactSection />
      <LatestBlog />
    </>
  );
};

export default Home;