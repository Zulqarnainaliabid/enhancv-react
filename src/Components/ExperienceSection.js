import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import Boxfunction from "./ExperienceBox";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT,INCREMENTBACKGROUNDCOLOREXPERIENCE ,EXPERIENCEYES ,INDUXACHIEVEMENT, INDUXEXPERIENCE} from "./Redux/actions/indux";
export default function ExperienceSection(props) {
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [array, setState] = useState([]);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [ToggleArrowDown, setToggleArrowDown] = useState(true);
  const [ToggleArrowUp, setToggleArrowUp] = useState(true);
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  const nullBackgroundcolorPassion = useSelector((state) => state.IncrementBackgroundColorPassion);
  const nullBackgroundcolorTraining = useSelector((state) => state.IncrementBackgroundColorTraining);
  const nullBackgroundcolorAchievement = useSelector((state) => state.IncrementBackgroundColorAchievement);
  const nullBackgroundcolorSkill = useSelector((state) => state.IncrementBackgroundColorSkill);
  const nullBackgroundcolorProject = useSelector((state) => state.IncrementBackgroundColorProject);
  const nullBackgroundcolorMyTime = useSelector((state) => state.IncrementBackgroundColorMyTime);
  const nullBackgroundcolorLanguage = useSelector((state) => state.IncrementBackgroundColorLanguage);
  const nullBackgroundcolorFindMeOnline = useSelector((state) => state.IncrementBackgroundColorFindMeOnline);
  const nullBackgroundcolorSummary = useSelector((state) => state.IncrementBackgroundColorSummary);
  const nullBackgroundcolorStrength = useSelector((state) => state.IncrementBackgroundColorStrength);
  const nullBackgroundcolorVolunteering = useSelector((state) => state.IncrementBackgroundColorVolunteering);
  const nullBackgroundcolorEducation = useSelector((state) => state.IncrementBackgroundColorEducation);
  const nullBackgroundcolorIndustryExperience = useSelector((state) => state.IncrementBackgroundColorIndusteryExperience);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  function HandleCompleteBoarderSelected() {
    dispatch(INCREMENTBACKGROUNDCOLOREXPERIENCE());
    props.button();
    setbackgroundColor("white");
    setShowHeaderButton("flex");
    setborderBottm("1px dashed rgba(0, 0, 0, 0.548)");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }
  function HandleCompleteBoarderUnSelected() {
    setbackgroundColor(null);
    setShowHeaderButton("none");
  }
  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorPassion]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorTraining]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorAchievement]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorSkill]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorProject]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorMyTime]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorLanguage]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorFindMeOnline]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorSummary]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorStrength]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorVolunteering]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorEducation]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorIndustryExperience]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    temp.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [Incrementnull]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [CounterData]);

  function HandlerAddItemInArray() {
    if (array === [] || array.length === 0) {
      setToggleArrowDown(false);
      setToggleArrowUp(false);
    } else {
      setToggleArrowDown(false);
      setToggleArrowUp(true);
    }
    dispatch(INCREMENTBACKGROUNDCOLOREXPERIENCE());
    props.button();
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    array.push({
      selected: false,
      togglebuttonlist: [
        { name: "Show Title", selected: "true" },
        { name: "Show Company Name", selected: "true" },
        { name: "Show Discription", selected: "true" },
        { name: "Show Bullets", selected: "true" },
        { name: "Show Period", selected: "true" },
        { name: "Show Location", selected: "true" },
        { name: "Show Link", selected: "true" },
      ],
      toggleButton: {
        showtitle: true,
        showcompayname: true,
        showdiscription: true,
        showbullets: true,
        showlocation: true,
        showperiod: true,
        showlink: true,
      },
      value: {
        title: "",
        companyname: "",
        location: "",
        date: {
          yearfrom: null,
          monthfrom: null,
          monthto: null,
          ongoing: true,
          yearto: null,
        },
        companydiscription: "",
        bullots: "",
        url: "",
      },
    });
    let temp = [];
    temp = array;
    temp.map((item, index) => {
      item.selected = false;
    });
    let index = temp.length - 1;
    dispatch(INDUXEXPERIENCE(index));
    temp[index].selected = true;
    setState([...temp]);
    localStorage.setItem("arrayExperience", JSON.stringify(temp));
  }
  function HanderDeleteItemInArray() {
   dispatch(EXPERIENCEYES(true));
  }
  useEffect(() => {
    if (localStorage.getItem("arrayExperience") !== null) {
      let value = localStorage.getItem("arrayExperience");
      value = JSON.parse(value)
      value.map((item, index) => {
        value[index].selected = false;
      });
      setState(value);
    }
  }, []);
  function IsActive(Isactive) {
    if (Isactive) {
      setToggleArrowDown(Isactive);
    } else {
      setToggleArrowDown(Isactive);
    }
  }
  function IsActiveUp(Isactive) {
    if (Isactive) {
      setToggleArrowUp(Isactive);
    } else {
      setToggleArrowUp(Isactive);
    }
  }
  return (
    <>
      <div
        className="outerWraperCompleteBox"
        style={{ backgroundColor: backgroundColor }}
        onClick={() => {}}
      >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
        style={{ display: ShowHeaderButton , zIndex: "5"}}
        className="headingOptionBoxRight"
      >
        <div
          onClick={HandlerAddItemInArray}
          className="outerWraperPlusAndNewEntry"
        >
          <FaPlus className="newEntryPlusIcon" />
          <div className="newEntryText">New Entry</div>
        </div>
        <RiDeleteBin6Line
          onClick={HanderDeleteItemInArray}
          className="DeleteIcon"
        />
        <CgArrangeFront className="ArrangeIcon" />
      </div>
      </div>
        <div
          style={{ backgroundColor: backgroundColor }}
          className="HeadingNameBox"
          onClick={HandleCompleteBoarderSelected}
        >
          <input
            type="text"
            className="TexrHolderexperience"
            style={{ borderBottom: "4px solid" }}
            placeholder="EXPERIENCE"
            onClick={() => {
              setUpdateState(UpdateState + 1);
              dispatch(INCREMENT());
            }}
          />
        </div>
        {array &&
          array.map((item, index) => {
            return (
              <Boxfunction
                key={index}
                UpdateState={UpdateState}
                HeaderButton={"flex"}
                data={props.data}
                borderbotm={borderBottm}
                button={props.button}
                item={item}
                IsActive={IsActive}
                IsActiveUp={IsActiveUp}
                ToggleArrowDown={ToggleArrowDown}
                ToggleArrowUp={ToggleArrowUp}
                index={index}
                list={array}
                setList={setState}
                HandleCompleteBoarderUnSelected={
                  HandleCompleteBoarderUnSelected
                }
                HandlerAddItemInArrayfun={HandlerAddItemInArray}
                HanderDeleteItemInArrayfun={HanderDeleteItemInArray}
              />
            );
          })}
      </div>
    </>
  );
}
