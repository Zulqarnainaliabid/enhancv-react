import "./DatePicker.css";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Switch from "react-switch";
import ItemFunction from "./ItemFunction";
import { MdKeyboardArrowRight } from "react-icons/md";
import ItemDate from "./ItemDate";
import MonthOngoingFun from "./MonthOngoing";
import MonthFromCrossIcon from "./MonthfromCrossIcon";
import {
  DateFrom_1,
  DateFrom_2,
  DateFrom_3,
  DateFrom_4,
  DateFrom_5,
  DateFrom_6,
  DateTo_1,
  DateTo_2,
  DateTo_3,
  DateTo_4,
  DateTo_5,
  DateTo_6,
  DateTo_7,
  DateTo_8,
  DateTo_9,
  Months,
} from "./JasonData";
function DatePicker(props) {
  const [DateToArray, setDateToArray] = useState(DateTo_1);
  const [count, setCount] = useState(DateFrom_1);
  const [To, setTo] = useState("#f2f2f2");
  const [From, setFrom] = useState("White");
  const [ShedowFrom, setShedowFrom] = useState("3px 0 5px rgb(0 0 0 / 10%)");
  const [ShedowTo, setShedowTo] = useState("none");
  const [ShowTo, setShowTo] = useState(false);
  const [ShowOngoing, setShowOngoing] = useState("none");
  const [ShowArrowkey, setShowArrowkey] = useState(true);
  const [DateToArraySp, setDateToArraySp] = useState([]);
  const [CheckArray, setCheckArray] = useState(false);
  const [Check, setCheck] = useState(false);
  const [SubArray1, setSubArray1] = useState([]);
  const [SubArray2, setSubArray2] = useState([]);
  const [SubArray3, setSubArray3] = useState([]);
  const [SubArray4, setSubArray4] = useState([]);
  const [SubArray5, setSubArray5] = useState([]);
  const [SubArray6, setSubArray6] = useState([]);
  const [SubArray7, setSubArray7] = useState([]);
  const [SubArray8, setSubArray8] = useState([]);
  const [SubArray9, setSubArray9] = useState([]);
  const [ColorOngoing, setColorOngoing] = useState("rgba(0, 0, 0, 0.185)");
  const [CursorOngoing, setCursorOngoing] = useState("no-drop");
  const [ColorDate, setColorDate] = useState("black");
  const [CursorDate, setCursorDate] = useState("pointer");
  const [PointerEvents, setPointerEvents] = useState("");
  const [checked, setchecked] = useState(true);
  const [CrossIcon, setCrossIcon] = useState(null);
  const [MonthArry, setMonthArry] = useState(Months);
  const [MonthOngoing, setMonthOngoing] = useState(Months);
  const [Margon, setMargon] = useState("0px");
  const [MargonTop, setMargonTop] = useState("0px");
  

  const [MonthfromToggleCrossIcon, setMonthfromToggleCrossIcon] =
    useState(count);
  useEffect(() => {
    setCheck(true);
  }, []);
  function HandleTo() {
    if (To === "#f2f2f2") {
      setShowTo(true);
      setShowOngoing("flex");
      setTo("white");
      setShowArrowkey(false);
      setFrom("#f2f2f2");
      setShedowFrom("-3px 0 5px rgb(0 0 0 / 10%)");
      setShedowTo("none");
    }
  }
  function HandleFrom() {
    if (From === "#f2f2f2") {
      setShowTo(false);
      setShowOngoing("none");
      setTo("#f2f2f2");
      setShowArrowkey(true);
      setFrom("white");
      setShedowFrom("none");
      setShedowTo("3px 0 5px rgb(0 0 0 / 10%)");
    }
  }
  function HandleItem(item) {
    setCheck(false);
    let num = item.number;
    let array = [];
    let SubArray_1 = [];
    let SubArray_2 = [];
    let SubArray_3 = [];
    let SubArray_4 = [];
    let SubArray_5 = [];
    let SubArray_6 = [];
    let SubArray_7 = [];
    let SubArray_8 = [];
    let SubArray_9 = [];
    array.push({ number: num });
    for (let i = num; i < 2021; i++) {
      num = num + 1;
      array.push({ number: num });
    }
    let length = array.length;
    let iteration = 8;
    setCheckArray(false);
    if (length <= 8) {
      setCheckArray(true);
      let arry = [];
      for (let i = 0; i < length; i++) {
        if (array[i].number === 2021) {
          arry[i] = array[i];
          break;
        } else {
          arry[i] = array[i];
        }
      }
      setDateToArraySp(arry);
    } else {
      {
        for (let i = 0; i < iteration; i++) {
          SubArray_1[i] = array[i];
        }
      }
      let j = 0;
      if (length > 16) {
        for (let i = iteration; i < iteration + 8; i++) {
          SubArray_2[j] = array[i];
          j = j + 1;
        }
        let k = 0;
        iteration = iteration + 8;
        if (length > 24) {
          for (let i = iteration; i < iteration + 8; i++) {
            SubArray_3[k] = array[i];
            k = k + 1;
          }
          let l = 0;
          iteration = iteration + 8;
          if (length > 32) {
            for (let i = iteration; i < iteration + 8; i++) {
              SubArray_4[l] = array[i];
              l = l + 1;
            }
            let m = 0;
            iteration = iteration + 8;
            if (length > 40) {
              for (let i = iteration; i < iteration + 8; i++) {
                SubArray_5[m] = array[i];
                m = m + 1;
              }
              let n = 0;
              iteration = iteration + 8;
              if (length > 48) {
                for (let i = iteration; i < iteration + 8; i++) {
                  SubArray_6[n] = array[i];
                  n = n + 1;
                }
                let p = 0;
                iteration = iteration + 8;
                if (length > 56) {
                  for (let i = iteration; i < iteration + 8; i++) {
                    SubArray_7[p] = array[i];
                    p = p + 1;
                  }
                  let q = 0;
                  iteration = iteration + 8;
                  if (length > 64) {
                    for (let i = iteration; i < iteration + 8; i++) {
                      SubArray_8[q] = array[i];
                      q = q + 1;
                    }
                    let s = 0;
                    iteration = iteration + 8;
                    if (length >= 72) {
                      for (let i = iteration; i < iteration + 8; i++) {
                        SubArray_9[s] = array[i];
                        s = s + 1;
                      }
                    } else {
                      for (let i = iteration; i < length; i++) {
                        if (array[i].number === 2021) {
                          SubArray_9[s] = array[i];
                          s = s + 1;
                          break;
                        } else {
                          SubArray_9[s] = array[i];
                          s = s + 1;
                        }
                      }
                    }
                  } else {
                    for (let i = iteration; i < length; i++) {
                      if (array[i].number === 2021) {
                        SubArray_8[q] = array[i];
                        q = q + 1;
                        break;
                      } else {
                        SubArray_8[q] = array[i];
                        q = q + 1;
                      }
                    }
                  }
                } else {
                  for (let i = iteration; i < length; i++) {
                    if (array[i].number === 2021) {
                      SubArray_7[p] = array[i];
                      p = p + 1;
                      break;
                    } else {
                      SubArray_7[p] = array[i];
                      p = p + 1;
                    }
                  }
                }
              } else {
                for (let i = iteration; i < length; i++) {
                  if (array[i].number === 2021) {
                    SubArray_6[n] = array[i];
                    n = n + 1;
                    break;
                  } else {
                    SubArray_6[n] = array[i];
                    n = n + 1;
                  }
                }
              }
            } else {
              for (let i = iteration; i < length; i++) {
                if (array[i].number === 2021) {
                  SubArray_5[m] = array[i];
                  m = m + 1;
                  break;
                } else {
                  SubArray_5[m] = array[i];
                  m = m + 1;
                }
              }
            }
          } else {
            for (let i = iteration; i < length; i++) {
              if (array[i].number === 2021) {
                SubArray_4[l] = array[i];
                l = l + 1;
                break;
              } else {
                SubArray_4[l] = array[i];
                l = l + 1;
              }
            }
          }
        } else {
          for (let i = iteration; i < length; i++) {
            if (array[i].number === 2021) {
              SubArray_3[k] = array[i];
              k = k + 1;
              break;
            } else {
              SubArray_3[k] = array[i];
              k = k + 1;
            }
          }
        }
      } else {
        for (let i = iteration; i < length; i++) {
          if (array[i].number === 2021) {
            SubArray_2[j] = array[i];
            j = j + 1;
            break;
          } else {
            SubArray_2[j] = array[i];
            j = j + 1;
          }
        }
      }
    }
    setSubArray1(SubArray_1);
    setSubArray2(SubArray_2);
    setSubArray3(SubArray_3);
    setSubArray4(SubArray_4);
    setSubArray5(SubArray_5);
    setSubArray6(SubArray_6);
    setSubArray7(SubArray_7);
    setSubArray8(SubArray_8);
    setSubArray9(SubArray_9);
    setDateToArray(SubArray_1);
  }
  function HandleForword() {
    if (Check === true) {
      if (DateToArray === DateTo_1) {
        setDateToArray(DateTo_2);
      } else if (DateToArray === DateTo_2) {
        setDateToArray(DateTo_3);
      } else if (DateToArray === DateTo_3) {
        setDateToArray(DateTo_4);
      } else if (DateToArray === DateTo_4) {
        setDateToArray(DateTo_5);
      } else if (DateToArray === DateTo_5) {
        setDateToArray(DateTo_6);
      } else if (DateToArray === DateTo_6) {
        setDateToArray(DateTo_7);
      } else if (DateToArray === DateTo_7) {
        setDateToArray(DateTo_8);
      } else if (DateToArray === DateTo_8) {
        setDateToArray(DateTo_9);
      }
    } else {
      if (DateToArray == SubArray1) {
        setDateToArray(SubArray2);
      } else if (DateToArray === SubArray2) {
        setDateToArray(SubArray3);
      } else if (DateToArray === SubArray3) {
        setDateToArray(SubArray4);
      } else if (DateToArray === SubArray4) {
        setDateToArray(SubArray5);
      } else if (DateToArray === SubArray5) {
        setDateToArray(SubArray6);
      } else if (DateToArray === SubArray6) {
        setDateToArray(SubArray7);
      } else if (DateToArray === SubArray7) {
        setDateToArray(SubArray8);
      } else if (DateToArray === SubArray8) {
        setDateToArray(SubArray9);
      }
    }
  }
  function HandleBackWord() {
    if (Check === true) {
      if (DateToArray === DateTo_9) {
        setDateToArray(DateTo_8);
      } else if (DateToArray === DateTo_8) {
        setDateToArray(DateTo_7);
      } else if (DateToArray === DateTo_7) {
        setDateToArray(DateTo_6);
      } else if (DateToArray === DateTo_6) {
        setDateToArray(DateTo_5);
      } else if (DateToArray === DateTo_5) {
        setDateToArray(DateTo_4);
      } else if (DateToArray === DateTo_4) {
        setDateToArray(DateTo_3);
      } else if (DateToArray === DateTo_3) {
        setDateToArray(DateTo_2);
      } else if (DateToArray === DateTo_2) {
        setDateToArray(DateTo_1);
      }
    } else {
      if (DateToArray === SubArray9) {
        setDateToArray(SubArray8);
      } else if (DateToArray === SubArray8) {
        setDateToArray(SubArray7);
      } else if (DateToArray === SubArray7) {
        setDateToArray(SubArray6);
      } else if (DateToArray === SubArray6) {
        setDateToArray(SubArray5);
      } else if (DateToArray === SubArray5) {
        setDateToArray(SubArray4);
      } else if (DateToArray === SubArray4) {
        setDateToArray(SubArray3);
      } else if (DateToArray === SubArray3) {
        setDateToArray(SubArray2);
      } else if (DateToArray === SubArray2) {
        setDateToArray(SubArray1);
      }
    }
  }
  function HandleToggle(value) {
    props.HandleOngoing(value);
    console.log("button",value)
    localStorage.setItem("DatePickerToggleButton", JSON.stringify(value));
    setchecked(value);
    if (checked) {
      setColorOngoing("rgba(0, 0, 0, 0.527)");
      setCursorOngoing("pointer");
      setColorDate("rgba(0, 0, 0, 0.185)");
      setCursorDate("no-drop");
      setPointerEvents("none");
    } else {
      setColorOngoing("rgba(0, 0, 0, 0.185)");
      setColorDate("black");
      setCursorOngoing("no-drop");
      setCursorDate("pointer");
      setPointerEvents("");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("DatePickerToggleButton") !== null) {
			let value = localStorage.getItem("DatePickerToggleButton")
			    value = JSON.parse(value)
          setchecked(value);
          if(value){
            setColorOngoing("rgba(0, 0, 0, 0.185)");
            setColorDate("black");
            setCursorOngoing("no-drop");
            setCursorDate("pointer");
            setPointerEvents("");
          }else{
            setColorOngoing("rgba(0, 0, 0, 0.527)");
            setCursorOngoing("pointer");
            setColorDate("rgba(0, 0, 0, 0.185)");
            setCursorDate("no-drop");
            setPointerEvents("none");
          }
		}
  },[]);
  return (
    <div>
      <div className="ContainerDatePicker">
        <div className="OuterWraperHeadingButtonsDatePicker">
          <div
            className="Bottons"
            style={{ backgroundColor: From, boxShadow: ShedowTo }}
            onClick={HandleFrom}
          >
            From
          </div>
          <div
            className="Bottons1"
            style={{ backgroundColor: To, boxShadow: ShedowFrom }}
            onClick={HandleTo}
          >
            To
          </div>
        </div>
        <MdKeyboardArrowLeft
          style={{ display: ShowArrowkey ? "inline" : "none" }}
          className="Arrowkey"
          onClick={() => {
            if (count === DateFrom_6) {
              setCount(DateFrom_5);
              setMonthfromToggleCrossIcon(DateFrom_5);
            } else if (count === DateFrom_5) {
              setCount(DateFrom_4);
              setMonthfromToggleCrossIcon(DateFrom_4);
            } else if (count === DateFrom_4) {
              setCount(DateFrom_3);
              setMonthfromToggleCrossIcon(DateFrom_3);
            } else if (count === DateFrom_3) {
              setCount(DateFrom_2);
              setMonthfromToggleCrossIcon(DateFrom_2);
            } else if (count === DateFrom_2) {
              setCount(DateFrom_1);
              setMonthfromToggleCrossIcon(DateFrom_1);
            }
          }}
        />
        <MdKeyboardArrowRight
          className="Arrowkey"
          style={{ display: ShowArrowkey ? "inline" : "none" }}
          onClick={() => {
            if (count === DateFrom_1) {
              setCount(DateFrom_2);
              setMonthfromToggleCrossIcon(DateFrom_2);
            } else if (count === DateFrom_2) {
              setCount(DateFrom_3);
              setMonthfromToggleCrossIcon(DateFrom_3);
            } else if (count === DateFrom_3) {
              setCount(DateFrom_4);
              setMonthfromToggleCrossIcon(DateFrom_4);
            } else if (count === DateFrom_4) {
              setCount(DateFrom_5);
              setMonthfromToggleCrossIcon(DateFrom_5);
            } else if (count === DateFrom_5) {
              setCount(DateFrom_6);
              setMonthfromToggleCrossIcon(DateFrom_6);
            }
          }}
        />
        <div className="InnerContainerDatePicker">
          {ShowTo ? (
            <div style={{ cursor: CursorDate, color: ColorDate }}>
              <div>
                <MdKeyboardArrowLeft
                  className="Arrowkey"
                  onClick={HandleBackWord}
                  style={{ pointerEvents: PointerEvents }}
                />
                <MdKeyboardArrowRight
                  className="Arrowkey"
                  onClick={HandleForword}
                  style={{ pointerEvents: PointerEvents }}
                />
              </div>
              <div className="InnerContainerDatePicker">
                {CheckArray ? (
                  <div className="InnerContainerDatePicker">
                    {DateToArraySp &&
                      DateToArraySp.map((item, index) => {
                        return (
                          <div
                            className="number"
                            style={{ color: ColorDate, cursor: CursorDate }}
                            onClick={() => {
                              props.handleYearOngoing(item.number);
                            }}
                          >
                            <div style={{ pointerEvents: "none" }}>
                              {item.number}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div
                    className="InnerContainerDatePicker"
                    style={{ color: ColorDate, cursor: CursorDate }}
                  >
                    {DateToArray &&
                      DateToArray.map((item, index) => {
                        return (
                          <div
                            className="number"
                            style={{ pointerEvents: PointerEvents }}
                            onClick={() => {
                              props.handleYearOngoing(item.number);
                            }}
                          >
                            <div>{item.number}</div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className="InnerContainerDatePicker"
              style={{ cursor: "pointer"}}
            >
              {count.map((item, index) => {
                return (
                  <div style={{position:"relative"}}>
                    <ItemDate
                      date={props.date}
                      list={count}
                      item={item}
                      index={index}
                      HandleItem={HandleItem}
                      UpdateMonthFrom={props.UpdateMonthFrom}
                      setUpdateMonthFrom={props.setUpdateMonthFrom}
                    />
                  </div>
                );
              })}
               <div
                className="InnerContainerDatePickeryearfrom"
                style={{ cursor: "pointer",marginLeft:Margon,marginTop:MargonTop }}
              >
                {MonthfromToggleCrossIcon &&
                  MonthfromToggleCrossIcon.map((item, index) => {
                    return (
                        <MonthFromCrossIcon
                          item={item}
                          index={index}
                          list={MonthfromToggleCrossIcon}
                          setMargon={setMargon}
                          MonthfromToggleCrossIcon={MonthfromToggleCrossIcon}
                          setMargonTop={setMargonTop}
                          setUpdateDate={props.setUpdateDate}
                          setMonthfromToggleCrossIcon={
                            setMonthfromToggleCrossIcon
                          }
                        />
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        <div className="onGoing" style={{ display: ShowOngoing }}>
          <div
            className="TextHolderMidButtons"
            style={{ color: ColorOngoing, cursor: CursorOngoing }}
          >
            Ongoing
          </div>
          <div className="ToggleButtonsDatepicker">
            <Switch
              height={25}
              width={45}
              offColor="#888"
              onColor="#00c091"
              activeBoxShadow="null"
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={HandleToggle}
              checked={checked}
              id="normal-switch"
            />
          </div>
        </div>
        <div className="MidLine"></div>
        {ShowArrowkey ? (
          <div
            className="InnerContainerDatePicker"
            style={{ cursor: "pointer" }}
          >
            {MonthArry.map((item, index) => {
              return (
                <div>
                  <ItemFunction
                    data={item.name}
                    cossIcon={CrossIcon}
                    index={index}
                    item={item}
                    month={props.month}
                    setMonthArry={setMonthArry}
                    array={MonthArry}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="InnerContainerDatePicker"
            style={{ pointerEvents: PointerEvents }}
          >
            {MonthOngoing.map((item, index) => {
              return (
                <div style={{ color: ColorDate }}>
                  <MonthOngoingFun
                    array={MonthOngoing}
                    setMonthOngoing={setMonthOngoing}
                    item={item}
                    index={index}
                    HandleMonthOngoing={props.HandleMonthOngoing}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default DatePicker;
