import React, { useState, useEffect, useRef } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Switch from "react-switch";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT , INCREMENTBACKGROUNDCOLORLANGUAGE , INDUXLANGUAGE} from "./Redux/actions/indux";
import "./HomePage.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");
export function SwitchButtons(props) {
  const [checked, setchecked] = useState(true);
  function handleChange(value) {
    setchecked(value);
    props.handleToggglebutton(props.index, value);
  }
  useEffect(() => {
    if (localStorage.getItem("arrayLanguage") !== null) {
      let value = localStorage.getItem("arrayLanguage");
      value = JSON.parse(value);
      setchecked(
        value[props.indexouterarray].togglebuttonlist[props.index]
          .selectedToggleButton
      );
    } else {
      setchecked(true);
    }
  }, []);
  return (
    <label>
      <Switch
        height={25}
        width={45}
        offColor="#888"
        onColor="#00c091"
        activeBoxShadow="null"
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleChange}
        checked={checked}
        id="normal-switch"
      />
    </label>
  );
}
export default function Boxfunction(props) {
  const inputref = useRef(null);
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UpdateNumber, setUpdateNumber] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [ShowSlider, setShowSlider] = useState(true);
  const [ShowProficiency, setShowProficiency] = useState(true);
  const [value, setvalue] = useState(0);
  const [Language, setLanguage] = useState("Begineer");
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [LanguageTextholder, setLanguageTextholder] = useState("");
  const dispatch = useDispatch();
  const Indux = useSelector((state) => state.InduxLanguage);
  useEffect(() => {
    setToggleButtons(false);
  }, [props.UpdateState]);
  function HandleSetBackGroundColor() {
    dispatch(INCREMENTBACKGROUNDCOLORLANGUAGE());
    props.HandleCompleteBoarderUnSelected();
    let temp = props.list;
    if (!temp[props.index].selected) {
      props.list.map((item, index) => {
        if (item.selected) {
          temp[index].selected = false;
        }
      });
      temp[props.index].selected = true;
      props.setList([...temp]);
    }
    props.button();
    setUpdateNumber(UpdateNumber + 1);
    dispatch(INDUXLANGUAGE(props.index));
    let array = props.list;
    if (array.length !== 1) {
      if (props.index === 0) {
        props.IsActiveUp(false);
        props.IsActive(true);
      } else if (props.index === array.length - 1) {
        props.IsActive(false);
        props.IsActiveUp(true);
      } else {
        props.IsActive(true);
        props.IsActiveUp(true);
      }
    } else {
      props.IsActive(false);
      props.IsActiveUp(false);
    }
  }
  function HandleArrowDown() {
    let index = props.index + 1;
    dispatch(INDUXLANGUAGE(index));
    props.IsActiveUp(true);
    let temp = props.list;
    if (temp[props.index].selected) {
      temp[props.index + 1].selected = true;
    }
    temp[props.index].selected = false;
    props.setList([...temp]);
    if (props.index + 1 === temp.length - 1) {
      props.IsActive(false);
    } else {
      props.IsActive(true);
    }
  }
  const HandleArrowUP = () => {
    let index = null;
    index = props.index - 1;
    dispatch(INDUXLANGUAGE(index));
    props.IsActive(true);
    let temp = props.list;
    if (temp[props.index].selected) {
      temp[props.index - 1].selected = true;
    }
    temp[props.index].selected = false;
    props.setList([...temp]);
    if (props.index === 1) {
      props.IsActiveUp(false);
    } else {
      props.IsActiveUp(true);
    }
  };
  function HandleDelete() {
    let temp = [];
    temp = props.list;
    if (temp.length === 1) {
      props.IsActive(false);
      props.IsActiveUp(false);
    }
    console.log("index = ", Indux);
    if (Indux !== null) {
      temp.splice(Indux, 1);
    }
    console.log("new array", temp);
    localStorage.setItem("arrayLanguage", JSON.stringify(temp));
    window.location.reload(false);
  }
  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selectedToggleButton = toggle;
    localStorage.setItem("arrayLanguage", JSON.stringify(array));
    if (array[props.index].togglebuttonlist[index].name === "Show Slider") {
      setShowSlider(toggle);
    } else {
      setShowProficiency(toggle);
    }
  }
  useEffect(() => {
    inputref.current.focus()
    if (localStorage.getItem("arrayLanguage") !== null) {
      let value = localStorage.getItem("arrayLanguage");
      value = JSON.parse(value);
      setLanguageTextholder(value[props.index].value.LanguageTextholder);
      setLanguage(value[props.index].value.proficiencyTextHolder);
      setvalue(value[props.index].value.SliderValueTextHolder)
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Slider") {
          setShowSlider(item.selectedToggleButton);
        } else {
          setShowProficiency(item.selectedToggleButton);
        }
      });
    }
  }, []);
  const handleChange = (value) => {
    setvalue(value);
    if (value === 1){
      setLanguage("Begineer");
      let array = props.list;
      array[props.index].value.proficiencyTextHolder = "Begineer";
      array[props.index].value.SliderValueTextHolder = value;
      localStorage.setItem("arrayLanguage", JSON.stringify(array));
    } 
    else if (value === 2){
      setLanguage("Intermediate");
      let array = props.list;
      array[props.index].value.proficiencyTextHolder = "Intermediate";
      array[props.index].value.SliderValueTextHolder = value;
      localStorage.setItem("arrayLanguage", JSON.stringify(array));
    } 
    else if (value === 3){
      let array = props.list;
      array[props.index].value.proficiencyTextHolder = "Advanced";
      array[props.index].value.SliderValueTextHolder = value;
      localStorage.setItem("arrayLanguage", JSON.stringify(array));
      setLanguage("Advanced");
    } 
    else if (value === 4){
      setLanguage("Proficient");
      let array = props.list;
      array[props.index].value.proficiencyTextHolder = "Proficient";
      array[props.index].value.SliderValueTextHolder = value;
      localStorage.setItem("arrayLanguage", JSON.stringify(array));
    } 
    else if (value === 5){
      setLanguage("Native");
      let array = props.list;
      array[props.index].value.proficiencyTextHolder = "Native";
      array[props.index].value.SliderValueTextHolder = value;
      localStorage.setItem("arrayLanguage", JSON.stringify(array));
    } 
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        {ToggleButtons && (
          <div className="OuterWraperToggleButtonsExperienceSection">
            {togglebuttonarrayList.map((item, index) => {
              return (
                <>
                  <div className="InnerWraperToggleButtons">
                    <div className="ToggleButtonsLabel">{item.name} </div>
                    <div className="outerWraperSwitchClass">
                      <SwitchButtons
                        item={item}
                        index={index}
                        indexouterarray={props.index}
                        handleToggglebutton={handleToggglebutton}
                        outerArray={TogglebuttonsName}
                        settogglebuttonarrayList={settogglebuttonarrayList}
                        list={togglebuttonarrayList}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div style={{display:"flex",justifyContent:"center",position:"relative"}}>
         <div
        style={{ display: props.item.selected ? "flex" : "none" }}
        className="headingOptionUnderBoxEducation"
      >
        <div
          className="outerWraperPlusAndNewEntry"
          onClick={() => {
            props.HandlerAddItemInArrayfun();
            setCounter(Counter + 1);
            props.IsActiveUp(true);
            props.IsActive(false);
          }}
        >
          <FaPlus className="newEntryPlusIcon" />
          <div className="newEntryText">New Entry</div>
        </div>
        {props.ToggleArrowUp && (
          <MdKeyboardArrowUp onClick={HandleArrowUP} className="ArrowIcon" />
        )}
        {props.ToggleArrowDown && (
          <MdKeyboardArrowDown
            onClick={HandleArrowDown}
            className="ArrowIcon"
          />
        )}
        <RiDeleteBin6Line className="DeleteIcon" onClick={HandleDelete} />
        <RiSettings5Fill
          onClick={() => {
            setToggleButtons(!ToggleButtons);
            let temp = [];
            temp = TogglebuttonsName;
            let togglebuttonarray = temp[props.index].togglebuttonlist;
            settogglebuttonarrayList([...togglebuttonarray]);
          }}
          className="ArrangeIcon"
        />
      </div>
      </div>
      <div
        onClick={HandleSetBackGroundColor}
        className="outerWraperBox"
        style={{
          backgroundColor: props.item.selected ? "white" : "",
          border: props.item.selected ? "1px solid #60d5ba" : "",
        }}
      > 
        <div
          className="outerWraperInputFieldHaider"
          onClick={() => {
            setToggleButtons(false);
          }}
          style={{
            borderBottom: props.borderbotm,
          }}
        >
          <div className="slider">
            <div
              className="outerWraperTextHolder"
            >
              <input
                ref={inputref}
                type="text"
                className="language"
                style={{ fontSize: "16px" }}
                placeholder="Language"
                value={LanguageTextholder}
                onChange={(e)=>{
                  let array = props.list;
                  array[props.index].value.titleSocialnetwork = e.target.value;
                  localStorage.setItem("arrayLanguage", JSON.stringify(array));
                  setLanguageTextholder(e.target.value)
                }}
              />
              <div className="value" style={{ display: ShowProficiency ? "flex" : "none" }}>
                <input type="text" style={{ fontSize: "16px" }} placeholder={Language} />
              </div>
            </div>
            <div style={{ display: ShowSlider ? "block" : "none" }}>
              <Slider
                min={1}
                max={5}
                tooltip={false}
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
