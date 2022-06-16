import React from 'react';
import logo from './Images/Logo.svg';
import {Link} from 'react-router-dom';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
function Footer () {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <p className="FooterLeftHeading">© 2022 Perfect Cv All Right Reserved</p>
      <div style={{marginRight: '152px'}}>
        <Link
          onClick={() => {
            window.scrollTo (0, 0);
          }}
          className="text-decoration-none"
          to="/"
        >
          <img src={logo} alt="logo" style={{width: '100%', height: '30px'}} />
        </Link>
      </div>
      <div className='d-flex' style={{gap:"12px",cursor:"pointer",fontSize:"18px"}}>
        <FaFacebookF className='IconFacebookInFooter' />
        <FaTwitter className='IconFacebookInFooter' />
        <BsInstagram className='IconFacebookInFooter' />
      </div>

    </div>
  );
}

export default Footer;
