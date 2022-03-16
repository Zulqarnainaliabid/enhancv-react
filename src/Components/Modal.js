import React, {useState, useContext, useEffect} from 'react';
import ImagePicker from './ImagePicker';
import {Context} from './Context/Context';
import {RiCloseFill} from 'react-icons/ri';
import LoginIn from './LogIn';
import SignIn from './SignIn';
import AddSection from './AddSection';
function Modal (props) {
  const [ToggleAddNewSection, setToggleAddNewSection] = useState (false);
  const contextData = useContext (Context);
  function handleClosModal () {
    contextData.HandleBackGroundColorOfModal (false);
    contextData.HandleShowModal (false);
  }
  function HandleSections () {}

  let AddItem = (
    <AddSection
      HandleSections={HandleSections}
      setToggleAddNewSection={setToggleAddNewSection}
    />
  );
  const [ShowContent, setShowContent] = useState (AddItem);
  let SubJectName = (
    <div style={{marginTop:"12px"}}>
      <div className="SignUPName">
        <input
          type="text"
          placeholder="Please Add SubjectName Of This CV"
          style={{width: '100%'}}
        />
      </div>
      <div
        className="SubmitButtons FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
        onClick={() => {
          contextData.HandleShowModal (false);
          contextData.HandleBackGroundColorOfModal (false);
        }}
      >
        OK
      </div>
    </div>
  );

  useEffect (() => {
    if (props.contentDisplay === 'AddSection') {
      setShowContent (AddItem);
    } else if (props.contentDisplay === 'ImagePicker') {
      setShowContent (<ImagePicker handleClosModal={handleClosModal} />);
    } else if (props.contentDisplay === 'Login') {
      setShowContent (<LoginIn />);
    } else if (props.contentDisplay === 'SignIn') {
      setShowContent (<SignIn />);
    } else if (props.contentDisplay === 'AddSubjectName') {
      setShowContent (SubJectName);
    }
  }, []);

  return (
    <div className={`outerWrapperModal ${props.otherClass}`}>
      <div className="outerWrapperCloseIconModal d-flex justify-content-between">
        <div className="PhotoLabelModal">
          {props.displayLabelPhoto && <p>Photo</p>}
        </div>
        <RiCloseFill
          onClick={handleClosModal}
          className="closeModal CommonCssClassCursorPointer"
        />
      </div>
      {ShowContent}
    </div>
  );
}

export default Modal;
