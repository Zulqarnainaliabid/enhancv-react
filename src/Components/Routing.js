import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import LandingPage from './LandingPage';
import CoverLetter from './CoverLetter';
import Account from './Account';
import ResetPassword from './ResetPassword';
function Routing () {
  return (
    <Routes>
      <Route exact path="/cv" element={<Home />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/cover-letter" element={<CoverLetter />} />
      <Route exact path="/account" element={<Account />} />
      <Route exact path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
export default Routing;
