import React, {useState, useEffect, useContext} from 'react';
import LanguageInnerSection from './LanguageInnerSection';
import TextareaAutosize from 'react-autosize-textarea';

export default function LanguageOuterSection (props) {
  const [HighLighter, setHighLighter] = useState (false);
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div
          style={{backgroundColor: HighLighter ? 'white' : '', width: '100%'}}
          className="HeadingNameBox BorderRadius"
        >
          <TextareaAutosize
            className="outerWrapperSectionsHeadingValue"
            placeholder="Language"
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
                  <LanguageInnerSection
                    item={item}
                    index={index}
                    list={props.list}
                    display_dashesLine={display_dashesLine}
                    Colors={props.Colors}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
