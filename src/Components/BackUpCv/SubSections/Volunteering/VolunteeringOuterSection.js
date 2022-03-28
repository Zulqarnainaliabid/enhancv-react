import React from 'react';
import VolunteeringInnerSection from './VolunteeringInnerSection';
import TextareaAutosize from 'react-autosize-textarea';

export default function VolunteeringOuterSection (props) {
  console.log ('volunterintll', props.list);
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
          <TextareaAutosize
            className="outerWrapperSectionsHeadingValue"
            placeholder="Volunteering"
            value={props.HeadingValue}
            onChange={() => {
              console.log ('ll');
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
                  <VolunteeringInnerSection
                    item={item}
                    index={index}
                    list={props.list}
                    display_dashesLine={display_dashesLine}
                    Colors={props.Colors}
                    Template={props.Template}
                    Sections={props.Sections}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
