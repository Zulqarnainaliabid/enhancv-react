import React, { useState, useEffect, useRef } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import {
  INCREMENTBACKGROUNDCOLORSKILL,
  INDUXTECKSTOCK,
} from "./Redux/actions/indux";
import "./HomePage.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");
export function ToolAndTechnology(props) {
  const inputrefToolAndTechnology = useRef();
  const [TextHolderToolsandTechnology, setTextHolderToolsandTechnology] =
    useState("");
  const [width, setWidth] = useState(20);
  useEffect(() => {
    inputrefToolAndTechnology.current.focus();
    if (localStorage.getItem("arrayTechStock") !== null) {
      let temparrayitem = [];
      temparrayitem = localStorage.getItem("arrayTechStock");
      temparrayitem = JSON.parse(temparrayitem);
      setTextHolderToolsandTechnology(
        temparrayitem[props.outerarrayindex].Texttoolandtechnology[props.index]
          .text
      );
      if (
        temparrayitem[props.outerarrayindex].Texttoolandtechnology[props.index]
          .poriperty !== null
      ) {
        setWidth(
          temparrayitem[props.outerarrayindex].Texttoolandtechnology[
            props.index
          ].poriperty
        );
      }
    }
  }, []);
  console.log("border =",props.border)
  return (
    <>
      <input
        ref={inputrefToolAndTechnology}
        type="text"
        placeholder="Tool / Tecnology"
        style={{width: width + "ch"}}
        className={props.border}
        value={TextHolderToolsandTechnology}
        onChange={(e) => {
          if (e.target.value.length < 1) {
            setWidth(20);
          } else {
            setWidth(e.target.value.length+1);
          }
          setTextHolderToolsandTechnology(e.target.value);
          let temp = [];
          temp = props.outerArray;
          temp[props.outerarrayindex].Texttoolandtechnology[props.index].text =
            e.target.value;
          temp[props.outerarrayindex].Texttoolandtechnology[
            props.index
          ].poriperty = e.target.value.length;
          localStorage.setItem("arrayTechStock", JSON.stringify(temp));
        }}
      />
    </>
  );
}
export function SwitchButtons(props) {
  const [checked, setchecked] = useState(true);
  function handleChange(value) {
    setchecked(value);
    props.handleToggglebutton(props.index, value);
  }
  useEffect(() => {
    if (localStorage.getItem("arrayTechStock") !== null) {
      let value = localStorage.getItem("arrayTechStock");
      value = JSON.parse(value);
      setchecked(
        value[props.indexouterarray].togglebuttonlist[props.index]
          .selectedToggleButton
      );
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
  const inputref = useRef();
  const alert = useAlert();
  const [EnabledFontFormatColor, setEnabledFontFormatColor] =
    useState("#38434744");
  const [EnabledFontFormatNoDrop, setEnabledFontFormatNoDrop] =
    useState("no-drop");
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UpdateNumber, setUpdateNumber] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [ShowGroupName, setShowGroupName] = useState(true);
  const dispatch = useDispatch();
  const [ArrayTechnology, setArrayTechnology] = useState(props.list);
  const [CursurPointer, setCursurPointer] = useState(null);
  const [pointEvent, setpointEvent] = useState(null);
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [GroupTitlrTextHolder, setGroupTitlrTextHolder] = useState("");
  const [BackGroundColo, setBackGroundColo] = useState("rgb(204, 204, 204)");
  const [BackGroundColoSecond, setBackGroundColoSecond] = useState("rgb(0, 192, 145)");
  const [BorderStyle, setBorderStyle] = useState("ToolAndTechnologyTechStockSection");
  const Indux = useSelector((state) => state.InduxTechstock);

  useEffect(() => {
    setToggleButtons(false);
  }, [props.UpdateState]);
  function HandleTextDecoration() {
    if (
      EnabledFontFormatColor === "#38434744" ||
      EnabledFontFormatNoDrop === "no-drop "
    ) {
      alert.show(
        "Text decoration is available only in descriptions and bullets"
      );
    }
  }
  function HandleSetBackGroundColor() {
    dispatch(INCREMENTBACKGROUNDCOLORSKILL());
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
    dispatch(INDUXTECKSTOCK(props.index));
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
    dispatch(INDUXTECKSTOCK(index));
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
    dispatch(INDUXTECKSTOCK(index));
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
    localStorage.setItem("arrayTechStock", JSON.stringify(temp));
    window.location.reload(false);
  }
  useEffect(() => {
    inputref.current.focus();
    if (localStorage.getItem("arrayTechStock") !== null) {
      let value = localStorage.getItem("arrayTechStock");
      value = JSON.parse(value);
      setGroupTitlrTextHolder(value[props.index].value.grouptitle);
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Group Name") {
          setShowGroupName(item.selected);
        }
      });
    }
    if (localStorage.getItem("arrayTechStockSetBorder") !== null) {
      let value = localStorage.getItem("arrayTechStockSetBorder");
      value = JSON.parse(value);
      setBorderStyle(value)
    }
  }, []);

  function HandlerAddingToolAndTechnology() {
    let temp = [];
    temp = props.list;
    temp[props.index].Texttoolandtechnology.push({ Text: "null" });
    setArrayTechnology([...temp]);
    localStorage.setItem("arrayTechStock", JSON.stringify(temp));
    setpointEvent(null);
    setCursurPointer(null);
  }
  function HandlerMinusToolAndTechnology() {
    let temp = [];
    temp = props.list;
    if (temp[props.index].Texttoolandtechnology.length === 1) {
      setpointEvent("none");
      setCursurPointer("not-allowed");
    } else {
      temp[props.index].Texttoolandtechnology.pop({ Text: "null" });
      setArrayTechnology([...temp]);
      localStorage.setItem("arrayTechStock", JSON.stringify(temp));
    }
  }
  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selected = toggle;
    localStorage.setItem("arrayTechStock", JSON.stringify(array));
    if (array[props.index].togglebuttonlist[index].name === "Show Group Name") {
      setShowGroupName(toggle);
    }
  }
  function HandleSetBorder(){
    setBackGroundColo("rgb(0, 192, 145)")
    setBackGroundColoSecond("rgb(204, 204, 204)")
    setBorderStyle("ToolAndTechnologyTechStockSectionBorder")
    localStorage.setItem("arrayTechStockSetBorder", JSON.stringify("ToolAndTechnologyTechStockSectionBorder"));
  }
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
                  <div className="outerWraperBorderStyle">
                      <div>Border Style</div>
                      <div style={{display:"flex"}} className="RadioButtonsBorderStyle">
                      <div
                        className="RadioButtonsToggleButtons"
                        style={{ backgroundColor: BackGroundColo }}
                        onClick={HandleSetBorder}
                      />
                      <div
                        onClick={()=>{
                          setBackGroundColo("rgb(204, 204, 204)")
                          setBackGroundColoSecond("rgb(0, 192, 145)")
                          setBorderStyle("ToolAndTechnologyTechStockSection")
                          localStorage.setItem("arrayTechStockSetBorder", JSON.stringify("ToolAndTechnologyTechStockSection"));
                        }}
                        className="RadioButtonsToggleButtons"
                        style={{ backgroundColor: BackGroundColoSecond }}
                      /></div>
                    </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{ display: props.item.selected ? "flex" : "none" }}
          className="headingOptionUnderBox"
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
          <FaPlusSquare
            className="PlusIconStockSection"
            onClick={HandlerAddingToolAndTechnology}
          />
          <div style={{ cursor: CursurPointer }}>
            <FaMinusSquare
              className="PlusIconStockSection"
              style={{ pointerEvents: pointEvent }}
              onClick={HandlerMinusToolAndTechnology}
            />
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
          <BiText
            onClick={HandleTextDecoration}
            style={{
              color: EnabledFontFormatColor,
              cursor: EnabledFontFormatNoDrop,
            }}
            className="DeleteIcon"
          />
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
          <div style={{ display: ShowGroupName ? "block" : "none" }}>
            <input
              ref={inputref}
              type="text"
              value={GroupTitlrTextHolder}
              onClick={() => {
                setEnabledFontFormatColor("#38434744");
                setEnabledFontFormatNoDrop("no-drop");
              }}
              onChange={(e) => {
                let array = props.list;
                array[props.index].value.grouptitle = e.target.value;
                setGroupTitlrTextHolder(e.target.value);
                localStorage.setItem("arrayTechStock", JSON.stringify(array));
              }}
              className="companyTitleExperienceSection"
              placeholder="Group Title"
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {ArrayTechnology[props.index].Texttoolandtechnology.map(
              (item, index) => {
                return (
                  <ToolAndTechnology
                    key={index}
                    index={index}
                    list={ArrayTechnology}
                    setArrayTechnology={setArrayTechnology}
                    outerArray={props.list}
                    outerarrayindex={props.index}
                    ref={inputref}
                    border={BorderStyle}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
