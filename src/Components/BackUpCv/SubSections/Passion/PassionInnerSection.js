import React, {useState, useEffect} from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
import {iconList, Star} from '../../../JasonData';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function PassionInnerSection (props) {
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
            {props.list[props.index].toggleSwitch[1].selected &&
              <div className={props.Colors}>
                {Icon}
              </div>}
            <div style={{width: '100%'}} className="d-flex flex-column ms-2">
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder="Career Interest / Passion"
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
                          text: 'What are you looking for in your next company? (e.g. Learning Opportunities)',
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
const StyledApp = injectSheet (styles) (PassionInnerSection);
export default StyledApp;
