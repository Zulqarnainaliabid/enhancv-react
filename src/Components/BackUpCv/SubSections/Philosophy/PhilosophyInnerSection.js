import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
function PhilosophyInnerSection (props) {
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
            <div style={{width: '100%'}}>
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeHolder={"What's your philosophy?"}
                draggable="false"
                value={props.list[props.index].title}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div className="d-flex text-end justify-content-end">
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeHolder={'Author'}
                    draggable="false"
                    value={props.list[props.index].username}
                  />
                </div>}
            </div>
          </div>
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (PhilosophyInnerSection);
export default StyledApp;
