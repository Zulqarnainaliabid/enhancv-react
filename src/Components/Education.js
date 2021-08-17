import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import Boxfunction from "./EducationBox";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "./Redux/actions/indux";
export default function Education(props) {
  console.log("data..", props.data);
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [array, setState] = useState([]);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [ToggleArrowDown, setToggleArrowDown] = useState(true);
  const [ToggleArrowUp, setToggleArrowUp] = useState(true);
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  function HandleCompleteBoarderSelected() {
    props.button();
    console.log("oooo");
    setbackgroundColor("white");
    setShowHeaderButton("flex");
    setborderBottm("1px dashed rgba(0, 0, 0, 0.548)");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }
  function HandleCompleteBoarderUnSelected() {
    setbackgroundColor(null);
    setShowHeaderButton("none");
  }
  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [props.data]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [CounterData]);

  function HandlerAddItemInArray() {
    array.push({
      selected: false,
      toggleButton: { showGPA: true, showLocation: true , showPeriod:true,showBullets:true},
      togglebuttonlist: [
        { name: "Show GPA", selectedToggleButton: true },
        { name: "Show Location", selectedToggleButton: true },
        { name: "Show Period", selectedToggleButton: true },
        { name: "Show Bullets", selectedToggleButton: true },
      ],
      value: {
        titleTextHolder: "",
        InstitudeNameTestHolder: "",
        locationTestHolder: "",
        bullotsTestHolder: "",
        GPAFullTestHolder:"",
        GPAObtainTestHolder:"",
        date: {
          yearfrom: null,
          monthfrom: null,
          monthto: null,
          ongoing: true,
          yearto: null,
        },
      },
    });
    setState([...array]);
    localStorage.setItem("arrayEducation", JSON.stringify(array));
  }
  function HanderDeleteItemInArray() {
    array.pop({
      selected: false,
      toggleButton: { showGPA: true, showLocation: true , showPeriod:true,showBullets:true},
      togglebuttonlist: [
        { name: "Show GPA", selectedToggleButton: true },
        { name: "Show Location", selectedToggleButton: true },
        { name: "Show Period", selectedToggleButton: true },
        { name: "Show Bullets", selectedToggleButton: true },
      ],
      value: {
        titleTextHolder: "",
        InstitudeNameTestHolder: "",
        locationTestHolder: "",
        bullotsTestHolder: "",
        GPAFullTestHolder:"",
        GPAObtainTestHolder:"",
        date: {
          yearfrom: null,
          monthfrom: null,
          monthto: null,
          ongoing: true,
          yearto: null,
        },
      },
    });
    setState([...array]);
    localStorage.setItem("arrayEducation", JSON.stringify(array));
  }
  useEffect(() => {
    if (localStorage.getItem("arrayEducation") !== null) {
      let value = localStorage.getItem("arrayEducation");
      setState(JSON.parse(value));
    }
  }, []);
  function IsActive(Isactive) {
    if (Isactive) {
      setToggleArrowDown(Isactive);
    } else {
      setToggleArrowDown(Isactive);
    }
  }
  function IsActiveUp(Isactive) {
    if (Isactive) {
      setToggleArrowUp(Isactive);
    } else {
      setToggleArrowUp(Isactive);
    }
  }
  return (
    <>
     
      <div
        className="outerWraperCompleteBox"
        style={{ backgroundColor: backgroundColor }}
        onClick={() => {}}
      >
        <div
          style={{ backgroundColor: backgroundColor }}
          className="HeadingNameBox"
          onClick={HandleCompleteBoarderSelected}
        >
          <input
            className="TexrHolderexperience"
            style={{ borderBottom: "4px solid" }}
            placeholder="EDUCATION"
            onClick={() => {
              setUpdateState(UpdateState + 1);
              dispatch(INCREMENT());
            }}
          />
           <div
        style={{ display: ShowHeaderButton }}
        className="headingOptionBoxEducation"
      >
        <div
          onClick={HandlerAddItemInArray}
          className="outerWraperPlusAndNewEntry"
        >
          <FaPlus className="newEntryPlusIcon" />
          <div className="newEntryText">New Entry</div>
        </div>
        <RiDeleteBin6Line
          onClick={HanderDeleteItemInArray}
          className="DeleteIcon"
        />
        <CgArrangeFront className="ArrangeIcon" />
      </div>
        </div>
        {array &&
          array.map((item, index) => {
            return (
              <Boxfunction
                UpdateState={UpdateState}
                HeaderButton={"flex"}
                data={props.data}
                borderbotm={borderBottm}
                button={props.button}
                item={item}
                IsActive={IsActive}
                IsActiveUp={IsActiveUp}
                ToggleArrowDown={ToggleArrowDown}
                ToggleArrowUp={ToggleArrowUp}
                index={index}
                list={array}
                setList={setState}
                HandleCompleteBoarderUnSelected={
                  HandleCompleteBoarderUnSelected
                }
                HandlerAddItemInArrayfun={HandlerAddItemInArray}
                HanderDeleteItemInArrayfun={HanderDeleteItemInArray}
              />
            );
          })}
      </div>
    </>
  );
}
