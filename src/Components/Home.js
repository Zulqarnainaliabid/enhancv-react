import React, {useContext, useState, useEffect, useRef} from 'react';
import {Context} from './Context/Context';
import Resume from './Resume';
import Navbar from './Navbar';
import {CSSTransition} from 'react-transition-group';
import Modal from './Modal';
import {BallTriangle} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import DropDown from './DropDown';
import ModalLeftToRight from './ModalLeftToRight';
import SelectedColors from './SelectedColors';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import backImage from './Images/backImagesMemory.jpg';
import {HandleGetCvBackUp} from './Services';
import Section from './BackUpCv/Section';
function Home () {
  const [displayPreLoader, setdisplayPreLoader] = useState (true);
  const contextData = useContext (Context);
  const [BackUpCvToggle, setBackUpCvToggle] = useState (false);
  const [BackUpCV, setBackUpCV] = useState ([]);
  useEffect (() => {
    const timer = setTimeout (() => {
      console.log ('This will run after 1 second!');
      setdisplayPreLoader (false);
    }, 1000);
    return () => clearTimeout (timer);
  }, []);

  useEffect (async () => {
    let value = localStorage.getItem ('Users');
    value = JSON.parse (value);
    if (value) {
      setBackUpCvToggle (true);
      let data = await HandleGetCvBackUp ();
      console.log ('pp--', data.data);
      setBackUpCV ([...data.data]);
    } else {
      contextData.HandleToggleModal ('Login');
      contextData.HandleShowModal (true);
      contextData.HandleBackGroundColorOfModal (true);
    }
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
          Pay special attention to your career objective and cover letter, which play an even more important role when you lack work experience.
        </p>
      </div>
    );
  } else if (BackUpCvToggle) {
    return (
      <div
        className="BackGroundImage"
        style={{
          backgroundImage: `url(${backImage})`,
        }}
      >
        {BackUpCV.map ((item, index) => {
          console.log ('oo', item);
          if (index === 1) {
            return (
              <div key={index}>
                <Section list={item.data} />
              </div>
            );
          }
        })}
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
            <Modal
              contentDisplay={contextData.ToggleModal}
              otherClass={contextData.ToggleModalCssClass}
            />
          </CSSTransition>
          <CSSTransition
            in={contextData.BackgroundColorOfModal}
            timeout={500}
            classNames="alert"
            unmountOnExit
          >

            <div
              className="backGroundOfModal CommonCssClassAbsolutePosition"
              style={{
                backgroundColor: contextData.Transparent
                  ? 'transparent'
                  : 'black',
                opacity: '0.8',
              }}
              onClick={() => {
                contextData.HandleBackGroundColorOfModal (false);
                contextData.HandleShowModal (false);
                contextData.HandleDisplayDropDownAlertMessage (false);
                contextData.handleDisplayTemplateModal (false);
                contextData.handleDisplayBackImageModal (false);
                contextData.handleDisplayColorsDropDown (false);
              }}
            />
          </CSSTransition>
          <div style={{position: 'relative'}}>
            <Resume />
            {contextData.DisplayDropDownAlertMessage &&
              <div className="OuterWrapperDropDownAlertMessage">
                <DropDown ContentDisplay={true} />
              </div>}
          </div>
          {contextData.DisplayTemplateModal &&
            <div
              className="OuterWrapperModalTemplate"
              style={{zIndex: contextData.DisplayTemplateModal ? 8 : 0}}
            >
              <ModalLeftToRight ToggleModal={false} />
            </div>}
          {contextData.DisplayBackImageModal &&
            <div
              className="OuterWrapperModalTemplate"
              style={{zIndex: contextData.DisplayBackImageModal ? 8 : 0}}
            >
              <ModalLeftToRight ToggleModal={true} />
            </div>}
          <div
            className="OuterWrapperDropDown"
            style={{zIndex: contextData.DisplayColorsDropDown ? 8 : 8}}
          >
            <SlideDown closed={!contextData.DisplayColorsDropDown}>
              <SelectedColors />
            </SlideDown>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
