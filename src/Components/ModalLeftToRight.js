import React, {useContext, useState} from 'react';
import BackImages from './BackImages';
import TemplatesImages from './TemplatesImages';
import {fadeInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {RiCloseFill} from 'react-icons/ri';
import {Context} from './Context/Context';
import BackImg0 from './Images/BackImg0.png';
import BackImg1 from './Images/BackImg1.jpg';
import BackImg2 from './Images/BackImg2.jpg';
import BackImg3 from './Images/BackImg3.jpg';
import BackImg4 from './Images/BackImg4.png';
import BackImg5 from './Images/BackImg5.png';
import BackImg6 from './Images/BackImg6.png';
import BackImg7 from './Images/BackImg7.png';
import BackImg8 from './Images/BackImg8.png';
import BackImg9 from './Images/BackImg9.png';
import BackImg10 from './Images/BackImg10.png';
import BackImg11 from './Images/BackImg11.png';
function ModalLeftToRight (props) {
  const [ImgSource, setImgSource] = useState ([
    BackImg0,
    BackImg1,
    BackImg2,
    BackImg3,
    BackImg4,
    BackImg5,
    BackImg6,
    BackImg7,
    BackImg8,
    BackImg9,
    BackImg10,
    BackImg11,
  ]);
  const contextData = useContext (Context);

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
          <p
            onClick={() => {
              contextData.handleDisplayBackImageModal (false);
              contextData.HandleBackGroundColorOfModal (false);
            }}
            style={{bottom: '17px', marginLeft: '106px'}}
            className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
          >
            Continue editing
          </p>
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
