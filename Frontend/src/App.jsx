import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Pages from "./Pages/Pages/Pages"
import FAQ from "./Pages/FAQ/FAQ"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
