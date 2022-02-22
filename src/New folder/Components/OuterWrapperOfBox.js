import React, {useContext, useState} from 'react';
import {Context} from '../Components/Context/Context';
function OuterWrapperOfBox (props) {
  // console.log("loj",props.arr)
  // console.log("--",props.item.selected)
  // function HandleSelected(e){
  //   props.setDisplayBackGroundColor (true);
  //   props.function(true)
  //   props.HandleBackGroundColor(e)
  //   let temp = props.arr
  //   for(let i=0; i<temp.length; i++){
  //     temp[i].selected=false
  //   }
  //   temp[props.index].selected=true
  //   props.setarr([...temp])
  // }
  return (
    <div
      className="outerWrapperOfBox BorderRadius"
      // style={{
      //   backgroundColor: props.item.selected ? 'white' : '',
      //   borderColor: props.item.selected   ? '#60D5BA' : '',
      // }}
      // onClick={HandleSelected}
    >
       <div>
            {props.Content}
        </div>
    </div>
  );
}

export default OuterWrapperOfBox;
