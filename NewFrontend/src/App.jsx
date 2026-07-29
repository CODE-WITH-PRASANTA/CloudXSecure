import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import FaqSection from "./Pages/FaqSection/FaqSection";
import WebDevlopement from "./Pages/WebDevlopement/WebDevlopement";
import AppDevlopement from "./Pages/AppDevlopement/AppDevlopement";
import FloatingForm from "./Component/FloatingForm/FloatingForm";
import FloatingIcons from "./Component/FloatingIcons/FloatingIcons";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";

import ManageCloud from "./Pages/ManageCloud/ManageCloud";
import CloudSecurity from "./Pages/CloudSecurity/CloudSecurity";
import CloudMigration from "./Pages/CloudMigration/CloudMigration";


import Loader from "./Component/Loader/Loader"; // ✅ import loader
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

import AwsConsultingCont from "./Component/AwsConsultingCont/AwsConsultingCont";
import AzureConsulting from "./Pages/AzureConsulting/AzureConsulting";
import DevOpsServices from "./Pages/DevOpsServices/DevOpsServices";
import AIDevService from "./Pages/AIDevService/AIDevService";
import CustomSoftwareService from "./Pages/CustomSoftwareService/CustomSoftwareService";
import ITInfraConsultService from "./Pages/ITInfraConsultService/ITInfraConsultService";
import AwsConsulting from "./Pages/AwsConsulting/AwsConsulting";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300); // adjust speed if needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* ✅ GLOBAL LOADER */}
      {loading && <Loader />}

      <Navbar />
      <FloatingForm />
      <FloatingIcons />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/service/details" element={<ServiceDetails />} />

        {/* SERVICES */}
        <Route path="/services/migration" element={<CloudMigration />} />
        <Route path="/services/cloud-security" element={<CloudSecurity />} />
        <Route path="/services/managed-cloud" element={<ManageCloud />} />
        <Route path="/services/aws-consulting" element={<AwsConsulting />} />
        <Route path="/services/azure-consulting" element={<AzureConsulting />} />
        <Route path="/services/devops" element={<DevOpsServices />} />
        <Route path="/services/web-development" element={<WebDevlopement />} />
        <Route path="/services/mobile-app-development" element={<AppDevlopement />} />
        <Route path="/services/ai-development" element={<AIDevService />} />
        <Route path="/services/custom-software-development" element={<CustomSoftwareService />} />
        <Route path="/services/it-infrastructure-consulting" element={<ITInfraConsultService />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;