import React, {useState, useContext, useEffect} from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../../../index.css';
import TextareaAutosize from 'react-autosize-textarea';
function LanguageInnerSection (props) {
  return (
    <div>
      <div>
        <div
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{position: 'relative', display: 'flex'}}>
            <div
              style={{width: '100%'}}
              className="d-flex justify-content-between"
            >
              <div style={{width: '80px'}}>
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder="Language"
                  draggable="false"
                  value={props.list[props.index].value.language}
                />
              </div>
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{width: '89px'}}>
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    // placeHolder={Language}
                    draggable="false"
                    value={props.list[props.index].value.proficiency}
                  />
                </div>}
            </div>
          </div>
          {props.list[props.index].toggleSwitch[1].selected &&
            <Slider min={1} max={5} tooltip={false} />}
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (LanguageInnerSection);
export default StyledApp;
