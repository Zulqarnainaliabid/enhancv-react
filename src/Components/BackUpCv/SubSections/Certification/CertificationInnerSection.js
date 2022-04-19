import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function CertificationInnerSection (props) {
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
                placeHolder={'Certification Name'}
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
