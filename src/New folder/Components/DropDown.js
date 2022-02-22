import React, {useContext, useEffect, useState} from 'react';
import {bounceInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Context} from './Context/Context';
import SelectedColors from './SelectedColors'
export default function DropDown (props) {
  const contextData = useContext (Context);

  const styles = {
    bounceInDown: {
      animation: 'x 1s',
      animationName: Radium.keyframes (bounceInDown, 'fadeInRight'),
    },
  };
  // let SelectColors =  <SelectedColors  />
  let alert = (
    <div className="d-flex flex-column p-3">
      <p style={{fontSize: '30px', textAlign: 'center'}}>
        You reached enough number of sections
      </p>
      <div
        className="SubmitButtons FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
        onClick={() => {
          contextData.HandleDisplayDropDownAlertMessage (false);
          contextData.HandleBackGroundColorOfModal (false);
        }}
      >
        OK
      </div>
    </div>
  );

  const [ContentDisplay, setContentDisplay] = useState (alert);
  useEffect (() => {
    if (props.ContentDisplay) {
      setContentDisplay (alert);
    } 
  }, []);

  return (
    <div>
      <StyleRoot>
        <div className="DropDown BorderRadius" style={styles.bounceInDown}>
          {ContentDisplay}
        </div>
      </StyleRoot>
    </div>
  );
}
