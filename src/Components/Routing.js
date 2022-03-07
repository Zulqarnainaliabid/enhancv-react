import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from '../Components/Home'
import LandingPage from './LandingPage'
import CoverLetter from './CoverLetter'
function Routing () {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/cv" element={<Home />} />
      <Route exact path="/cover-letter" element={<CoverLetter />} />
    </Routes>
  );
}
export default Routing;