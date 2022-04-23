import React from 'react';
import SkillsInnerSection from './SkillInnerSection';
import TextareaAutosize from 'react-autosize-textarea';

export default function SkillsOuterSection (props) {
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
          <TextareaAutosize
            className="outerWrapperSectionsHeadingValue"
            placeholder="SKILLS"
            value={props.HeadingValue}
            onChange={() => {
              console.log ('onchange');
            }}
            draggable="false"
          />
        </div>
        <div className="BorderOuterSectionBackUpCv">
          {props.list &&
            props.list.map ((item, index) => {
              let display_dashesLine = true;
              if (props.list.length - 1 === index) {
                display_dashesLine = false;
              }
              return (
                <div key={index}>
                  <SkillsInnerSection
                    item={item}
                    index={index}
                    list={props.list}
                    display_dashesLine={display_dashesLine}
                    Colors={props.colors}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
