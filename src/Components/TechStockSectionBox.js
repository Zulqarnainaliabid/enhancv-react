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
import { INCREMENT } from "./Redux/actions/indux";
import "./HomePage.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");
export function ToolAndTechnology(props) {
  const [TextHolderToolsandTechnology, setTextHolderToolsandTechnology] = useState("");
  useEffect(() => {
    if (localStorage.getItem("arrayTechStock") !== null) {
             let temparrayitem = []
       temparrayitem = localStorage.getItem("arrayTechStock");
       temparrayitem  = JSON.parse(temparrayitem);
      setTextHolderToolsandTechnology(temparrayitem[props.outerarrayindex].Texttoolandtechnology[props.index].text)
    }
  },[]);
  return (
    <input
      type="text"
      placeholder="Tool / Tecnology"
      className="ToolAndTechnologyTechStockSection"
      value = {TextHolderToolsandTechnology}
      onChange={(e)=>{
        setTextHolderToolsandTechnology(e.target.value)
         let temp=[]
        temp = props.outerArray
        temp[props.outerarrayindex].Texttoolandtechnology[props.index].text=e.target.value
        localStorage.setItem("arrayTechStock", JSON.stringify(temp));
      }}
    />
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
        value[props.indexouterarray].togglebuttonlist[props.index].selectedToggleButton
      );
    }
  }, []);
  return (
    <label htmlFor="normal-switch">
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
  console.log("isyte,,",props.list[props.index].togglebuttonlist);
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
  const [ShowGroupName, setShowGroupName] = useState("block");
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  const [ArrayTechnology, setArrayTechnology] = useState(props.list);
  const [CursurPointer, setCursurPointer] = useState(null);
  const [pointEvent, setpointEvent] = useState(null);
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const [GroupTitlrTextHolder, setGroupTitlrTextHolder] = useState('');
  
  useEffect(() => {
    setToggleButtons(false);
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
    let temp = props.list;
    props.list.map((item, index) => {
      if (item.selected) {
        temp[index].selected = false;
      }
    });
    props.setList([...temp]);
  }, [props.data]);
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
    props.HanderDeleteItemInArrayfun();
    let array = props.list;
    if (array.length === 1) {
      props.IsActive(false);
      props.IsActiveUp(false);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("arrayTechStock") !== null) {
      let value = localStorage.getItem("arrayTechStock");
      value = JSON.parse(value);
      setGroupTitlrTextHolder(value[props.index].value.grouptitle)
      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Group Name") {
          setShowGroupName(item.selected);
        }
      });
    }
  }, []);
  useEffect(() => {
    inputref.current.focus();
  }, [Counter]);

  function HandlerAddingToolAndTechnology() {
   console.log("ooa12 = oo",props.list[props.index].Texttoolandtechnology)
   let temp = []
    temp = props.list
   temp[props.index].Texttoolandtechnology.push({Text:"null"})
   console.log("new array temp",temp);
    setArrayTechnology([...temp]);
    localStorage.setItem("arrayTechStock", JSON.stringify(temp));
    setpointEvent(null);
    setCursurPointer(null);
  }
  function HandlerMinusToolAndTechnology() {
    let temp = []
    temp = props.list
    if (temp[props.index].Texttoolandtechnology.length === 1) {
      setpointEvent("none");
      setCursurPointer("not-allowed");
    } else {
      temp[props.index].Texttoolandtechnology.pop({Text:"null"})
      console.log("new array temp",temp);
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
        onClick={HandleSetBackGroundColor}
        className="outerWraperBox"
        style={{
          backgroundColor: props.item.selected ? "white" : "",
          border: props.item.selected ? "1px solid #60d5ba" : "",
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
                console.log("group title,,",e.target.value)
                array[props.index].value.grouptitle = e.target.value;
                setGroupTitlrTextHolder(e.target.value);
                localStorage.setItem("arrayTechStock", JSON.stringify(array));
              }}
              className="companyTitleExperienceSection"
              placeholder="Group Title"
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
             {ArrayTechnology[props.index].Texttoolandtechnology.map((item,index) => {
                return <ToolAndTechnology 
                index={index}
                list={ArrayTechnology}
                setArrayTechnology={setArrayTechnology}
                outerArray={props.list}
                outerarrayindex={props.index}
                />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
