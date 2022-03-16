import React, {useState, useEffect, useContext} from 'react';
import AchievementsInnerSection from './AchievementsInnerSection';
export default function AchievementsOuterSection (props) {
  console.log ('88', props.list);
  const [array, setState] = useState ([
    {
      selected: false,
      toggleSwitch: [
        {name: 'Show UserName', selected: true},
        {name: 'Show Icons', selected: true},
      ],
      value: {
        title: '',
        username: '',
      },
    },
  ]);

  return (
    <div>
      <div className="outerWrapperCompleteBox BorderOuterSectionBackUpCv">
        <div className="HeadingNameBox BorderRadius">
          <input
            style={{width: '270px', fontSize: '11px'}}
            placeholder="ACHIEVEMENTS"
            // value={props.HeaderInputValue.title}
            onChange={() => {
              console.log ('ll');
            }}
          />
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
                  <AchievementsInnerSection
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
