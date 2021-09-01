import React, { useState, useEffect, useRef } from "react";
import { MdDateRange } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Switch from "react-switch";
import Editor from "react-medium-editor";
import DatePicker from "./DatePicker/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import InputBullets from './Bullets'
import { INCREMENT , INCREMENTBACKGROUNDCOLORPROJECT , INDUXPROJECT, SETTOGGLEBUTTONNULL,} from "./Redux/actions/indux";
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
    if (localStorage.getItem("arrayProject") !== null) {
      let value = localStorage.getItem("arrayProject");
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
  const [ShowDate, setShowDate] = useState(false);
  const [UpdateDate, setUpdateDate] = useState(null);
  const [DislayDatePeriod, setDislayDatePeriod] = useState(true);
  const [UpdateMonthFrom, setUpdateMonthFrom] = useState(null);
  const [DateSlash, setDateSlash] = useState(false);
  const [MonthOngoing, setMonthOngoing] = useState(null);
  const [YearOnGoing, setYearOnGoing] = useState(null);
  const [DiplayMinus, setDiplayMinus] = useState(false);
  const [DisplayShashOngoing, setDisplayShashOngoing] = useState(false);
  const [Ongoing, setOngoing] = useState(true);
  const [BackwordMinusOngoing, setBackwordMinusOngoing] = useState(false);
  const [Counter, setCounter] = useState(0);
  const [WidthLeftRight, setWidthLeftRight] = useState(null);
  
  const [
    checkplacehodercompanydiscription,
    setcheckplacehodercompanydiscription,
  ] = useState(true);
  const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const [ShowDescription, setShowDescription] = useState(true);
  const [ShowBullets, setShowBullets] = useState(true);
  const [ShowLocation, setShowLocation] = useState(true);
  const [ShowPeriod, setShowPeriod] = useState(true);
  const [ShowLinks, setShowLinks] = useState(true);
  const [TogglebuttonsName, setTogglebuttonsName] = useState(props.list);
  const [togglebuttonarrayList, settogglebuttonarrayList] = useState([]);
  const dispatch = useDispatch();
  const UpdateYearFrom = useSelector((state) => state.IncrementState);
  const UpdateToggleYearFrom = useSelector((state) => state.UpdateYearFrom);
  const Indux = useSelector((state) => state.InduxProject);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  const SetToggleButtonsNull = useSelector((state) => state.SetToggleButtonsNull);
  const UpdateWidthLeftRight = useSelector((state) => state.UpdateWidthLeftRight);
  useEffect(() => {
    setToggleButtons(false);
  }, [SetToggleButtonsNull]);
  
  useEffect(() => {
    setToggleButtons(false);
  }, [Incrementnull]);
  function HandleOngoing(toggle) {
    if (toggle) {
      setOngoing(true);
      let array = props.list;
      array[props.index].value.date.ongoing = true;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    } else {
      setOngoing(false);
      let array = props.list;
      array[props.index].value.date.ongoing = false;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    }
    if (UpdateDate !== null || UpdateMonthFrom !== null) {
      setBackwordMinusOngoing(true);
    } else {
      setBackwordMinusOngoing(false);
      setDislayDatePeriod(false);
    }
  }
  function handleUpdateDate(yearfrom) {
    if (yearfrom === null) {
      setUpdateDate(null);
      let array = props.list;
      array[props.index].value.date.yearfrom = yearfrom.number;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    } else {
      setUpdateDate(yearfrom.number);
      let array = props.list;
      array[props.index].value.date.yearfrom = yearfrom.number;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    }
    if (yearfrom === null && UpdateMonthFrom === null) {
      setDislayDatePeriod(true);
    } else {
      setDislayDatePeriod(false);
    }
    if (UpdateMonthFrom !== null && yearfrom !== null) {
      setDateSlash(true);
    } else if (UpdateMonthFrom === null || yearfrom === null) {
      setDateSlash(false);
    }
  }

  function handleUpdateDateMonthFrom(monthfrom) {
    if (monthfrom === null) {
      setUpdateMonthFrom(null);
      let array = props.list;
      array[props.index].value.date.monthfrom = monthfrom;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    } else {
      setUpdateMonthFrom(monthfrom);
      let array = props.list;
      array[props.index].value.date.monthfrom = monthfrom;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    }
    if (monthfrom === null && UpdateMonthFrom === null) {
      setDislayDatePeriod(true);
      setDateSlash(false);
    } else {
      setDislayDatePeriod(false);
    }
    if (UpdateDate !== null && monthfrom !== null) {
      setDateSlash(true);
    } else if (UpdateDate === null || monthfrom === null) {
      setDateSlash(false);
    }
  }

  useEffect(() => {
    if (UpdateToggleYearFrom) {
      let array = props.list;
      array[props.index].value.date.yearfrom = null;
      localStorage.setItem("arrayProject", JSON.stringify(array));
      setDateSlash(false);
    }
  }, [UpdateYearFrom]);
  function HandleMonthOngoing(date) {
    if (date === null) {
      setMonthOngoing(null);
      let array = props.list;
      array[props.index].value.date.monthto = date;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    } else {
      setMonthOngoing(date);
      let array = props.list;
      array[props.index].value.date.monthto = date;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    }
    if (date !== null || YearOnGoing !== null) {
      setDiplayMinus(true);
    } else if (date === null && YearOnGoing === null) {
      setDiplayMinus(false);
    }
    if (date !== null && YearOnGoing !== null) {
      setDisplayShashOngoing(true);
    } else {
      setDisplayShashOngoing(false);
    }
  }

  function handleYearOngoing(date) {
    if (date === null) {
      setYearOnGoing(null);
    } else {
      setYearOnGoing(date);
      let array = props.list;
      array[props.index].value.date.yearto = date;
      localStorage.setItem("arrayProject", JSON.stringify(array));
    }
    if (date !== null || YearOnGoing !== null) {
      setDiplayMinus(true);
    } else if (date === null && YearOnGoing === null) {
      setDiplayMinus(false);
    }
  }
  
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
    dispatch(INCREMENTBACKGROUNDCOLORPROJECT());
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
    dispatch(INDUXPROJECT(props.index));
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
    dispatch(INDUXPROJECT(index));
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
    dispatch(INDUXPROJECT(index));
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
    localStorage.setItem("arrayProject", JSON.stringify(temp));
    window.location.reload(false);
  }
  useEffect(() => {
    inputref.current.focus();
    if (localStorage.getItem("arrayProject") !== null) {
      setcheckplacehodercompanydiscription(false);
      setcheckplacehoderBollets(false);
      let item = localStorage.getItem("arrayProject");
      item = JSON.parse(item);
      setUpdateDate(item[props.index].value.date.yearfrom);
      setUpdateMonthFrom(item[props.index].value.date.monthfrom);
      setMonthOngoing(item[props.index].value.date.monthto);
      setOngoing(item[props.index].value.date.ongoing);
      setYearOnGoing(item[props.index].value.date.yearto);
      if (
        item[props.index].value.date.yearfrom !== null ||
        item[props.index].value.date.monthfrom !== null ||
        item[props.index].value.date.monthto !== null ||
        item[props.index].value.date.yearto !== null
      ) {
        setDislayDatePeriod(false);
      } else {
        setDislayDatePeriod(true);
        setDateSlash(false);
      }
      if (
        item[props.index].value.date.monthfrom !== null &&
        item[props.index].value.date.yearfrom !== null
      ) {
        setDateSlash(true);
      }
      if (
        item[props.index].value.date.monthto !== null ||
        item[props.index].value.date.yearto !== null
      ) {
        setDiplayMinus(true);
        setDisplayShashOngoing(true);
      }
      if (
        item[props.index].value.date.monthto !== null ||
        item[props.index].value.date.ongoing !== null
      ) {
        setBackwordMinusOngoing(true);
      }
    }
  }, []);
  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }
  useEffect(() => {
    if(UpdateWidthLeftRight!==null){
      UpdateWidthLeftRight.map((item,index)=>{
        if(UpdateWidthLeftRight[index].name==="Project")
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

  function handleToggglebutton(index, toggle) {
    let array = [];
    array = props.list;
    array[props.index].togglebuttonlist[index].selectedToggleButton = toggle;
    localStorage.setItem("arrayProject", JSON.stringify(array));
    if (
      array[props.index].togglebuttonlist[index].name === "Show Discription"
    ) {
      setShowDescription(toggle);
    } else if (
      array[props.index].togglebuttonlist[index].name === "Show Bullets"
    ) {
      setShowBullets(toggle);
    } else if (
      array[props.index].togglebuttonlist[index].name === "Show Location"
    ) {
      setShowLocation(toggle);
    } else if (
      array[props.index].togglebuttonlist[index].name === "Show Period"
    ) {
      setShowPeriod(toggle);
    } else if (
      array[props.index].togglebuttonlist[index].name === "Show Link"
    ) {
      setShowLinks(toggle);
    }
  }
  const [TitleTextHolder, setTitleTextHolder] = useState("");
  const [LocationTextHolder, setLocationTextHolder] = useState("");
  const [UrlTextHolder, setUrlTextHolder] = useState("");
  const [SummaryWorkTextHolder, setSummaryWorkTextHolder] = useState("");
  const [BullotsTextHolder, setBullotsTextHolder] = useState("");
  useEffect(() => {
    if (localStorage.getItem("arrayProject") !== null) {
      setcheckplacehoderBollets(false);
      let value = localStorage.getItem("arrayProject");
      value = JSON.parse(value);
      setTitleTextHolder(value[props.index].value.titleTextHolder);
      setLocationTextHolder(value[props.index].value.locationTextHolder);
      setUrlTextHolder(value[props.index].value.urlTextHolder);
      setSummaryWorkTextHolder(value[props.index].value.SummaryWorkTextHolder);
      setBullotsTextHolder(value[props.index].value.bullotsTextHolder);

      let array = [];
      array = value[props.index].togglebuttonlist;
      array.map((item, index) => {
        if (item.name === "Show Discription") {
          setShowDescription(item.selectedToggleButton);
        } else if (item.name === "Show Bullets") {
          setShowBullets(item.selectedToggleButton);
        } else if (item.name === "Show Location") {
          setShowLocation(item.selectedToggleButton);
        } else if (item.name === "Show Period") {
          setShowPeriod(item.selectedToggleButton);
        } else if (item.name === "Show Link") {
          setShowLinks(item.selectedToggleButton);
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
          <label
            onClick={() => {
              setToggleButtons(false);
              setShowDate(true);
            }}
          >
            <MdDateRange className="ArrangeIcon" />
          </label>
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
            setLinkTextBox("none");
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
              let array = props.list;
              array[props.index].value.titleTextHolder = e.target.value;
              localStorage.setItem("arrayProject", JSON.stringify(array));
              setTitleTextHolder(e.target.value);
            }}
            className="companyTitleExperienceSection"
            placeholder="Project Name"
          />
          <div
            className="outerWraperContainerDateLocationExperienceSection"
            onClick={() => {
              setEnabledFontFormatColor("#38434744");
              setEnabledFontFormatNoDrop("no-drop");
            }}
          >
            <div
              onClick={() => {
                setShowDate(!ShowDate);
              }}
              style={{ display: ShowPeriod ? "flex" : "none" }}
              className="outerWraperDateExperienceSectionDatePeriod"
            >
              <MdDateRange className="dateIcone" />
              <div style={{ display: DislayDatePeriod ? "block" : "none",width:"104px"}}>
                Date Period
              </div>
              <div className="DateFrom">
                {UpdateMonthFrom}
                <div style={{ display: DateSlash ? "block" : "none" }}>/</div>
                {UpdateDate}
                {Ongoing ? (
                  <div className="DateFrom">
                    <div style={{ display: DiplayMinus ? "block" : "none" }}>
                      -
                    </div>
                    <div>{MonthOngoing}</div>
                    <div
                      style={{
                        display: DisplayShashOngoing ? "block" : "none",
                      }}
                    >
                      /
                    </div>
                    <div>{YearOnGoing}</div>
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: BackwordMinusOngoing ? "block" : "none",
                      }}
                    >
                      -
                    </div>
                    Ongoing
                  </div>
                )}
              </div>
            </div>
            {ShowDate && (
              <div>
                <DatePicker
                  date={handleUpdateDate}
                  month={handleUpdateDateMonthFrom}
                  HandleMonthOngoing={HandleMonthOngoing}
                  handleYearOngoing={handleYearOngoing}
                  HandleOngoing={HandleOngoing}
                  setUpdateMonthFrom={setUpdateMonthFrom}
                  UpdateMonthFrom={UpdateMonthFrom}
                  setUpdateDate={setUpdateDate}
                />
                <div
                  className="BackGroundHoverEffectDate"
                  onClick={() => {
                    setShowDate(false);
                  }}
                ></div>
              </div>
            )}
            <div
              style={{ display: ShowLocation ? "flex" : "none" }}
              className="outerWraperDateExperienceSection"
            >
              <MdLocationOn className="dateIcone" />
              <input
                value={LocationTextHolder}
                className="LocationExperienceSection"
                type="text"
                placeholder="Location"
                value={LocationTextHolder}
                onChange={(e) => {
                  setLocationTextHolder(e.target.value);
                  let array = props.list;
                  array[props.index].value.locationTextHolder = e.target.value;
                  localStorage.setItem("arrayProject", JSON.stringify(array));
                }}
              />
            </div>
          </div>
          <div
            style={{ display: ShowLinks ? "flex" : "none" }}
            className="outerWraperDateExperienceSection"
            onClick={() => {
              setEnabledFontFormatColor("#38434744");
              setEnabledFontFormatNoDrop("no-drop");
            }}
          >
            <BiLinkAlt className="dateIcone" />
            <input
              type="text"
              className="URLExperienceSection"
              placeholder="Url"
              value={UrlTextHolder}
              onChange={(e) => {
                setUrlTextHolder(e.target.value);
                let array = props.list;
                array[props.index].value.urlTextHolder = e.target.value;
                localStorage.setItem("arrayProject", JSON.stringify(array));
              }}
            />
          </div>
          <div
            onClick={handleText}
            style={{ display: ShowDescription ? "block" : "none" }}
          >
            {checkplacehodercompanydiscription ? (
              <div>hh</div>
            ) : (
              <div style={{width:WidthLeftRight,marginLeft: "12px"}}><Editor
                className="PreEditor"
                text={SummaryWorkTextHolder}
                onChange={(text) => {
                  let array = props.list;
                  array[props.index].value.SummaryWorkTextHolder = text;
                  localStorage.setItem("arrayProject", JSON.stringify(array));
                  setSummaryWorkTextHolder(text);
                }}
                options={{
                  placeholder: {
                    text: "Short summary of your work",
                    hideOnClick: true,
                  },
                }}
              /></div>
            )}
          </div>
              <div
              style={{width:WidthLeftRight}}>
                <InputBullets
                ShowBullets={ShowBullets}
                handleText={handleText}
                checkplacehoderBollets={checkplacehoderBollets}
                BullotsTextHolder={BullotsTextHolder}
                setBullotsTextHolder={setBullotsTextHolder}
                list={props.list}
                IndexItem={props.index}
                />    
              </div>
        </div>
      </div>
    </>
  );
}
