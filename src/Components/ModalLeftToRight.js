import React, {useContext, useState} from 'react';
import BackImages from './BackImages';
import TemplatesImages from './TemplatesImages';
import {fadeInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {RiCloseFill} from 'react-icons/ri';
import {Context} from './Context/Context';
import BackImg0 from './Images/BackImg0.jpg';
import BackImg2 from './Images/BackImg2.jpg';
import BackImg3 from './Images/BackImg3.jpg';
function ModalLeftToRight (props) {
  const [ImgSource, setImgSource] = useState ([BackImg0, BackImg2, BackImg3]);
  const contextData = useContext (Context);

  const selectImage = fileChangeEvent => {
    const file = fileChangeEvent.target.files[0];
    const {type} = file;
    if (
      !(type.endsWith ('jpeg') ||
        type.endsWith ('png') ||
        type.endsWith ('jpg') ||
        type.endsWith ('gif'))
    ) {
    } else {   
      const url = URL.createObjectURL (fileChangeEvent.target.files[0]);
      contextData.handleBackImageModal(url)
      contextData.HandleBackGroundColorOfModal (true);
      contextData.HandleShowModal (true);
      contextData.HandleToggleModal ('BackImage');
      contextData.HandleToggleModalCSSClass ('outerWrapperModalSignIn');
      contextData.handleDisplayBackgroundTransparent (false);
      contextData.handleDisplayBackImageModal (false);

    }
  };

  const styles = {
    fadeInRight: {
      animation: 'x 1s',
      animationName: Radium.keyframes (fadeInRight, 'fadeInRight'),
    },
  };
  if (props.ToggleModal) {
    return (
      <StyleRoot>
        <div className="testModalBackGroundImg" style={styles.fadeInRight}>
          <RiCloseFill
            className="closeModal CommonCssClassCursorPointer"
            style={{position: 'absolute', right: '5px', top: '5px'}}
            onClick={() => {
              contextData.handleDisplayBackImageModal (false);
              contextData.HandleBackGroundColorOfModal (false);
            }}
          />
          <div
            className="TextHolderTemplate FontWeight"
            style={{fontSize: '19px', fontWeight: 'bold'}}
          >
            Select BackGroundImage
          </div>
          <BackImages ImgSource={ImgSource} />
          <div
            className="d-flex align-items-center justify-content-center mt-3"
            style={{gap: '12px'}}
          >
            <input
              style={{display: 'none'}}
              type="file"
              id="uploadFile"
              accept="image/png, image/jpeg"
              onChange={e => {
                selectImage (e);
                e.target.value = null;
              }}
            />
            <label
              for="uploadFile"
              className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
            >
              Browse Image
            </label>
            <p
              onClick={() => {
                contextData.handleDisplayBackImageModal (false);
                contextData.HandleBackGroundColorOfModal (false);
              }}
              // style={{bottom: '17px', marginLeft: '106px'}}
              className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
            >
              Continue editing
            </p>
          </div>

        </div>
      </StyleRoot>
    );
  } else {
    return (
      <div>
        <StyleRoot>
          <div className="testModalBackGroundImg" style={styles.fadeInRight}>
            <RiCloseFill
              className="closeModal CommonCssClassCursorPointer"
              style={{position: 'absolute', right: '5px', top: '5px'}}
              onClick={() => {
                contextData.handleDisplayTemplateModal (false);
                contextData.HandleBackGroundColorOfModal (false);
              }}
            />
            <div
              className="TextHolderTemplate FontWeight"
              style={{fontSize: '19px', fontWeight: 'bold'}}
            >
              Select Template
            </div>
            <TemplatesImages />
            <p
              onClick={() => {
                contextData.handleDisplayTemplateModal (false);
                contextData.HandleBackGroundColorOfModal (false);
              }}
              style={{bottom: '17px', marginLeft: '106px'}}
              className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
            >
              Continue editing
            </p>
          </div>
        </StyleRoot>
      </div>
    );
  }
}

export default ModalLeftToRight;
