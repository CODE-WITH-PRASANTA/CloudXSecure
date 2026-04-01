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



function App() {
  return (
    <BrowserRouter>

      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/web-development" element={<WebDevlopement />} />
        <Route path="/app-development" element={<AppDevlopement />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;