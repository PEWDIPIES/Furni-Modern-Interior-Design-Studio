


import React from "react";
import Home from "./Components/pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/pages/Aboutus/Aboutus";
import Shop from "./Components/pages/Shop/Shop";
import Services from "./Components/pages/Services/Services";
import Contact from "./Components/pages/Contact/Contact";
import Blog from "./Components/pages/Blog/Blog";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contactus" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
