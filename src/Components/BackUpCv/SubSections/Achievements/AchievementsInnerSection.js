import React, {useState} from 'react';
import {Star} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
function AchievementsInnerSection (props) {
  console.log ('ioioio==', props.item.toggleSwitch[0].selected);
  const [Icon, setIcon] = useState (<Star />);

  return (
    <div>
      <div>
        <div
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            border: 'unset',
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{position: 'relative', display: 'flex'}}>
            {props.item.toggleSwitch[0].selected &&
              <div>
                {Icon}
              </div>}
            <div style={{width: '100%'}} className="d-flex flex-column ms-2">
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder="What are you most proud of?"
                draggable="false"
                value={props.item.title}
              />
              {props.item.toggleSwitch[0].selected &&
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeholder="Why are you proud of this achievement?"
                  draggable="false"
                  value={props.item.username}
                />}
            </div>
          </div>
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (AchievementsInnerSection);
export default StyledApp;
