import React, {useState, useEffect, useContext} from 'react';
import EducationInnerSection from './EducationInnerSection';
import TextareaAutosize from 'react-autosize-textarea';

export default function EducationOuterSection (props) {
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
        <TextareaAutosize
            className='outerWrapperSectionsHeadingValue'
            placeholder="Education" value={props.HeadingValue}
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
                  <EducationInnerSection
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
