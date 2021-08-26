import React, { useState, useEffect, useRef } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Switch from 'react-switch';
import Editor from "react-medium-editor";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT , INCREMENTBACKGROUNDCOLOFINDMEONLINE } from "./Redux/actions/indux";
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
    if (localStorage.getItem("arrayFindmeOnline") !== null) {
      let value = localStorage.getItem("arrayFindmeOnline");
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
  const inputref = useRef();
  const alert = useAlert();
  const [EnabledFontFormatColor, setEnabledFontFormatColor] =
    useState("#38434744");
  const [EnabledFontFormatNoDrop, setEnabledFontFormatNoDrop] =
    useState("no-drop");
  const [LinkTextBox, setLinkTextBox] = useState("none");
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UpdateNumber, setUpdateNumber] = useState(0);
  
  const [Counter, setCounter] = useState(0);
  const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const [listIcon, setlistIcon] = useState(false);
  const [Icon, setIcon] = useState(<BsStarHalf />);
  const [ShowIcon, setShowIcon] = useState(true);
  const [ShowBullots, setShowBullots] = useState(true);

  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [TitleTextHolder, setTitleTextHolder] = useState('');
  const [BulletsTextHolder, setBulletsTextHolder] = useState('');
  

  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  useEffect(() => {
    setToggleButtons(false);
    setlistIcon(false)
    let temp = props.list;
    props.list.map((item, index) => {
      if (item.selected) {
        temp[index].selected = false;
      }
    });
    props.setList([...temp]);
  }, [CounterData]);

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
    setlistIcon(false)
  }, [props.UpdateState]);
  function HandleTextDecoration() {
    setToggleButtons(false)
    setlistIcon(false)
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
    dispatch(INCREMENTBACKGROUNDCOLOFINDMEONLINE());
    setlistIcon(false)
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
    setToggleButtons(false)
    setlistIcon(false)
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
    setToggleButtons(false)
    setlistIcon(false)
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
    setToggleButtons(false)
    setlistIcon(false)
    props.HanderDeleteItemInArrayfun();
    let array = props.list;
    if (array.length === 1) {
      props.IsActive(false);
      props.IsActiveUp(false);
    }
  }
  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }
  useEffect(() => {
    inputref.current.focus();
  }, [Counter]);

  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selectedToggleButton = toggle;
    localStorage.setItem("arrayFindmeOnline", JSON.stringify(array));
    if (array[props.index].togglebuttonlist[index].name === "Show Icons") {
      setShowIcon(toggle);
    } else {
      setShowBullots(toggle);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("arrayFindmeOnline") !== null) {
      setcheckplacehoderBollets(false);
      let value = localStorage.getItem("arrayFindmeOnline");
      value = JSON.parse(value);
      setTitleTextHolder(value[props.index].value.titleSocialnetwork);
      setBulletsTextHolder(value[props.index].value.bullots);
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Icons") {
          setShowIcon(item.selectedToggleButton);
        } else {
          setShowBullots(item.selectedToggleButton);
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
            setToggleButtons(false)
            setlistIcon(false)
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
            setToggleButtons(false)
          }}
        >
          {Icon}
        </div>
        <RiSettings5Fill
          onClick={() => {
            setToggleButtons(!ToggleButtons);
            setlistIcon(false)
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
      
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              setlistIcon(!listIcon);
            }}
            style={{ display: ShowIcon ? "block": "none" }}
            className="Icon"
          >
            {Icon}
          </div>
          <div
            className="outerWraperInputFieldHaider"
            onClick={() => {
              setLinkTextBox("none");
              setToggleButtons(false);
              setlistIcon(false)
            }}
            style={style}
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
                setTitleTextHolder(e.target.value)
                let array = props.list;
                array[props.index].value.titleSocialnetwork = e.target.value;
                localStorage.setItem("arrayFindmeOnline", JSON.stringify(array));
              }}
              className="companyTitlePassionsSection"
              style={{ display: "block ", fontSize: "20px " }}
              placeholder="Social Network"
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
                <div className="app" style={{width:"300px"}}>
                <Editor
                  text={BulletsTextHolder}
                  onChange={(text) => {
                    setBulletsTextHolder(text)
                    let array = props.list;
                    array[props.index].value.bullots = text
                    localStorage.setItem("arrayFindmeOnline", JSON.stringify(array));
                  }}
                  options={{
                    placeholder: {
                      text: "Username",
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
