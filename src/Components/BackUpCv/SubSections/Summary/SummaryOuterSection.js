import React, {useState, useEffect, useContext} from 'react';
import SummaryInnerSection from './SummaryInnerSection';
import TextareaAutosize from 'react-autosize-textarea';

export default function SummaryOuterSection (props) {
  const [array, setState] = useState ([
    {
      selected: false,
      toggleSwitch: [{name: 'Show Bullets', selected: true}],
      value: {
        title: '',
      },
    },
  ]);

  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
          <TextareaAutosize
            className="outerWrapperSectionsHeadingValue"
            placeholder="SUMMARY"
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
                  <SummaryInnerSection
                    item={item}
                    index={index}
                    list={props.list}
                    display_dashesLine={display_dashesLine}
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
