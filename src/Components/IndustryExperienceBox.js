import React, { useState, useEffect, useRef } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { RangeStepInput } from "react-range-step-input";
import { INCREMENT , INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE , INDUXFINDUSTRYEXPERIENCE} from "./Redux/actions/indux";
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
    if (localStorage.getItem("arrayIndustryExperienxe") !== null) {
      let value = localStorage.getItem("arrayIndustryExperienxe");
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
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [ShowSlider, setShowSlider] = useState(true);
  const [TitleTestHolder, setTitleTestHolder] = useState("");
  const Indux = useSelector((state) => state.InduxIndestryExperience);
  const dispatch = useDispatch();
  useEffect(() => {
    setToggleButtons(false);
  }, [props.UpdateState]);
  function HandleSetBackGroundColor() {
    dispatch(INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE());
    dispatch(INCREMENT());
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
    dispatch(INDUXFINDUSTRYEXPERIENCE(props.index));
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
  const style = {
    borderBottom: props.borderbotm,
  };
  function HandleArrowDown() {
    let index = props.index + 1;
    dispatch(INDUXFINDUSTRYEXPERIENCE(index));
    setToggleButtons(false);
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
    dispatch(INDUXFINDUSTRYEXPERIENCE(index));
    setToggleButtons(false);
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
    setToggleButtons(false);
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
    localStorage.setItem("arrayIndustryExperienxe", JSON.stringify(temp));
    window.location.reload(false);
  }
  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selectedToggleButton = toggle;
    localStorage.setItem("arrayIndustryExperienxe", JSON.stringify(array));
    if (array[props.index].togglebuttonlist[index].name === "Show Slider") {
      setShowSlider(toggle);
    }
  }
  useEffect(() => {
    inputref.current.focus()
    if (localStorage.getItem("arrayIndustryExperienxe") !== null) {
      let value = localStorage.getItem("arrayIndustryExperienxe");
      value = JSON.parse(value);
      setTitleTestHolder(value[props.index].value.titleTextHolder);
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Slider") {
          setShowSlider(item.selectedToggleButton);
        }
      });
    }
  }, []);
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
        className="headingOptionUnderBox"
      >
        <div
          className="outerWraperPlusAndNewEntry"
          onClick={() => {
            props.HandlerAddItemInArrayfun();
            setCounter(Counter + 1);
            setToggleButtons(false);
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
          style={style}
        >
          <input
           ref={inputref}
            type="text"
            className="outerWraperGroupTitle"
            placeholder="Area of expertise"
            value={TitleTestHolder}
            onChange={(e) => {
              setTitleTestHolder(e.target.value);
              let array = props.list;
              array[props.index].value.titleTextHolder = e.target.value;
              localStorage.setItem(
                "arrayIndustryExperienxe",
                JSON.stringify(array)
              );
            }}
          />
          <div style={{ display: ShowSlider ? "block" : "none" }}>
            <RangeStepInput />
          </div>
        </div>
      </div>
    </>
  );
}
