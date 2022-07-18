import React, {useEffect, useState} from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import {iconList, Star} from '../../../JasonData';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function StrengthInnerSection (props) {
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
      return '342px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Strength') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Strength') {
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
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{position: 'relative', display: 'flex'}}>
            {props.list[props.index].toggleSwitch[1].selected &&
              <div className={props.Colors}>
                {Icon}
              </div>}
            <div style={{width: '100%'}} className="d-flex flex-column ms-2">
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder="Your Unique Talent"
                draggable="false"
                value={props.list[props.index].title}
                onChange={() => {
                  console.log ('onchange');
                }}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary"   style={{width: HandleEditorWidth ()}}>
                    <Editor
                      className="InputFieldBachUpCv"
                      options={{
                        placeholder: {
                          text: 'How did you acquire it? What did it result in?',
                          hideOnClick: true,
                        },
                      }}
                      text={props.list[props.index].username}
                      onChange={() => {
                        console.log ('onchange');
                      }}
                    />
                  </div>
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
const StyledApp = injectSheet (styles) (StrengthInnerSection);
export default StyledApp;
