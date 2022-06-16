import React, {useContext} from 'react';
import {Context} from './Context/Context';

function BackImage () {
  const contextData = useContext (Context);
  return (
    <div>
      <div className="OuterWrapperBackImageModal p-1 BorderRadius">
        <img
          src={contextData.BackImageModal}
          style={{width: '100%', height: '100%', objectFit: 'contain'}}
          alt="logo"
        />
      </div>

      <div
        className="d-flex align-items-center justify-content-center mt-3"
        style={{gap: '12px'}}
      >
        <p
          for="uploadFile"
          className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
          onClick={() => {
            contextData.HandleBackGroundColorOfModal (false);
            contextData.HandleShowModal (false);
            contextData.HandleBackImage (contextData.BackImageModal);
          }}
        >
          OK
        </p>
        <p
          onClick={() => {
            contextData.HandleBackGroundColorOfModal (false);
            contextData.HandleShowModal (false);
          }}
          className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
        >
          Cancle
        </p>
      </div>
    </div>
  );
}

export default BackImage;
