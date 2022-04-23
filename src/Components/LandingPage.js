import React, {useContext, useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Context} from './Context/Context';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import backImage from './Images/BackImage.jpg';
import Modal from './Modal';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {BallTriangle} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
function LandingPage (props) {
  const contextData = useContext (Context);
  const [displayPreLoader, setdisplayPreLoader] = useState (true);
  useEffect (() => {
    const timer = setTimeout (() => {
      setdisplayPreLoader (false);
    }, 1000);
    return () => clearTimeout (timer);
  }, []);

  if (displayPreLoader) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '550px',
          flexDirection: 'column',
        }}
      >
        <BallTriangle
          heigth="100"
          width="100"
          color="#00C091"
          ariaLabel="loading"
        />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="OuterContainer d-flex flex-column align-items-center">
          <CSSTransition
            in={contextData.ShowModal}
            timeout={500}
            classNames="alert"
            unmountOnExit
          >
            <div className='d-flex justify-content-center align-items-center'>
              <Modal
                contentDisplay={contextData.ToggleModal}
                otherClass={contextData.ToggleModalCssClass}
              />
            </div>
          </CSSTransition>
        </div>
        <div
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${backImage})`,
            overflow: 'auto',
          }}
        >
          <Container>
            <Row md={4} className="justify-content-center">
              <Col className="LandingPageMainHeading w-100 CommonCssClassWhiteColor align-items-center text-center">
                Welcome to Perfect CV Builder
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <p className="LandingPagerButtonCreateCV CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius
            align-items-center">
                <Link
                  onClick={() => {
                    window.scrollTo (0, 0);
                  }}
                  className="text-decoration-none text-white"
                  to="/cv"
                >
                  Create CV
                </Link>
              </p>
            </Row>
          </Container>
        </div>
        <CSSTransition
          in={contextData.BackgroundColorOfModal}
          timeout={500}
          classNames="alert"
          unmountOnExit
        >
          <div
            className="backGroundOfModal CommonCssClassAbsolutePosition"
            onClick={() => {
              contextData.HandleBackGroundColorOfModal (false);
              contextData.HandleShowModal (false);
            }}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default LandingPage;
