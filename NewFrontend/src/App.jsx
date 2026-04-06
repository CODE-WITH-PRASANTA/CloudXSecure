import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./Pages/Topbar/Topbar";
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



function App() {
  return (
    <BrowserRouter>

      <Topbar />
      <Navbar />
      <FloatingForm/>
      <FloatingIcons/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/web-development" element={<WebDevlopement />} />
        <Route path="/app-development" element={<AppDevlopement />} />
        <Route path="/service/details" element={<ServiceDetails/>} />

        {/* SERVICES */}

        <Route path="/it/service/details" element={<ITManagement/>} />
        <Route path="/digital/service/details" element={<DigitalMarketing/>} />
        <Route path="/managecloud/service/details" element={<ManageCloud/>} />
        <Route path="/cloudsecurity/service/details" element={<CloudSecurity/>} />
        <Route path="/cloudhosting/service/details" element={<CloudHosting/>} />
        <Route path="/cloudmigration/service/details" element={<CloudMigration/>}/>
        <Route path="/devops/details" element={<DevAuto/>}/>
        <Route path="/monitoring/service/details" element={<Monitoring/>}/>
        <Route path="/backup/service/details" element={<Backup/>}/>
        <Route path="/cloudconsult/service/details" element={<CloudConsulting/>}/>
      </Routes>
      
      <Footer />
      

    </BrowserRouter>
  );
}

export default App;