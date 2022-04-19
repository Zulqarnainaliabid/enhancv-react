import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function ReferenceInnerSection (props) {
  // function HandleEditorWidth () {
  //   if (!contextData.ToggleTemplate) {
  //     return '784px';
  //   } else {
  //     let value = localStorage.getItem ('SectionsArray');
  //     value = JSON.parse (value);
  //     if (value !== null) {
  //       for (let i = 0; i < value.Left.length; i++) {
  //         if (value.Left[i] === 'Reference') {
  //           return '437px';
  //         }
  //       }
  //       for (let i = 0; i < value.Right.length; i++) {
  //         if (value.Right[i] === 'Reference') {
  //           return '280px';
  //         }
  //       }
  //     }
  //   }
  // }
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
                placeHolder={'Reference Name'}
                draggable="false"
                value={props.list[props.index].title}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary">
                    <Editor
                      className="InputFieldBachUpCv"
                      options={{
                        placeholder: {
                          text: 'Reference Contact',
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
const StyledApp = injectSheet (styles) (ReferenceInnerSection);
export default StyledApp;
