import React from "react";
import { Helmet } from "react-helmet-async";

import ContactBreadcrum from "../../Component/ContactBreadcrum/ContactBreadcrum";
import ContactMainPage from "../../Component/ContactMainPage/ContactMainPage";

const Contact = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Contact CloudXSecure | Get Expert Cloud Support</title>

        <meta
          name="description"
          content="Contact CloudXSecure for cloud security consulting, managed cloud services, cloud hosting solutions, cloud migration assistance, DevOps support, cybersecurity services, and professional IT consulting."
        />

        <meta
          name="keywords"
          content="Contact CloudXSecure, Cloud Support, Cloud Security Consulting, Managed Cloud Services, Cloud Hosting, Cloud Migration, DevOps Support, Cybersecurity, IT Consulting, Cloud Infrastructure"
        />

        <meta name="author" content="CloudXSecure" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://cloudxsecure.com/contact"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Contact CloudXSecure | Get Expert Cloud Support"
        />

        <meta
          property="og:description"
          content="Need cloud security, hosting, migration, DevOps, or IT consulting? Contact CloudXSecure's experts for reliable cloud solutions tailored to your business."
        />

        <meta
          property="og:url"
          content="https://cloudxsecure.com/contact"
        />

        <meta
          property="og:image"
          content="https://cloudxsecure.com/og-image.jpg"
        />

        <meta
          property="og:site_name"
          content="CloudXSecure"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Contact CloudXSecure | Get Expert Cloud Support"
        />

        <meta
          name="twitter:description"
          content="Reach out to CloudXSecure for managed cloud services, cybersecurity, cloud hosting, migration, DevOps, monitoring, backup, and IT consulting."
        />

        <meta
          name="twitter:image"
          content="https://cloudxsecure.com/twitter-card.jpg"
        />
      </Helmet>

      <div>
        <ContactBreadcrum />
        <ContactMainPage />
      </div>
    </>
  );
};

export default Contact;