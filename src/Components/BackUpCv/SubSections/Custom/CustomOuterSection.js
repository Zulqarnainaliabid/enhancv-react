import React, {useState, useEffect, useContext} from 'react';
import CustomInnerSection from './CustomInnerSection';
import TextareaAutosize from 'react-autosize-textarea';
export default function CustomOuterSection (props) {
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
        <TextareaAutosize
            className='outerWrapperSectionsHeadingValue'
            placeholder="Custom" value={props.HeadingValue}
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
                  <CustomInnerSection
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

