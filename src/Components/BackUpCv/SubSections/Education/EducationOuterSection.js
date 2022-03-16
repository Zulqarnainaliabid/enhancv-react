import React, {useState, useEffect, useContext} from 'react';
import EducationInnerSection from './EducationInnerSection';
export default function EducationOuterSection (props) {
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
          <input placeHolder="Education" />
        </div>
        <div>
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
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
