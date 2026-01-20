import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Pages from "./Pages/Pages/Pages"
import FAQ from "./Pages/FAQ/FAQ"
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Services/Services";
import ManagedCloud from "./Pages/ManagedCloud/ManagedCloud";
import TermsOfService from "./Pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ComingSoon from "./Pages/ComimgSoon/ComimgSoon";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import OurServices from "./Pages/OurServices/OurServices";
import AppDevlopment from "./Pages/AppDevlopment/AppDevlopment";
import CloudMaigration from "./Pages/CloudMaigration/CloudMaigration";
import WebdevlopementService from "./Pages/WebdevlopementService/WebdevlopementService";
import CloudSecurity from "./Pages/CloudSecurity/CloudSecurity";
import CloudHosting from "./Pages/CloudHosting/CloudHosting";
import DevOpsAutomation from "./Pages/DevOpsAutomation/DevOpsAutomation"
import BDrecovery from "./Pages/BDrecovery/BDrecovery";
import PlanAndPricing from "./Pages/PlanAndPricing/PlanAndPricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/managed-cloud" element={<ManagedCloud />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="//privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<ComingSoon />} />
        <Route path="/get-in-touch" element={<GetInTouch  />} />
        <Route path="/services/our-services" element={<OurServices />} />
        <Route path="/devlopment/appdevlopment" element={<AppDevlopment />} />
        <Route path="/services/migration" element={<CloudMaigration />} />
        <Route path="/devlopment/webdevlopment" element={<WebdevlopementService/>}/>
        <Route path="/services/security" element={<CloudSecurity />} />
        <Route path="/services/hosting" element={<CloudHosting />} />
        <Route path="/services/devops" element={<DevOpsAutomation/>}/>
        <Route path="/services/backup" element={<BDrecovery/>}/>
        <Route path="/plan" element={<PlanAndPricing />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
