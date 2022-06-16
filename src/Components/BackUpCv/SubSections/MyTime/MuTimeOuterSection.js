import React from 'react';
import ApexChart from './MyTimeInnerSection';
import TextareaAutosize from 'react-autosize-textarea';
export default function MyTimeOuterSection (props) {
  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
          <TextareaAutosize
            className="outerWrapperSectionsHeadingValue"
            placeholder="MY TIME"
            value={props.HeadingValue}
            onChange={() => {
              console.log ('onchange');
            }}
            draggable="false"
          />
        </div>
        <div>
          <div>
            <ApexChart list={props.list} Colors={props.Colors} />
          </div>
        </div>
      </div>
    </div>
  );
}
