import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import Register from "./components/Register"; // Import Register page
import Homepage from "./components/Homepage"; 
import Footer from './components/Footer';  // Import Footer component


const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar here */}
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        {/* Define your Home page */}
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
