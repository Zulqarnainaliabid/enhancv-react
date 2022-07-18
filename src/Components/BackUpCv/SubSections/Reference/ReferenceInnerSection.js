import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function ReferenceInnerSection (props) {

  function HandleEditorWidth () {
    if (!props.Template) {
      return '355px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Volunteering') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Volunteering') {
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
            <div style={{width: '100%'}} className="d-flex flex-column">
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder='Reference Name'
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
                          text: 'Reference Contact',
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
const StyledApp = injectSheet (styles) (ReferenceInnerSection);
export default StyledApp;
