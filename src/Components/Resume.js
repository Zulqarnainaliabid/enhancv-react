import React, {useRef, useContext, useState,useEffect} from 'react';
import ReactToPrint from 'react-to-print';
import {ComponentToPrint} from './ComponentToPrint';
import {HiPlusCircle} from 'react-icons/hi';
import {CgTemplate} from 'react-icons/cg';
import {MdDownloadForOffline} from 'react-icons/md';
import {BsPencil} from 'react-icons/bs';
import {Context} from '../Components/Context/Context';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import DragAndDropComponent from './DragAndDropComponent';
import {HiTemplate} from 'react-icons/hi';
import {IoIosColorPalette} from 'react-icons/io';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {HandleUpdateCV, HandlePutCvBackUp} from './Services';
import Footer from './Footer';
export default function Resume (props) {
  const [state, setState] = useState (true);
  const contextData = useContext (Context);
  const [ResumeName, setResumeName] = useState("")

  const componentRef = useRef (null);
  const childRef = useRef ();
  const onBeforeGetContentResolve = useRef (null);
  const [loading, setLoading] = useState (false);
  const [text, setText] = useState ('old boring text');
 
  const handleAfterPrint = React.useCallback (() => {
    console.log ('`onAfterPrint` called');
  }, []);
  const handleBeforePrint = React.useCallback (() => {
    console.log ('`onBeforePrint` called');
  }, []);
  const handleOnBeforeGetContent = React.useCallback (
    () => {
      console.log ('`onBeforeGetContent` called');
      childRef.current.getAlert ();
      childRef.current.HandleDisplayCurve ();
      setLoading (true);
      setText ('Loading new text...');
      return new Promise (resolve => {
        onBeforeGetContentResolve.current = resolve;
        setTimeout (() => {
          setLoading (false);
          setText ('New, Updated Text!');
          resolve ();
        }, 2000);
      });
    },
    [setLoading, setText]
  );
  React.useEffect (
    () => {
      if (
        text === 'New, Updated Text!' &&
        typeof onBeforeGetContentResolve.current === 'function'
      ) {
        onBeforeGetContentResolve.current ();
      }
    },
    [onBeforeGetContentResolve.current, text]
  );

  const reactToPrintContent = React.useCallback (
    () => {
      let value = localStorage.getItem ('Users');
      value = JSON.parse (value);
      if (value === null) {
        confirmAlert ({
          title: 'Please SignUp First',
          buttons: [
            {
              label: 'OK',
            },
          ],
        });
        return null;
      } else {
        if (contextData.UpdateBackUpCv) {
          HandlePutCvBackUp (contextData.UpdateBackUpCv);
          contextData.HandleUpdateBackUpCv (null);
        } else {
          HandleUpdateCV ();
        }

        return componentRef.current;
      }
    },
    [componentRef.current]
  );
  
  const reactToPrintTrigger = React.useCallback (() => {
    return (
      <div
        className="d-flex align-items-center DownloadButton FontWeight CommonCssClassCursorPointer fontSize14"
        style={{gap: '6px'}}
        onClick={() => {}}
      >
        <MdDownloadForOffline style={{fontSize: '22px'}} />
        <div className="FontWeight ">Download</div>
      </div>
    );
  }, []);


  useEffect (() => {
    if (localStorage.getItem ('HeaderInputValue') !== null) {
      let value = localStorage.getItem ('HeaderInputValue');
      value = JSON.parse (value);
      setResumeName (value.name);
    }
  }, []);

  let ref = {
    ref1: componentRef,
    ref2: childRef,
  };
  let Resume = (
    <span>
      <ComponentToPrint text={text} ref={ref} HandleState={setState} />
      {/* <button onClick={() => childRef.current.getAlert ()}>Click</button> */}
    </span>
  );
  
  return (
    <div>
      <div className="pb-5">
        {state &&
          <div
            className="d-flex pt-3 pb-3"
            style={{
              gap: '20px',
              position: 'sticky',
              top: '80px',
              zIndex: '6',
              backgroundColor: '#F3F3F3',
            }}
          >
            <div
              className="d-flex align-items-center PlusIconInAddSectionButtonColor CommonCssClassCursorPointer"
              style={{gap: '6px'}}
              onClick={() => {
                contextData.HandleBackGroundColorOfModal (true);
                contextData.HandleShowModal (true);
                contextData.handleDisplayBackgroundTransparent (false);
                contextData.HandleToggleModalCSSClass (
                  'outerWrapperModalAddSections'
                );
                contextData.HandleToggleModal ('AddSection');
              }}
            >
              <HiPlusCircle className="PlusIconInAddSectionButton " />
              <div className="FontWeight ">Add Section</div>
            </div>
            <div
              className="d-flex align-items-center FontWeight RearrangeButtons CommonCssClassCursorPointer"
              style={{gap: '6px'}}
            >
              <HiTemplate style={{fontSize: '17px'}} />
              <p onClick={() => setState (state => !state)}>
                Rearrange sessions
              </p>
            </div>
            <div
              className="d-flex align-items-center FontWeight RearrangeButtons CommonCssClassCursorPointer"
              style={{gap: '6px'}}
              onClick={() => {
                contextData.handleDisplayTemplateModal (true);
                contextData.HandleBackGroundColorOfModal (true);
                contextData.handleDisplayBackgroundTransparent (true);
              }}
            >
              <CgTemplate style={{fontSize: '17px'}} />
              <p>Template</p>
            </div>
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
              }}
            >
              <CgTemplate style={{fontSize: '17px'}} />
              <p>Select Image</p>
            </div>
            <div
              className="d-flex align-items-center FontWeight RearrangeButtons CommonCssClassCursorPointer"
              style={{gap: '6px'}}
              onClick={() => {
                window.location.reload();
              }}
            >
              <BsPencil style={{fontSize: '17px'}} />
              <p>Edit CV</p>
            </div>
            <ReactToPrint
              pageStyle="@page { size: auto; margin: 15mm; } }"
              content={reactToPrintContent}
              documentTitle={ResumeName}
              onAfterPrint={handleAfterPrint}
              onBeforeGetContent={handleOnBeforeGetContent}
              onBeforePrint={handleBeforePrint}
              removeAfterPrint
              trigger={reactToPrintTrigger}
            />
          </div>}
        <div>
          <div>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={state}
                addEndListener={(node, done) => {
                  node.addEventListener ('transitionend', done, false);
                }}
                classNames="fade"
              >
                <div>
                  <div className="btnRusme">
                    {state
                      ? Resume
                      : <DragAndDropComponent setState={setState} />}
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
      {state &&
        <div className="pb-4">
          <Footer />
        </div>}
    </div>
  );
}
