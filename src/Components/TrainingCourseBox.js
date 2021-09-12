import React, { useState, useEffect, useRef } from "react";
import { MdDateRange } from "react-icons/md";
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
import { INCREMENT ,INCREMENTBACKGROUNDCOLORTRAINING , INDUXTRAINING, SETTOGGLEBUTTONNULL,} from "./Redux/actions/indux";
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
    if (localStorage.getItem("arrayTraining") !== null) {
      let value = localStorage.getItem("arrayTraining");
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
  const [ShowBullets, setShowBullets] = useState(true);
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UpdateNumber, setUpdateNumber] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [BullotsTextHolder, setBullotsTextHolder] = useState("");
  const [TitleTextHolder, setTitleTextHolder] = useState("");
  const [WidthLeftRight, setWidthLeftRight] = useState(null);
  const dispatch = useDispatch();
  const Indux = useSelector((state) => state.InduxTraining);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  const SetToggleButtonsNull = useSelector((state) => state.SetToggleButtonsNull);
  const UpdateWidthLeftRight = useSelector((state) => state.UpdateWidthLeftRight);
  const UpdateColor = useSelector((state) => state.UpdateColor);
  useEffect(() => {
    setToggleButtons(false);
  }, [SetToggleButtonsNull]);
  
  useEffect(() => {
    setToggleButtons(false);
  }, [Incrementnull]);
  function HandleTextDecoration() {
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
    dispatch(INCREMENTBACKGROUNDCOLORTRAINING());
    dispatch(INCREMENT());
    dispatch(SETTOGGLEBUTTONNULL());
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
    dispatch(INDUXTRAINING(props.index));
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
    dispatch(INDUXTRAINING(index));
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
    dispatch(INDUXTRAINING(index));
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
    if (Indux !== null) {
      temp.splice(Indux, 1);
    }
    localStorage.setItem("arrayTraining", JSON.stringify(temp));
    window.location.reload(false);
  }

  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }

  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selectedToggleButton = toggle;
    localStorage.setItem("arrayTraining", JSON.stringify(array));
    if (
      array[props.index].togglebuttonlist[index].name === "Show Description"
    ) {
      setShowBullets(toggle);
    }
  }
  useEffect(() => {
    inputref.current.focus();
    if (localStorage.getItem("arrayTraining") !== null) {
      setcheckplacehoderBollets(false);
      let value = localStorage.getItem("arrayTraining");
      value = JSON.parse(value);
      setBullotsTextHolder(value[props.index].value.bullotsTextHolder);
      setTitleTextHolder(value[props.index].value.titleTextHolder);
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Description") {
          setShowBullets(item.selectedToggleButton);
        }
      });
    }
  }, []);

  useEffect(() => {
    if(UpdateWidthLeftRight!==null){
      UpdateWidthLeftRight.map((item,index)=>{
        if(UpdateWidthLeftRight[index].name==="Training")
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
            value={TitleTextHolder}
            onClick={() => {
              setEnabledFontFormatColor("#38434744");
              setEnabledFontFormatNoDrop("no-drop");
            }}
            onChange={(e) => {
              setTitleTextHolder(e.target.value);
              let array = props.list;
              array[props.index].value.titleTextHolder = e.target.value;
              localStorage.setItem("arrayTraining", JSON.stringify(array));
            }}
            className=    {UpdateColor ? "companyTitleExperienceSectionBlue" : "companyTitleExperienceSectionGreen" }
            style={{ display: "block ", fontSize: "20px " }}
            placeholder="Course Title"
          />
          <div
            onClick={handleText}
            className="EditorText"
            style={{ display: ShowBullets ? "block" : "none", margin: "unset" }}
          >
            {checkplacehoderBollets ? (
              <div>jj</div>
            ) : (
              <div className="app" style={{width:WidthLeftRight,marginLeft: "12px"}}>
              <Editor
                text={BullotsTextHolder}
                onChange={(text) => {
                  setBullotsTextHolder(text);
                  let array = props.list;
                  array[props.index].value.bullotsTextHolder = text;
                  localStorage.setItem("arrayTraining", JSON.stringify(array));
                }}
                options={{
                  placeholder: {
                    text: "Which institude provided the course?",
                    hideOnClick: true,
                  },
                }}
              />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
