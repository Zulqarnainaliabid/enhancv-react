import React, { useState,useEffect} from 'react';
import {UPDATEMONTHFROMCROSSICON , INCREMENTMONTH,UPDATEINDEX,UPDATENUMBER,COUNTINGUPDATENUMBER} from '../Redux/actions/indux'
import {useDispatch,useSelector} from 'react-redux'
export default function ItemDate(props) {
  const [Number, setNumber] = useState(null);
  const [UpdateNumber, setUpdateNumber] = useState(null);
  const counter = useSelector(state => state.IncrementState)
  useEffect(() => {
    setUpdateNumber(null)
  },[counter]);
const  dispatch = useDispatch()
  return (
    <>
      <div>
        <div
          className="number"
          onClick={() => {
            props.HandleItem(props.item);
            props.date(props.list[props.index])
            setNumber(props.list[props.index].number)
            dispatch(INCREMENTMONTH())
            dispatch(UPDATEMONTHFROMCROSSICON(props.list[props.index].number))
            dispatch(UPDATEINDEX(props.list[props.index].index))
            setUpdateNumber(props.list[props.index].number)
          }}
          onMouseEnter={()=>{
            dispatch(UPDATENUMBER(UpdateNumber))
            dispatch(COUNTINGUPDATENUMBER())
          }}
        >
          {props.item.number}
        </div>
      </div>
    </>
  );
}
