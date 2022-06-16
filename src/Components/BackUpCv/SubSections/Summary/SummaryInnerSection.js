import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');

function SummaryInnerSection (props) {
  function HandleEditorWidth () {
    if (!props.Template) {
      return '355px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Summary') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Summary') {
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
            <div style={{width: '100%'}} className="d-flex flex-column">
              <div
                className={`${props.list[props.index].toggleSwitch[0].selected ? 'summary' : ''}`}
                style={{width: HandleEditorWidth ()}}
              >
                <Editor
                  className="InputFieldBachUpCv"
                  options={{
                    placeholder: {
                      text: "What's the one thing you want someone to remember after reading your resume?",
                      hideOnClick: true,
                    },
                  }}
                  text={props.list[props.index].title}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
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
const StyledApp = injectSheet (styles) (SummaryInnerSection);
export default StyledApp;
