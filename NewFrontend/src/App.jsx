import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./Pages/Topbar/Topbar";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";


function App() {
  return (
    <BrowserRouter>

      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
       </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;