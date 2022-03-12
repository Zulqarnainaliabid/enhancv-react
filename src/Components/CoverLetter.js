import React, {useEffect, useState, useContext, useRef} from 'react';
import {BallTriangle} from 'react-loader-spinner';
import {Context} from './Context/Context';
import {CgTemplate} from 'react-icons/cg';
import {IoIosColorPalette} from 'react-icons/io';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navbar from './Navbar';
import {MdDownloadForOffline} from 'react-icons/md';
import ReactToPrint from 'react-to-print';
import CoverLetterPrint from './CoverLetterPrint';
import ModalLeftToRight from './ModalLeftToRight';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import SelectedColors from './SelectedColors';
import {CSSTransition} from 'react-transition-group';
import Modal from './Modal';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
function CoverLetter (props) {
  const contextData = useContext (Context);
  const componentRef = useRef (null);
  const onBeforeGetContentResolve = useRef (null);
  const [text, setText] = useState ('old boring text');
  const [displayPreLoader, setdisplayPreLoader] = useState (true);
  useEffect (() => {
    const timer = setTimeout (() => {
      setdisplayPreLoader (false);
    }, 1000);
    return () => clearTimeout (timer);
  }, []);
  const handleAfterPrint = React.useCallback (() => {
    console.log ('`onAfterPrint 123333` called');
  }, []);
  const handleBeforePrint = React.useCallback (() => {
    console.log ('`onBeforePrint 12 12   ` called 123');
  }, []);
  const handleOnBeforeGetContent = React.useCallback (
    () => {
      console.log ('`onBeforeGetContent 12 12` called');
      setText ('Loading new text...');
      return new Promise (resolve => {
        onBeforeGetContentResolve.current = resolve;
        setTimeout (() => {
          setText ('New, Updated Text!');
          resolve ();
        }, 2000);
      });
    },
    [setText]
  );
  const reactToPrintTrigger = React.useCallback (() => {
    return (
      <div
        className="d-flex align-items-center DownloadButton FontWeight CommonCssClassCursorPointer fontSize14"
        style={{gap: '6px'}}
      >
        <MdDownloadForOffline style={{fontSize: '22px'}} />
        <div className="FontWeight ">Download</div>
      </div>
    );
  }, []);

  const reactToPrintContent = React.useCallback (
    () => {
      let value = localStorage.getItem ('Users');
      value = JSON.parse (value);
      if (value === null) {
        confirmAlert ({
          title: 'Please Login First',
          buttons: [
            {
              label: 'OK',
            },
          ],
        });
        return null;
      } else {
        return componentRef.current;
      }
    },
    [componentRef.current]
  );

  function BackColor () {
    if (
      contextData.DisplayBackImageModal ||
      contextData.DisplayColorsDropDown ||
      contextData.ShowModal
    ) {
      return (
        <div
          className="backGroundOfModal CommonCssClassAbsolutePosition"
          style={{
            backgroundColor: contextData.Transparent ? 'transparent' : 'black',
            opacity: '0.8',
            zIndex: '7',
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
      );
    } else {
      return <div />;
    }
  }

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
      <div style={{position: 'relative'}}>
        {BackColor ()}
        <Navbar />
        <div
          className="d-flex pt-3 pb-3 justify-content-center"
          style={{
            gap: '20px',
            position: 'sticky',
            top: '80px',
            zIndex: '6',
            backgroundColor: '#F3F3F3',
          }}
        >
          <div
            className="d-flex align-items-center FontWeight RearrangeButtons CommonCssClassCursorPointer"
            style={{gap: '6px', position: 'relative'}}
            onClick={() => {
              contextData.handleDisplayColorsDropDown (true);
              contextData.HandleBackGroundColorOfModal (true);
              contextData.handleDisplayBackgroundTransparent (true);
            }}
          >
            <IoIosColorPalette style={{fontSize: '17px'}} />
            <p>Color</p>
          </div>
          <div
            className="d-flex align-items-center FontWeight RearrangeButtons CommonCssClassCursorPointer"
            style={{gap: '6px'}}
            onClick={() => {
              contextData.handleDisplayBackImageModal (true);
              contextData.HandleBackGroundColorOfModal (true);
              contextData.handleDisplayBackgroundTransparent (true);
              console.log ('click');
            }}
          >
            <CgTemplate style={{fontSize: '17px'}} />
            <p>Select Image</p>
          </div>
          <ReactToPrint
            content={reactToPrintContent}
            documentTitle="AwesomeFileName"
            onAfterPrint={handleAfterPrint}
            onBeforeGetContent={handleOnBeforeGetContent}
            onBeforePrint={handleBeforePrint}
            removeAfterPrint
            trigger={reactToPrintTrigger}
          />
        </div>
        <CoverLetterPrint text={text} ref={componentRef} />
        {contextData.DisplayBackImageModal &&
          <div
            className="OuterWrapperModalTemplate"
            style={{zIndex: contextData.DisplayBackImageModal ? 8 : 0}}
          >
            <ModalLeftToRight ToggleModal={true} />
          </div>}
        <div
          className="OuterWrapperDropDown"
          style={{
            zIndex: contextData.DisplayColorsDropDown ? 8 : 8,
            right: '51%',
          }}
        >
          <SlideDown closed={!contextData.DisplayColorsDropDown}>
            <SelectedColors />
          </SlideDown>
        </div>
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
      </div>
    );
  }
}

export default CoverLetter;
