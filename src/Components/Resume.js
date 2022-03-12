import React, {useRef, useContext, useState} from 'react';
import ReactToPrint from 'react-to-print';
import {ComponentToPrint} from './ComponentToPrint';
import {HiPlusCircle} from 'react-icons/hi';
import {CgTemplate} from 'react-icons/cg';
import {MdDownloadForOffline} from 'react-icons/md';
import {Context} from '../Components/Context/Context';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import DragAndDropComponent from './DragAndDropComponent';
import {HiTemplate} from 'react-icons/hi';
import {IoIosColorPalette} from 'react-icons/io';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function Resume (props) {
  const [state, setState] = useState (true);
  const contextData = useContext (Context);
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
          title: 'Please Login First',
          buttons: [
            {
              label: 'OK',
            },
          ],
        });
        return (null);
      } else {
        console.log("heo")
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

  let ref = {
    ref1: componentRef,
    ref2: childRef,
  };
  let Resume = (
    <span>
      <ComponentToPrint text={text} ref={ref} HandleState={setState} />
      <button onClick={() => childRef.current.getAlert ()}>Click</button>
    </span>
  );
  console.log ('y', state);
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
            <ReactToPrint
              content={reactToPrintContent}
              documentTitle="AwesomeFileName"
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
    </div>
  );
}
