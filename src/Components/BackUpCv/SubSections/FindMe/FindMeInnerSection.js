import React, {useState, useContext} from 'react';
import {Star} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function FindMeInnerSection (props) {
  const [Icon, setIcon] = useState (<Star />);

  function HandleEditorWidth () {
    if (!props.Template) {
      return '355px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'FindMe') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'FindMe') {
            return '114px';
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
                placeholder={'Social Network'}
                draggable="false"
                value={props.list[props.index].value.title}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary"   style={{width: HandleEditorWidth ()}}>
                    <Editor
                      className="InputFieldBachUpCv"
                      options={{
                        placeholder: {
                          text: 'Username',
                          hideOnClick: true,
                        },
                      }}
                      text={props.list[props.index].value.username}
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
const StyledApp = injectSheet (styles) (FindMeInnerSection);
export default StyledApp;
