import React, { useState, useEffect, useRef } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Switch from "react-switch";
import Editor from "react-medium-editor";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT,INCREMENTBACKGROUNDCOLORPASSION , INDUXPASSION, SETTOGGLEBUTTONNULL,} from "./Redux/actions/indux";
import { BsStarHalf } from "react-icons/bs";
import { iconListData } from "./DatePicker/JasonData";

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
    if (localStorage.getItem("arrayPassion") !== null) {
      let value = localStorage.getItem("arrayPassion");
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
export default function PassionBoxfunction(props) {
  const inputref = useRef();
  const alert = useAlert();
  const [EnabledFontFormatColor, setEnabledFontFormatColor] =
    useState("#38434744");
  const [EnabledFontFormatNoDrop, setEnabledFontFormatNoDrop] =
    useState("no-drop");
  const [LinkTextBox, setLinkTextBox] = useState("none");
  const [ShowBullets, setShowBullets] = useState(true);
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UpdateNumber, setUpdateNumber] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const [listIcon, setlistIcon] = useState(false);
  const [Icon, setIcon] = useState(<BsStarHalf />);
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [ShowIcon, setShowIcon] = useState(true);
  const [ShowBullots, setShowBullots] = useState(true);
  const [TitleTextHolder, setTitleTextHolder] = useState("");
  const [BulletsTextHolder, setBulletsTextHolder] = useState("");
  const [WidthLeftRight, setWidthLeftRight] = useState(null);
  
  const dispatch = useDispatch();
  const Indux = useSelector((state) => state.InduxPassion);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  const SetToggleButtonsNull = useSelector((state) => state.SetToggleButtonsNull);
  const UpdateWidthLeftRight = useSelector((state) => state.UpdateWidthLeftRight);
  useEffect(() => {
    setToggleButtons(false);
  }, [SetToggleButtonsNull]);
  
  useEffect(() => {
    setToggleButtons(false);
  }, [Incrementnull]);

  function HandleTextDecoration() {
    setToggleButtons(false);
    setlistIcon(false);
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
    dispatch(INCREMENTBACKGROUNDCOLORPASSION());
    setlistIcon(false);
    dispatch(SETTOGGLEBUTTONNULL());
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
    dispatch(INDUXPASSION(props.index));
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
    dispatch(INDUXPASSION(index));
    setToggleButtons(false);
    setlistIcon(false);
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
    dispatch(INDUXPASSION(index));
    setToggleButtons(false);
    setlistIcon(false);
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
    setlistIcon(false);
    let temp = [];
    temp = props.list;
    if (temp.length === 1) {
      props.IsActive(false);
      props.IsActiveUp(false);
    }
    if (Indux !== null) {
      temp.splice(Indux, 1);
    }
    localStorage.setItem("arrayPassion", JSON.stringify(temp));
    window.location.reload(false);
  }
  useEffect(() => {
    inputref.current.focus();
    if (localStorage.getItem("arrayPassion") !== null) {
      setcheckplacehoderBollets(false);
      let value = localStorage.getItem("arrayPassion");
      value = JSON.parse(value);
      setTitleTextHolder(value[props.index].value.titleCareerInterest);
      setBulletsTextHolder(value[props.index].value.bullots);
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Icon") {
          setShowIcon(item.selectedToggleButton);
        } else {
          setShowBullets(item.selectedToggleButton);
        }
      });
    }
  }, []);
  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selectedToggleButton = toggle;
    localStorage.setItem("arrayPassion", JSON.stringify(array));
    if (array[props.index].togglebuttonlist[index].name === "Show Icon") {
      setShowIcon(toggle);
    } else {
      setShowBullots(toggle);
    }
  }
  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }

  useEffect(() => {
    if(UpdateWidthLeftRight!==null){
      UpdateWidthLeftRight.map((item,index)=>{
        if(UpdateWidthLeftRight[index].name==="Profesion")
        {
          if(UpdateWidthLeftRight[index].Left)
          {
            console.log("Left")
           setWidthLeftRight("556px")
          }else{
            console.log("right")
            setWidthLeftRight("300px")
          }
        }
      })
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
      <div style={{display:"flex",justifyContent:"center",position:"relative"}} >
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
          <BiText
            onClick={HandleTextDecoration}
            style={{
              color: EnabledFontFormatColor,
              cursor: EnabledFontFormatNoDrop,
            }}
            className="DeleteIcon"
          />
          <div
            className="ArrangeIcon"
            onClick={() => {
              setlistIcon(!listIcon);
              setToggleButtons(false);
            }}
          >
            {Icon}
          </div>
          <RiSettings5Fill
            onClick={() => {
              setToggleButtons(!ToggleButtons);
              setlistIcon(false);
              let temp = [];
              temp = TogglebuttonsName;
              let togglebuttonarray = temp[props.index].togglebuttonlist;
              settogglebuttonarrayList([...togglebuttonarray]);
            }}
            className="ArrangeIcon"
          />
          {listIcon && (
            <div className="outerWraperListIcon">
              {iconListData &&
                iconListData.map((item) => {
                  return (
                    <div
                      className="iconsList"
                      onClick={() => {
                        setIcon(item.icon);
                      }}
                    >
                      {item.icon}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        </div>
     
      <div
        onClick={HandleSetBackGroundColor}
        className="outerWraperBox"
        style={{
          backgroundColor: props.item.selected ? "white" : "",
          border: props.item.selected ? "1px solid #60d5ba" : "",
          alignItems:"unset"
        }}
      >
        <div style={{ display: "flex", borderBottom: props.borderbotm }}>
          <div
            onClick={() => {
              setlistIcon(!listIcon);
            }}
            style={{ display: ShowIcon ? "block" : "none" }}
            className="Icon"
          >
            {Icon}
          </div>
          <div
            className="outerWraperInputFieldHaider"
            onClick={() => {
              setLinkTextBox("none");
              setToggleButtons(false);
              setlistIcon(false);
            }}
          >
            <input
              ref={inputref}
              type="text"
              value={TitleTextHolder}
              onClick={() => {
                setEnabledFontFormatColor("#38434744");
                setEnabledFontFormatNoDrop("no-drop");
              }}
              onChange={(e) => {
                setTitleTextHolder(e.target.value);
                let array = props.list;
                array[props.index].value.titleCareerInterest = e.target.value;
                localStorage.setItem("arrayPassion", JSON.stringify(array));
              }}
              className="companyTitlePassionsSection"
              style={{ display: "block ", fontSize: "20px " }}
              placeholder="Carrer interest / Passions"
            />
            <div
              onClick={handleText}
              className="EditorText"
              style={{
                display: ShowBullots ? "block" : "none",
                margin: "unset",
              }}
            >
              {checkplacehoderBollets ? (
                <div>jj</div>
              ) : (
                <div className="app" style={{width:WidthLeftRight}}>
                <Editor
                  text={BulletsTextHolder}
                  onChange={(text) => {
                    setBulletsTextHolder(text);
                    let array = props.list;
                    array[props.index].value.bullots = text;
                    localStorage.setItem("arrayPassion", JSON.stringify(array));
                  }}
                  options={{
                    placeholder: {
                      text: "What are you looking  for in your next company?",
                      hideOnClick: true,
                    },
                  }}
                />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: LinkTextBox }}></div>
    </>
  );
}
