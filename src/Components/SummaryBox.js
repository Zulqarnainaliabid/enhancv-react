import React, { useState, useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Editor from "react-medium-editor";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "./Redux/actions/indux";
import "./HomePage.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");
export default function Boxfunction(props) {
  const inputref = useRef();
  const alert = useAlert();
  const [EnabledFontFormatColor, setEnabledFontFormatColor] =
    useState("#38434744");
  const [EnabledFontFormatNoDrop, setEnabledFontFormatNoDrop] =
    useState("no-drop");
  const [UpdateNumber, setUpdateNumber] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const [SummaryTextHolder, setSummaryTextHolder] = useState("");

  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  useEffect(() => {
    let temp = props.list;
    props.list.map((item, index) => {
      if (item.selected) {
        temp[index].selected = false;
      }
    });
    props.setList([...temp]);
  }, [CounterData]);

  useEffect(() => {
    let temp = props.list;
    props.list.map((item, index) => {
      if (item.selected) {
        temp[index].selected = false;
      }
    });
    props.setList([...temp]);
  }, [props.data]);
  useEffect(() => {}, [props.UpdateState]);
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
  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }
  useEffect(() => {
    if (localStorage.getItem("arraySummary") !== null) {
      setcheckplacehoderBollets(false);
      let value = localStorage.getItem("arraySummary");
      value = JSON.parse(value);
      setSummaryTextHolder(value[props.index].value.titleSummaryTextHolder);
    }
  }, []);
  return (
    <>
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
          className="headingOptionUnderBoxEducation"
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
              border: "unset",
            }}
            className="DeleteIcon"
          />
        </div>
        <div className="outerWraperInputFieldHaider" style={style}>
          <div onClick={handleText} className="EditorText">
            {checkplacehoderBollets ? (
              <div>jj</div>
            ) : (
              <Editor
                text={SummaryTextHolder}
                onChange={(text) => {
                  setSummaryTextHolder(text);
                  let array = props.list;
                  array[props.index].value.titleSummaryTextHolder = text;
                  localStorage.setItem("arraySummary", JSON.stringify(array));
                }}
                tag="pre"
                options={{
                  placeholder: {
                    text: "What's the one thing you want someone to remember after reading your resume",
                    hideOnClick: true,
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
