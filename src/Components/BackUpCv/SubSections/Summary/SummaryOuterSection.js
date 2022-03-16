import React, {useState, useEffect, useContext} from 'react';
import SummaryInnerSection from './SummaryInnerSection';
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
          <input placeHolder="SUMMARY" />
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
                  <SummaryInnerSection
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
