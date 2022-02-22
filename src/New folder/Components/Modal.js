import React, {useState, useContext, useEffect} from 'react';
import ImagePicker from './ImagePicker';
import {Context} from './Context/Context';
import {RiCloseFill} from 'react-icons/ri';
import LoginIn from './LogIn';
import SignIn from './SignIn';
function Modal (props) {
  const contextData = useContext (Context);
  function handleClosModal () {
    contextData.HandleBackGroundColorOfModal (false);
    contextData.HandleShowModal(false)
  }
  let AddSection = <div>AddSection</div>;
  const [ShowContent, setShowContent] = useState (AddSection);

  useEffect (() => {
    if (props.contentDisplay === 'AddSection') {
      setShowContent (AddSection);
    } else if (props.contentDisplay === 'ImagePicker') {
      setShowContent (<ImagePicker handleClosModal={handleClosModal} />);
    } else if (props.contentDisplay === 'Login') {
      setShowContent (<LoginIn />);
    } else if (props.contentDisplay === 'SignIn') {
      setShowContent (<SignIn />);
    }
  }, []);

  return (
    <div className={`outerWrapperModal ${props.otherClass}`}>
      <div className="outerWrapperCloseIconModal d-flex justify-content-between">
        <div className="PhotoLabelModal">
          {props.displayLabelPhoto && <p>Photo</p>}
        </div>
        <RiCloseFill onClick={handleClosModal} className="closeModal CommonCssClassCursorPointer" />
      </div>
      {ShowContent}
    </div>
  );
}

export default Modal;
