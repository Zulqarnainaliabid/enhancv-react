import React from "react";
import {Routes, Route} from "react-router-dom";
// import Login from './Example/Login'
// import Register from './Example/Register'
// import Forgot from './Example/ForgetPassword'
import Home from '../Components/Home'
import LandingPage from './LandingPage'
import CoverLetter from './CoverLetter'
import Account from './Account'
//new changing
function Routing () { 
  return (
    <Routes>
      <Route exact path="/cv" element={<Home />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/cover-letter" element={<CoverLetter />} />
      <Route exact path="/account" element={<Account />} />
    </Routes> 
  );
}
export default Routing;