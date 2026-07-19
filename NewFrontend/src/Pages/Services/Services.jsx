import React from "react";
import { Helmet } from "react-helmet-async";

import ServicesCompany from "../../Component/ServicesCompany/ServicesCompany";
import ServicesMember from "../../Component/ServicesMember/ServicesMember";
import LatestBlog from "../../Component/LatestBlog/LatestBlog";
import ServicesBreadcrumb from "../../Component/ServicesBreadcrumb/ServicesBreadcrumb";

const Services = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Cloud Services | Managed Cloud, Security, Hosting & DevOps | CloudXSecure
        </title>

        <meta
          name="description"
          content="Explore CloudXSecure services including managed cloud services, cloud hosting, cloud security, cloud monitoring, DevOps automation, cloud migration, backup & disaster recovery, IT consulting, and enterprise cybersecurity solutions."
        />

        <meta
          name="keywords"
          content="Cloud Services, Managed Cloud Services, Cloud Hosting, Cloud Security, DevOps Automation, Cloud Migration, Cloud Backup, Cloud Monitoring, IT Consulting, VPS Hosting, Cybersecurity, CloudXSecure"
        />

        <meta name="author" content="CloudXSecure" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://cloudxsecure.com/services"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Cloud Services | Managed Cloud, Security, Hosting & DevOps"
        />

        <meta
          property="og:description"
          content="Discover CloudXSecure's complete range of cloud services including managed cloud, cloud hosting, cloud security, DevOps, monitoring, migration, backup, and IT consulting."
        />

        <meta
          property="og:url"
          content="https://cloudxsecure.com/services"
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
          content="Cloud Services | Managed Cloud, Security, Hosting & DevOps"
        />

        <meta
          name="twitter:description"
          content="Managed Cloud Services, Cloud Security, Hosting, DevOps Automation, Monitoring, Migration, Backup & Disaster Recovery by CloudXSecure."
        />

        <meta
          name="twitter:image"
          content="https://cloudxsecure.com/twitter-card.jpg"
        />
      </Helmet>

      <div>
        <ServicesBreadcrumb />
        <ServicesCompany />
        <ServicesMember />
        <LatestBlog />
      </div>
    </>
  );
};

export default Services;