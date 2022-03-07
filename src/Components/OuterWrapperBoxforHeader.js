

import React, {useContext, useState} from 'react';
import {Context} from '../Components/Context/Context';
function OuterWrapperBoxForHeader (props) {
  const contextData = useContext (Context);
  return (
    <div
      className="outerWrapperOfBox BorderRadius"
      style={{
        backgroundColor: props.display ? 'white' : '',
        borderColor: props.display  ? '#60D5BA' : '',
      }}
      onClick={(e) => {
        props.setDisplayBackGroundColor (true);
        props.function(true)
        props.HandleBackGroundColor(e)
        contextData.HandleUpdateBackGroundHighLitter("header")
      }}
    >
       <div>
            {props.Content}
        </div>
    </div>
  );
}
export default OuterWrapperBoxForHeader;