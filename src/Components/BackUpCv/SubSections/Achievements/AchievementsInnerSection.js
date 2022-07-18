import React, {useState, useEffect} from 'react';
import {Star} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
import {iconList} from '../../../JasonData';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');

function AchievementsInnerSection (props) {
  
  const [Icon, setIcon] = useState (<Star />);
  useEffect (() => {
    for (let i = 0; i < iconList.length; i++) {
      if (props.list[props.index].iconName === iconList[i].name) {
        setIcon (iconList[i].icon);
      }
    }
  }, []);
  
  function HandleEditorWidth () {
    if (!props.Template) {
      return '355px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Achievements') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Achievements') {
            return '110px';
          }
        }
      }
    }
  }

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
              <div className={props.Colors}>
                {Icon}
              </div>}
            <div style={{width: '100%'}} className="d-flex flex-column ms-2">
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder="What are you most proud of?"
                draggable="false"
                value={props.item.title}
                onChange={() => {
                  console.log ('onchange');
                }}
              />
              <div
                style={{width: HandleEditorWidth ()}}
              >
                {props.item.toggleSwitch[0].selected &&
                  <Editor
                    className="InputFieldBachUpCv"
                    options={{
                      placeholder: {
                        text: 'Why are you proud of this achievement?',
                        hideOnClick: true,
                      },
                    }}
                    text={props.item.username}
                  />}
              </div>
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
