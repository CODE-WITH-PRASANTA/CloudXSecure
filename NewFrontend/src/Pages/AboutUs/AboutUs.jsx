import React from "react";
import { Helmet } from "react-helmet-async";

import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import AboutSolution from "../../Component/AboutSolution/AboutSolution";
import AboutProject from "../../Component/AboutProject/AboutProject";
import LatestBlog from "../../Component/LatestBlog/LatestBlog";
import AboutBestItSolution from "../../Component/AboutBestItSolution/AboutBestItSolution";
import AboutCompany from "../../Component/AboutCompany/AboutCompany";
import AboutOurMission from "../../Component/AboutOurMission/AboutOurMission";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>About CloudXSecure | Trusted Cloud Security Company</title>

        <meta
          name="description"
          content="Learn about CloudXSecure, our mission, cloud experts, cybersecurity solutions, and commitment to helping businesses build secure, scalable, and reliable cloud infrastructure."
        />

        <meta
          name="keywords"
          content="About CloudXSecure, Cloud Security Company, Managed Cloud Services, Cybersecurity Experts, Cloud Infrastructure, Cloud Consulting, DevOps, Cloud Solutions, IT Company"
        />

        <meta name="author" content="CloudXSecure" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://cloudxsecure.com/about-us"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="About CloudXSecure | Trusted Cloud Security Company"
        />

        <meta
          property="og:description"
          content="Discover CloudXSecure's mission, expert team, cybersecurity solutions, managed cloud services, and commitment to delivering secure cloud infrastructure."
        />

        <meta
          property="og:url"
          content="https://cloudxsecure.com/about-us"
        />

        <meta
          property="og:image"
          content="https://cloudxsecure.com/og-image.jpg"
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
          content="About CloudXSecure | Trusted Cloud Security Company"
        />

        <meta
          name="twitter:description"
          content="Meet the CloudXSecure team and discover how we help businesses secure, manage, and optimize their cloud infrastructure."
        />

        <meta
          name="twitter:image"
          content="https://cloudxsecure.com/twitter-card.jpg"
        />
      </Helmet>

      <div>
        <Breadcrumb />
        <AboutSolution />
        <AboutProject />
        <LatestBlog />
        <AboutBestItSolution />
        <AboutCompany />
        <AboutOurMission />
      </div>
    </>
  );
};

export default AboutUs;