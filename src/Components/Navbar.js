import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logo from './Images/Logo.svg';
import {Link} from 'react-router-dom';
import {Context} from './Context/Context';
import DropDown from './DropDown';
export default function Navbar (props) {
  const [ToggleSignUpButton, setToggleSignUpButton] = useState (false);
  const [ToggleLoginButton, setToggleLoginButton] = useState (false);

  const contextData = useContext (Context);
  const [UserName, setUserName] = useState ('');

  useEffect (
    () => {
      if (localStorage.getItem ('Account') !== null) {
        console.log("hello")
        let value = localStorage.getItem ('Account');
        value = JSON.parse (value);
        setUserName (value.userFname);
      } else {
        setToggleSignUpButton (false);
      }

     

      if (localStorage.getItem ('leLoginSuccess') !== null) {
        let value = localStorage.getItem ('leLoginSuccess');
        value = JSON.parse (value);
        setToggleLoginButton (true);
        setToggleSignUpButton (true);
      } else {
        setToggleLoginButton (false);
      }
    },
    [contextData.UpdateAccountSuccess, contextData.UpdateLoginSuccess]
  );
  
console.log("oo",ToggleSignUpButton)
  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'sticky',
        top: '0',
        height: '80px',
        zIndex: '5',
      }}
    >
      <Container fluid>
        <Row>
          <Col>
            <div className="d-flex ">
              <div className="" style={{width: '90px'}}>
                <Link
                  onClick={() => {
                    window.scrollTo (0, 0);
                  }}
                  className="text-decoration-none"
                  to="/"
                >
                  <img
                    src={logo}
                    alt="logo"
                    style={{width: '100%', height: '60px'}}
                  />
                </Link>
              </div>
              <form
                className="d-flex  align-items-center"
                style={{
                  gap: '30px',
                  fontSize: '17px',
                  marginLeft: '20px',
                  fontWeight: '500',
                }}
              >
                <p>
                  <Link
                    onClick={() => {
                      window.scrollTo (0, 0);
                    }}
                    className="text-decoration-none linkColorHeader"
                    to="/cv"
                  >
                    CV
                  </Link>
                </p>
                <p>
                  <Link
                    onClick={() => {
                      window.scrollTo (0, 0);
                    }}
                    className="text-decoration-none linkColorHeader"
                    to="/cover-letter"
                  >
                    CoverLetter
                  </Link>
                </p>
              </form>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <div
              className="d-flex justify-content-center  align-items-center"
              style={{gap: '12px'}}
            >
              {ToggleLoginButton
                ? <div>
                    <Link
                      onClick={() => {
                        window.scrollTo (0, 0);
                      }}
                      className="text-decoration-none"
                      to="/cv"
                    >
                      <p className="LoginButton CommonSccClassSignInAndLogInButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius">
                        My Documents
                      </p>
                    </Link>
                  </div>
                : <p
                    className="LoginButton CommonSccClassSignInAndLogInButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius"
                    onClick={() => {
                      contextData.HandleBackGroundColorOfModal (true);
                      contextData.HandleShowModal (true);
                      contextData.HandleToggleModal ('SignIn');
                      contextData.handleDisplayBackgroundTransparent (false);
                      contextData.HandleToggleModalCSSClass (
                        'outerWrapperModalSignIn'
                      );
                    }}
                  >
                    Login
                  </p>}

              {ToggleSignUpButton
                ? <div>
                    <div
                      className="d-flex text-white text-uppercase justify-content-center align-items-center outerWrapperUserInNaveBar"
                      style={{gap: '2px'}}
                      onClick={() => {
                        contextData.HandleBackGroundColorOfModal (true);
                        contextData.HandleDisplayNaveBarDropDown (
                          !contextData.DisplayNaveBarDropDown
                        );
                      }}
                    >
                      <p>{UserName.charAt (0)}</p>
                      <p>{UserName.charAt (1)}</p>
                    </div>
                  </div>
                : <p
                    className="SignInButton CommonSccClassSignInAndLogInButton FontWeight CommonCssClassCursorPointer BorderRadius"
                    onClick={() => {
                      contextData.HandleBackGroundColorOfModal (true);
                      contextData.HandleShowModal (true);
                      contextData.HandleToggleModal ('Login');
                      contextData.HandleToggleModalCSSClass (
                        'outerWrapperModalSignIn'
                      );
                      contextData.handleDisplayBackgroundTransparent (false);
                    }}
                  >
                    Sign Up
                  </p>}

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
