import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./Pages/Topbar/Topbar";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import Faq from "./Pages/Faq/Faq";

function App() {
  return (
    <BrowserRouter>

      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;