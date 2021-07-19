import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import Boxfunction from "./ExperienceBox";
import "react-datepicker/dist/react-datepicker.css";
export default function ExperienceSection(props) {
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [array, setState] = useState([]);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [ToggleArrowDown, setToggleArrowDown] = useState(true);
  const [ToggleArrowUp, setToggleArrowUp] = useState(true);
  function HandleCompleteBoarderSelected() {
    props.button();
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
  

  function HandlerAddItemInArray() {
    array.push({ selected: false,value:{title:"",companyname:"",date:"",location:"",companydiscription:"",bullots:"",url:""}});
    setState([...array]);
    localStorage.setItem("arrayExperience", JSON.stringify(array));
  }
  function HanderDeleteItemInArray() {
    array.pop({ selected: false,value:{title:"",companyname:"",date:"",location:"",companydiscription:"",bullots:"",url:""}});
    setState([...array]);
    localStorage.setItem("arrayExperience", JSON.stringify(array));
  }
  useEffect(() => {
    if (localStorage.getItem("arrayExperience") !== null) {
      let value = localStorage.getItem("arrayExperience");
      setState(JSON.parse(value));
    }
  }, []);
  function IsActive(Isactive) {
    if(Isactive){
      setToggleArrowDown(Isactive)
    }else{
      setToggleArrowDown(Isactive)
    }
  }
  function IsActiveUp(Isactive) {
    if(Isactive){
      setToggleArrowUp(Isactive)
    }else{
      setToggleArrowUp(Isactive)
    }
  }
  return (
    <>
      <div style={{ display: ShowHeaderButton }} className="headingOptionBox">
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
          <div
          contentEditable
          className="TexrHolderexperience"
            style={{ borderBottom: "4px solid" }}
            onClick={() => {
              setUpdateState(UpdateState + 1);
            }}
          >
            Experience
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
