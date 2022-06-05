import React, {useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logo from './Images/Logo.svg';
import {Link} from 'react-router-dom';
import {Context} from './Context/Context';
export default function Navbar (props) {
  const contextData = useContext (Context);
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
              <p
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
              </p>
              <p
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
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
