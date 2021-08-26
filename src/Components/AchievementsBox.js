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
import {
  INCREMENT,
  INCREMENTBACKGROUNDCOLORACHIEVEMENT,
} from "./Redux/actions/indux";
import { BsStarHalf } from "react-icons/bs";
import { iconListData } from "../Components/DatePicker/JasonData";
import MyComponent from "./InputField";
import Loader from "./Loader";
import InputEditor from "./ReactRichtext";
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
    if (localStorage.getItem("arrayAchievement") !== null) {
      let value = localStorage.getItem("arrayAchievement");
      value = JSON.parse(value);
      setchecked(
        value[props.indexouterarray].togglebuttonlist[props.index].selected
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
  const [Bullots, setBullots] = useState("");
  const [Counter, setCounter] = useState(0);
  const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const [listIcon, setlistIcon] = useState(false);
  const [Icon, setIcon] = useState(
    <div style={{ color: "#008CFF !important" }}>
      <BsStarHalf />
    </div>
  );
  const [Title, setTitle] = useState("");
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [ShowIcon, setShowIcon] = useState(true);
  const [ShowBullets, setShowBullets] = useState(true);
  const [indexDeleteBox, setindexDeleteBox] = useState(null);
  const [loader, setloader] = useState(false);
  const dispatch = useDispatch();
  const Incrementnull = useSelector((state) => state.IncrementNull);

  useEffect(() => {
    setToggleButtons(false);
    setlistIcon(false);
    let temp = props.list;
    props.list.map((item, index) => {
      if (item.selected) {
        temp[index].selected = false;
      }
    });
    props.setList([...temp]);
  }, [Incrementnull]);
  useEffect(() => {
    setToggleButtons(false);
  }, [props.UpdateState]);

  function HandleTextDecoration() {
    setlistIcon(false);
    setToggleButtons(false);
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
    dispatch(INCREMENTBACKGROUNDCOLORACHIEVEMENT());
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
    setindexDeleteBox(props.index);
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
    setindexDeleteBox(null);
    let index = props.index + 1;
    console.log("index Down", index);
    setindexDeleteBox(index + 1);

    setlistIcon(false);
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
    setindexDeleteBox(null);
    let index = null;
    index = props.index - 1;
    console.log("index up", index);
    setindexDeleteBox(index - 1);
    setToggleButtons(false);
    setlistIcon(false);
    props.IsActive(true);
    let temp = props.list;
    if (temp[props.index].selected) {
      temp[props.index - 1].selected = true;
      let index = props.index - 1;
      setindexDeleteBox(index);
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
    setlistIcon(false);
    setToggleButtons(false);
    let temp = [];
    temp = props.list;
    if (temp.length === 1) {
      props.IsActive(false);
      props.IsActiveUp(false);
    }
    console.log("index = ", indexDeleteBox);
    if (indexDeleteBox !== null) {
      temp.splice(indexDeleteBox, 1);
    }
    console.log("new array", temp);
    props.setList([...temp]);
    localStorage.setItem("arrayAchievement", JSON.stringify(temp));
    setloader(true)
  }

  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }

  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selected = toggle;
    localStorage.setItem("arrayAchievement", JSON.stringify(array));
    if (array[props.index].togglebuttonlist[index].name === "Show icone") {
      setShowIcon(toggle);
    } else {
      setShowBullets(toggle);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("arrayAchievement") !== null) {
        let item = localStorage.getItem("arrayAchievement");
        item = JSON.parse(item);
        props.setList([...item]);
      }
      setloader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [loader]);

  useEffect(() => {
    if (localStorage.getItem("arrayAchievement") !== null) {
      setcheckplacehoderBollets(false);
      let item = localStorage.getItem("arrayAchievement");
      item = JSON.parse(item);
      setBullots(item[props.index].value.bullots);
      setTitle(item[props.index].value.title);
      let value = localStorage.getItem("arrayAchievement");
      value = JSON.parse(value);
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show icone") {
          setShowIcon(item.selected);
        } else {
          setShowBullets(item.selected);
        }
      });
    }
  }, []);
  function InputTextField(text) {
    let array = props.list;
    array[props.index].value.title = text;
    localStorage.setItem("arrayAchievement", JSON.stringify(array));
    setTitle(text);
  }
  if(loader){
    return(<> {
      <div
        style={{
          border: "1px solid",
          position: "absolute",
          left: "0px",
          right: "0px",
          top: "0px",
          bottom: "0px",
          backgroundColor: "rgb(71 72 75 / 41%)",
          zIndex: "5",
        }}
      >
        <Loader />
      </div>
    }</>)
  }else{
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
                setlistIcon(false);
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
                setlistIcon(false);
                setToggleButtons(!ToggleButtons);
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
            alignItems: "unset",
          }}
        >
          <div style={{ display: "flex", borderBottom: props.borderbotm }}>
            <div
              onClick={() => {
                setlistIcon(!listIcon);
                setToggleButtons(false);
              }}
              style={{ display: ShowIcon ? "block" : "none" }}
              className="Icon"
            >
              {Icon}
            </div>
            <div
              className="outerWraperInputFieldHaider"
              onClick={() => {
                setToggleButtons(false);
                setlistIcon(false);
              }}
            >
              <MyComponent
                placeholder={"Why you are most proud of?"}
                setFunction={InputTextField}
                InputText={Title}
                //  textInput={textInput}
              />
              <div
                onClick={handleText}
                className="EditorText"
                style={{
                  display: ShowBullets ? "block" : "none",
                  margin: "unset",
                }}
              >
                {checkplacehoderBollets ? (
                  <div>jj</div>
                ) : (
                  <div className="app" style={{ width: "300px" }}>
                    <Editor
                      text={Bullots}
                      onChange={(text) => {
                        let array = props.list;
                        array[props.index].value.bullots = text;
                        setBullots(text);
                        localStorage.setItem(
                          "arrayAchievement",
                          JSON.stringify(array)
                        );
                      }}
                      options={{
                        placeholder: {
                          text: "Why are you proud of this achievement?",
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
      </>
   
   );
  }
 
}
