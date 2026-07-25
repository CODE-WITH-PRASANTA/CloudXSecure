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
import ITManagement from "./Pages/ITManagement/ITManagement";
import DigitalMarketing from "./Pages/DigitalMarketing/DigitalMarketing";
import ManageCloud from "./Pages/ManageCloud/ManageCloud";
import CloudSecurity from "./Pages/CloudSecurity/CloudSecurity";
import CloudHosting from "./Pages/CloudHosting/CloudHosting";
import CloudMigration from "./Pages/CloudMigration/CloudMigration";
import DevAuto from "./Pages/DevAuto/DevAuto";
import Monitoring from "./Pages/Monitoring/Monitoring";
import Backup from "./Pages/Backup/Backup";
import CloudConsulting from "./Pages/CloudConsulting/CloudConsulting";

import Loader from "./Component/Loader/Loader"; // ✅ import loader
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

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
        <Route path="/web-development" element={<WebDevlopement />} />
        <Route path="/app-development" element={<AppDevlopement />} />
        <Route path="/service/details" element={<ServiceDetails />} />

        {/* SERVICES */}
        <Route path="/it/service/details" element={<ITManagement />} />
        <Route path="/digital/service/details" element={<DigitalMarketing />} />
        <Route path="/managecloud/service/details" element={<ManageCloud />} />
        <Route path="/cloudsecurity/service/details" element={<CloudSecurity />} />
        <Route path="/cloudhosting/service/details" element={<CloudHosting />} />
        <Route path="/services/migration" element={<CloudMigration />} />
        <Route path="/devops/details" element={<DevAuto />} />
        <Route path="/monitoring/service/details" element={<Monitoring />} />
        <Route path="/backup/service/details" element={<Backup />} />
        <Route path="/cloudconsult/service/details" element={<CloudConsulting />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;