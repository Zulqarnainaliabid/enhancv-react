import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {INCREMENTSTATE , UPDATEYEARFROM} from '../Redux/actions/indux'
export default function MonthFromCrossIcon(props) {
    // const [count, setCount] = useState(false);
  const MonthFrom = useSelector((state) => state.MonthFromCrossIcon);
  const counter = useSelector((state) => state.MonthFrom);
  const UpdtedIndex = useSelector((state) => state.UpdateIndex);
  const Updatednumber = useSelector((state) => state.UpdateNumber);
  const CountingUpdatedNumber = useSelector((state) => state.CountingUpdateNumber);
  const  dispatch = useDispatch()
  useEffect(() => {
    let temp = props.list;
    temp.map((item, index) => {
      if (temp[index].number === MonthFrom) {
        temp[index].selected = true;
      } else {
        temp[index].selected = false;
      }
    });
    if (UpdtedIndex === 0) {
      props.setMargon("0px");
      props.setMargonTop("0px");
    } else if (UpdtedIndex === 1) {
      props.setMargon("74px");
      props.setMargonTop("0px");
    } else if (UpdtedIndex === 2) {
      props.setMargon("158px");
      props.setMargonTop("0px");
    } else if (UpdtedIndex === 3) {
      props.setMargon("230px");
      props.setMargonTop("0px");
    } else if (UpdtedIndex === 4) {
      props.setMargon("0px");
      props.setMargonTop("47px");
    } else if (UpdtedIndex === 5) {
      props.setMargon("74px");
      props.setMargonTop("47px");
    } else if (UpdtedIndex === 6) {
      props.setMargon("158px");
      props.setMargonTop("47px");
    } else if (UpdtedIndex === 7) {
      props.setMargon("230px");
      props.setMargonTop("47px");
    } else if (UpdtedIndex === 8) {
      props.setMargon("0px");
      props.setMargonTop("92px");
    } else if (UpdtedIndex === 9) {
      props.setMargon("74px");
      props.setMargonTop("92px");
    } else if (UpdtedIndex === 10) {
      props.setMargon("158px");
      props.setMargonTop("92px");
    } else if (UpdtedIndex === 11) {
      props.setMargon("230px");
      props.setMargonTop("92px");
    }
    props.setMonthfromToggleCrossIcon([...temp]);
  }, [counter]);

  useEffect(() => {
    let temp = props.MonthfromToggleCrossIcon
    temp.map((item, index) => {
      if (temp[index].number === Updatednumber) {
        temp[index].selected = true;
      } else {
        temp[index].selected = false;
      }
    });
    props.setMonthfromToggleCrossIcon([...temp]);
  },[CountingUpdatedNumber]);
  return (
    <div
      className="YearFromcrosIcon"
      style={{ display: props.item.selected ? "block" : "none" }}
      onMouseLeave={()=>{
          let temp =[]
       temp = props.MonthfromToggleCrossIcon
          temp.map((item,index)=>{
              if(temp[index].selected===true){
                temp[index].selected=false
              }
          })
          props.setMonthfromToggleCrossIcon([...temp]);
      }}
      onClick={()=>{
        console.log("yearfrom , ,")
        dispatch(UPDATEYEARFROM("true"))
        dispatch(INCREMENTSTATE())
          props.setUpdateDate(null)
          let temp =[]
       temp = props.MonthfromToggleCrossIcon
          temp.map((item,index)=>{
                temp[index].selected=false
          })
          props.setMonthfromToggleCrossIcon([...temp]);
      }}
    >
      X
    </div>
  );
}
