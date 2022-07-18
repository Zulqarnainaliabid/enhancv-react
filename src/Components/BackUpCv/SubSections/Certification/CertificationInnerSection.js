import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');

function CertificationInnerSection (props) {
  console.log("hello...00",props.Sections)
    function HandleEditorWidth () {
    if (!props.Template) {
      return '367px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Certification') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Certification') {
            return '103px';
          }
        }
      }
    }
  }
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
            <div
              style={{width: '100%'}}
              className="d-flex flex-column"
            >
               <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder='Certification Name'
                draggable="false"
                value={props.list[props.index].title}
                onChange={() => {
                  console.log ('onchange');
                }}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary" style={{width: HandleEditorWidth ()}}>
                  <Editor
                    className="InputFieldBachUpCv"
                    options={{
                      placeholder: {
                        text: 'Which institution issued the Certification and When?',
                        hideOnClick: true,
                      },
                    }}
                    text={props.list[props.index].username}
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
const StyledApp = injectSheet (styles) (CertificationInnerSection);
export default StyledApp;
