import React, {useContext, useState, useEffect} from 'react';
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
function Home () {
  const [displayPreLoader, setdisplayPreLoader] = useState (true);
  const contextData = useContext (Context);
  useEffect (() => {
    const timer = setTimeout (() => {
      console.log ('This will run after 1 second!');
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
          Pay special attention to your career objective and cover letter, which play an even more important role when you lack work experience.
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
              style={{backgroundColor:contextData.Transparent?"transparent":"rgba(0, 0, 0, 0.397)"}}
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
            <SlideDown
              closed={!contextData.DisplayColorsDropDown}
            >
              <SelectedColors />
            </SlideDown>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
