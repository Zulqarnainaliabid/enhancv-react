import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import Slider from 'react-input-slider';
import '../../../index.css';
import TextareaAutosize from 'react-autosize-textarea';
function LanguageInnerSection (props) {
  console.log("newValue",props.list[props.index].proficiencyValue)
  let CssClass = '#686868';
  if (props.Colors === 'darkColor') {
    CssClass = '#686868';
  }
  if (props.Colors=== 'blueColor') {
    CssClass = '#008cffb0';
  }
  if (props.Colors === 'greenColor') {
    CssClass = '#00b400';
  }
  if (props.Colors === 'redColor') {
    CssClass = '#ff8080';
  }
  if (props.Colors === 'yellowDark') {
    CssClass = '#FF6E01';
  }
  if (props.Colors === 'yellowLight') {
    CssClass = '#E29E1A';
  }

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
                  placeholder="Language"
                  draggable="false"
                  value={props.list[props.index].value.language}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{width: '89px'}}>
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    draggable="false"
                    value={props.list[props.index].language}
                    onChange={() => {
                      console.log ('onchange');
                    }}
                  />
                </div>}
            </div>
          </div>
          
          {props.list[props.index].toggleSwitch[1].selected &&
            <Slider
              axis="x"
              x={props.list[props.index].proficiencyValue}
              styles={{
                track: {
                  backgroundColor: '#EEEEEE',
                },
                active: {
                  backgroundColor:CssClass,
                },
                thumb: {
                  width: 0,
                  height: 0,
                },
                disabled: {
                  opacity: 0.3,
                },
              }}
            />}
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (LanguageInnerSection);
export default StyledApp;
