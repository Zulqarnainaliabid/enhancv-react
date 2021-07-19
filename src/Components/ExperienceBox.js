import React, { useState, useEffect, useRef } from "react";
import { MdDateRange } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiText } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import SwitchButtons from "./toggleButtons";
import Editor from "react-medium-editor";
import "./HomePage.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");
export default function Boxfunction(props) {
  const inputref = useRef();
  const alert = useAlert();
  const [startDate, setStartDate] = useState(new Date());
  const [EnabledFontFormatColor, setEnabledFontFormatColor] =
    useState("#38434744");
  const [EnabledFontFormatNoDrop, setEnabledFontFormatNoDrop] =
    useState("no-drop");
  const [LinkTextBox, setLinkTextBox] = useState("none");
  const [ShowTitle, setShowTitle] = useState(true);
  const [ShowCompanyName, setShowCompanyName] = useState(true);
  const [ShowDescription, setShowDescription] = useState(true);
  const [ShowBullets, setShowBullets] = useState(true);
  const [ShowLocation, setShowLocation] = useState(true);
  const [ShowPeriod, setShowPeriod] = useState(true);
  const [ShowLinks, setShowLinks] = useState(true);
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UpdateNumber, setUpdateNumber] = useState(0);
  const [Title, setTitle] = useState('');
  const [CompnyName, setCompnyName] = useState('');
  const [Location, setLocation] = useState('');
  const [Url, setUrl] = useState('');
  const [CompanyDiscription, setCompanyDiscription] = useState('');
  const [Bullots, setBullots] = useState('');
  useEffect(() => {
    setToggleButtons(false);
    inputref.current.focus();
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
  function HandleTitle(toggle) {
    if (toggle) {
      setShowTitle(toggle);
      localStorage.setItem("ToggeExTitle", JSON.stringify(toggle));
    } else {
      setShowTitle(toggle);
      localStorage.setItem("ToggeExTitle", JSON.stringify(toggle));
    }
  }
  function HandleCompanyName(toggle) {
    if (toggle) {
      setShowCompanyName(toggle);
      localStorage.setItem("ToggeExCompanyName", JSON.stringify(toggle));
    } else {
      setShowCompanyName(toggle);
      localStorage.setItem("ToggeExCompanyName", JSON.stringify(toggle));
    }
  }
  function HandleDescription(toggle) {
    if (toggle) {
      setShowDescription(toggle);
      localStorage.setItem("ToggeExDescription", JSON.stringify(toggle));
    } else {
      setShowDescription(toggle);
      localStorage.setItem("ToggeExDescription", JSON.stringify(toggle));
    }
  }
  function HandleBullets(toggle) {
    if (toggle) {
      setShowBullets(toggle);
      localStorage.setItem("ToggeExBullots", JSON.stringify(toggle));
    } else {
      setShowBullets(toggle);
      localStorage.setItem("ToggeExBullots", JSON.stringify(toggle));
    }
  }
  function HandleLocation(toggle) {
    if (toggle) {
      setShowLocation(toggle);
      localStorage.setItem("ToggeExLocation", JSON.stringify(toggle));
    } else {
      setShowLocation(toggle);
      localStorage.setItem("ToggeExLocation", JSON.stringify(toggle));
    }
  }
  function HandlePeriod(toggle) {
    if (toggle) {
      setShowPeriod(toggle);
      localStorage.setItem("ToggeExPeriod", JSON.stringify(toggle));
    } else {
      setShowPeriod(toggle);
      localStorage.setItem("ToggeExPeriod", JSON.stringify(toggle));
    }
  }
  function HandleLink(toggle) {
    if (toggle) {
      setShowLinks(toggle);
      localStorage.setItem("ToggExleLink", JSON.stringify(toggle));
    } else {
      setShowLinks(toggle);
      localStorage.setItem("ToggExleLink", JSON.stringify(toggle));
    }
  }
  useEffect(() => {
    if (localStorage.getItem("ToggExleLink") !== null) {
			let value = localStorage.getItem("ToggleExLink")
			setShowLinks(JSON.parse(value));
		}
    if (localStorage.getItem("ToggeExPeriod") !== null) {
			let value = localStorage.getItem("ToggeExPeriod")
			setShowPeriod(JSON.parse(value));
		}
    if (localStorage.getItem("ToggeExLocation") !== null) {
			let value = localStorage.getItem("ToggeExLocation")
			setShowLocation(JSON.parse(value));
		}
    if (localStorage.getItem("ToggeExBullots") !== null) {
			let value = localStorage.getItem("ToggeExBullots")
			setShowBullets(JSON.parse(value));
		}
    if (localStorage.getItem("ToggeExDescription") !== null) {
			let value = localStorage.getItem("ToggeExDescription")
			setShowDescription(JSON.parse(value));
		}
    if (localStorage.getItem("ToggeExCompanyName") !== null) {
			let value = localStorage.getItem("ToggeExCompanyName")
			setShowCompanyName(JSON.parse(value));
		}
    if (localStorage.getItem("ToggeExTitle") !== null) {
			let value = localStorage.getItem("ToggeExTitle")
			setShowTitle(JSON.parse(value));
		}
  }, []);
  let data = [
    { lebel: "Show Title", name: "showtitle", set: HandleTitle },
    {
      lebel: "Show Company Name",
      name: "showcompanyname",
      set: HandleCompanyName,
    },
    {
      lebel: "Show Description",
      name: "showdescription",
      set: HandleDescription,
    },
    { lebel: "Show Bullets", name: "showbullets", set: HandleBullets },
    { lebel: "Show Location", name: "upperlocation", set: HandleLocation },
    { lebel: "Show Period", name: "showperiod", set: HandlePeriod },
    { lebel: "Show Link", name: "showlinks", set: HandleLink },
  ];
  function HandleSetBackGroundColor() {
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
        console.log("re");
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
    if (localStorage.getItem("arrayExperience") !== null) {
			let item = localStorage.getItem("arrayExperience")
      item =JSON.parse(item)
        setTitle(item[props.index].value.title);
        setCompnyName(item[props.index].value.companyname)
        setLocation(item[props.index].value.location)
        setUrl(item[props.index].value.url)
        setCompanyDiscription(item[props.index].value.companydiscription)
        setBullots(item[props.index].value.bullots)
        // consoe.log("date = ",item[props.index].value.date)
        // setStartDate(item[props.index].value.date)
    }
  }, []);
  function handleText() {
    setEnabledFontFormatColor("");
    setEnabledFontFormatNoDrop("pointer");
  }
  return (
    <>
      <div
        style={{ display: props.item.selected ? "flex" : "none" }}
        className="headingOptionUnderBox"
      >
        <div
          className="outerWraperPlusAndNewEntry"
          onClick={() => {
            props.HandlerAddItemInArrayfun();
            inputref.current.focus();
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
        <label for={props.index}>
          <MdDateRange className="ArrangeIcon" />
        </label>
        <RiSettings5Fill
          onClick={() => {
            setToggleButtons(!ToggleButtons);
          }}
          className="ArrangeIcon"
        />
      </div>
      <div style={{ position: "relative" }}>
        {ToggleButtons && (
          <div className="OuterWraperToggleButtonsExperienceSection">
            {data &&
              data.map((item) => {
                return (
                  <div className="InnerWraperToggleButtons">
                    <div className="ToggleButtonsLabel">{item.lebel}</div>
                    <div className="outerWraperSwitchClass">
                      <SwitchButtons name={item.name} function={item.set} />
                    </div>
                  </div>
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
            value={Title}
            onClick={() => {
              setEnabledFontFormatColor("#38434744");
              setEnabledFontFormatNoDrop("no-drop");
            }}
            onChange={(e)=>{
             let array = props.list
             array[props.index].value.title=e.target.value
             setTitle(e.target.value)
             localStorage.setItem("arrayExperience",JSON.stringify(array));
            }}
            className="companyTitleExperienceSection"
            style={{ display: ShowTitle ? "block" : "none"}}
            placeholder="Title"
          />
          <input
            type="text"
            value={CompnyName}
            className="companyNameTitleExperienceSection"
            style={{ display: ShowCompanyName ? "block" : "none" }}
            onClick={() => {
              setEnabledFontFormatColor("#38434744");
              setEnabledFontFormatNoDrop("no-drop");
            }}
            placeholder="Company Name"
            onChange={(e)=>{
              let array = props.list
              array[props.index].value.companyname=e.target.value
              setCompnyName(e.target.value)
              localStorage.setItem("arrayExperience",JSON.stringify(array));
             }}
          />
          <div
            className="outerWraperContainerDateLocationExperienceSection"
            onClick={() => {
              setEnabledFontFormatColor("#38434744");
              setEnabledFontFormatNoDrop("no-drop");
            }}
          >
            <div
              style={{ display: ShowPeriod ? "flex" : "none" }}
              className="outerWraperDateExperienceSection"
            >
              <label for={props.index}>
                <MdDateRange for="date" className="dateIcone" />
              </label>
              <DatePicker
                id={props.index}
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date)
                  let array = props.list
                  array[props.index].value.date=date
                  localStorage.setItem("arrayExperience",JSON.stringify(array));
                }}
                className="datePicker"
              />
              <div>Date</div>
            </div>
            <div
              style={{ display: ShowLocation ? "flex" : "none" }}
              className="outerWraperDateExperienceSection"
            >
              <MdLocationOn className="dateIcone" />
              <input type="text" placeholder="Location" 
              value={Location}
              onChange={(e)=>{
                  let array = props.list
                  array[props.index].value.location=e.target.value
                  setLocation(e.target.value)
                  localStorage.setItem("arrayExperience",JSON.stringify(array));
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
            <input type="text" placeholder="Url" 
            value={Url}
              onChange={(e)=>{
                let array = props.list
                array[props.index].value.url=e.target.value
                setUrl(e.target.value)
                localStorage.setItem("arrayExperience",JSON.stringify(array));
               }}
            />
          </div>
          <div onClick={handleText} style={{display:ShowDescription ? "block" : "none"}}>
          <Editor
            tag="pre"
            text={CompanyDiscription}
            onChange={(text)=>{
                console.log("11 = ",text)
                let array = props.list
                array[props.index].value.companydiscription=text
                setCompanyDiscription(text)
                localStorage.setItem("arrayExperience",JSON.stringify(array));
              }
            }
            options={{
              placeholder: {
                text: "Company Description",
                hideOnClick: true,
              },
            }}
          />
          </div>
          <div className="RichText" style={{ display: "block" }} style={{display:ShowBullets ? "block" : "none"}} ></div>
          <div onClick={handleText} className="EditorText" style={{display:ShowBullets ? "block" : "none"}}>
            <Editor
               text={Bullots}
               onChange={(text)=>{
                   let array = props.list
                   array[props.index].value.bullots=text
                   setBullots(text)
                   localStorage.setItem("arrayExperience",JSON.stringify(array));
                 }
               }
              tag="pre"
              options={{
                placeholder: {
                  text: "What did you want in this role?",
                  hideOnClick: true,
                },
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ display: LinkTextBox }}>
        <div className="outerWraperLinkBox">
          <input
            type="text"
            className="inputFieldLinkBox"
            placeholder="Enter Your Link..."
          />
          <div
            className="outerWraperOKButtonLinkBox"
            onClick={() => {
              setLinkTextBox("none");
            }}
          >
            Ok
          </div>
          <RiDeleteBin6Line
            className="outerWraperDeleteIconLinkBox"
            onClick={() => {
              setLinkTextBox("none");
            }}
          />
        </div>
      </div>
    </>
  );
}
