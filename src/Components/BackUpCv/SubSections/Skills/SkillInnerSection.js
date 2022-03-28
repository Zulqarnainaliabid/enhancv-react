import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import AutosizeInput from 'react-input-autosize';
import TextareaAutosize from 'react-autosize-textarea';
function SkillsInnerSection (props) {
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
            {props.list[props.index].toggleSwitch[0].selected &&
              <div style={{width: '100%'}} className="d-flex flex-column">
                <TextareaAutosize
                  className={`InputFieldBachUpCv ${props.Colors}`}
                  placeholder="Group Title"
                  draggable="false"
                  value={props.list[props.index].value.groupName}
                />
              </div>}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
            {props.list[
              props.index
            ].value.ToolAndTechnology.map ((item, index) => {
              return (
                <div key={index}>
                  <AutosizeInput
                    className="InputFieldBachUpCv"
                    placeholder="Tool / Technology"
                    draggable="false"
                    value={item.text}
                  />
                </div>
              );
            })}
          </div>
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (SkillsInnerSection);
export default StyledApp;
