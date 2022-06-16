import React, {useState} from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import {Range, getTrackBackground} from 'react-range';
import TextareaAutosize from 'react-autosize-textarea';
function IndustryExperienceInnerSection (props) {
  const [RangesValue, setRangesValue] = useState (
    props.list[props.index].Range
  );
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  let Color = '#686868';
  if (props.Colors === 'darkColor') {
    Color = '#686868';
  }
  if (props.Colors === 'blueColor') {
    Color = '#008cff';
  }
  if (props.Colors === 'greenColor') {
    Color = '#00b400';
  }
  if (props.Colors === 'redColor') {
    Color = '#ff0001';
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
              <div>
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeholder="Area of expertise"
                  draggable="false"
                  value={props.list[props.index].value.title}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>
            </div>
          </div>

          {props.list[props.index].toggleSwitch[0].selected &&
            <Range
              values={RangesValue}
              step={STEP}
              min={MIN}
              max={MAX}
              renderTrack={({props, children}) => (
                <div>
                  <div
                    ref={props.ref}
                    style={{
                      height: '10px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground ({
                        values: RangesValue,
                        colors: [Color, '#ccc'],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: 'center',
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({props, isDragged}) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    backgroundColor: Color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    outline: 'none',
                  }}
                />
              )}
            />}
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (IndustryExperienceInnerSection);
export default StyledApp;
