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
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
