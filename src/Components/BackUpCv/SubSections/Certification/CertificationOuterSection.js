import React, {useState, useEffect, useContext} from 'react';
import CertificationInnerSection from './CertificationInnerSection';
import TextareaAutosize from 'react-autosize-textarea';
export default function CertificationOuterSection (props) {
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
        <TextareaAutosize
            className='outerWrapperSectionsHeadingValue'
            placeholder="Certification" value={props.HeadingValue}
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
                  <CertificationInnerSection
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
