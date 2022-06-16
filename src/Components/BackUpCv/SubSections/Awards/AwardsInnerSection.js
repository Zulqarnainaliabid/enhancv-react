import React, {useState, useEffect} from 'react';
import {Star,iconList} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function AwardsInnerSection (props) {
  const [Icon, setIcon] = useState (<Star />);
  useEffect (() => {
    for (let i = 0; i < iconList.length; i++) {
      if (props.list[props.index].iconName === iconList[i].name) {
        setIcon (iconList[i].icon);
      }
    }
  }, []);
  return (
    <div>
      <div>
        <div
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            backgroundColor: props.item.selected ? 'white' : '',
            border: props.item.selected ? '1px solid #60d5ba' : '',
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{position: 'relative', display: 'flex'}}>
            {props.list[props.index].toggleSwitch[1].selected &&
              <div
                style={{
                  color: '#008CFF',
                  fontSize: '25px',
                }}
              >
                {Icon}
              </div>}
            <div style={{width: '100%'}} className="d-flex flex-column ms-2">
              <TextareaAutosize
                className="InputFieldBachUpCv"
                placeholder='Awards'
                draggable="false"
                value={props.list[props.index].value.title}
                onChange={() => {
                  console.log ('onchange');
                }}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary">
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
const StyledApp = injectSheet (styles) (AwardsInnerSection);
export default StyledApp;
