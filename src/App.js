import Home from "./Components/HomePage";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import AlertTemplate from "react-alert-template-basic";
import { Sections } from "./Components/Section";
import { HiPlusCircle } from "react-icons/hi";
import HomaPageSabSection from "./Components/HomePageSabSection";
import { CgArrangeFront } from "react-icons/cg";
import { BiDownload } from "react-icons/bi";
import Achievements from "./Components/Achivement";
import TechStockSection from "./Components/TechStockSection";
import Projects from "./Components/Projects";
import TrainingCourse from "./Components/TrainingCourse";
import MyTime from "./Components/MyTime";
import Language from "./Components/Language";
import Passions from "./Components/Passions";
import IndustryExperience from "./Components/IndustryExperience";
import FindMeOnline from "./Components/FindMeOnline";
import Summry from "./Components/Summry";
import Strength from "./Components/Strength";
import Volunteering from "./Components/Volunteering";
import ExperienceSection from "./Components/ExperienceSection";
import Education from "./Components/Education";
import ReactToPdf from "react-to-pdf"
import {
  INCREMENTBACKGROUNDCOLORVOLUNTEERING,
  INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE,
  INCREMENTBACKGROUNDCOLORSTRENGTH,
  INCREMENTBACKGROUNDCOLORSUMMARY,
  INCREMENTBACKGROUNDCOLORLANGUAGE,
  INCREMENTBACKGROUNDCOLOFINDMEONLINE,
  INCREMENTBACKGROUNDCOLOMYTIME,
  INCREMENTBACKGROUNDCOLORPROJECT,
  INCREMENTBACKGROUNDCOLORSKILL,
  INCREMENTBACKGROUNDCOLOREXPERIENCE,
  INCREMENTBACKGROUNDCOLORTRAINING,
  INCREMENTBACKGROUNDCOLORPASSION,
  INCREMENTBACKGROUNDCOLOREDUCATION,
  INCREMENTBACKGROUNDCOLORACHIEVEMENT,
} from "./Components/Redux/actions/indux";
function App() {
  const [ToggleRearrangeSection, setToggleRearrangeSection] = useState(null);
  const [ToggleAddNewSection, setToggleAddNewSection] = useState(false);
  const [ToggleAddNewSectionLeft, setToggleAddNewSectionLeft] = useState(false);
  const [ToggleAddNewSectionRight, setToggleAddNewSectionRight] =
    useState(false);
  const [HoverEffect, SetHoverEffect] = useState(null);
  const [Array, setArray] = useState([]);
  const [FlagRight, setFlagRight] = useState(false);
  const [HideButtons, setHideButtons] = useState(false);
  const ref = React.createRef();
  const dispatch = useDispatch();
  const { useRef, } = React;
  const childRef = useRef();
  function HandleSetHoverEffect() {
    SetHoverEffect("rgba(80,77,98,.2)");
  }

  function HandleSections(data) {
    if (data !== undefined && data !== null) {
      if (data === "Achievement") {
        if (FlagRight === true) {
          Array.push({
            name: "Achievement",
            section: <Achievements button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Achievement",
            section: <Achievements button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setArray([...Array]);
        setFlagRight(false);
      } else if (data === "Skill") {
        if (FlagRight === true) {
          Array.push({
            name: "Skill",
            section: <TechStockSection button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Skill",
            section: <TechStockSection button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Project") {
        if (FlagRight === true) {
          Array.push({
            name: "Project",
            section: <Projects button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Project",
            section: <Projects button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Training") {
        if (FlagRight === true) {
          Array.push({
            name: "Training",
            section: <TrainingCourse button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Training",
            section: <TrainingCourse button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "MyTime") {
        if (FlagRight === true) {
          Array.push({
            name: "MyTime",
            section: <MyTime button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "MyTime",
            section: <MyTime button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Langue") {
        if (FlagRight === true) {
          Array.push({
            name: "Langue",
            section: <Language button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Langue",
            section: <Language button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Profesion") {
        if (FlagRight === true) {
          Array.push({
            name: "Profesion",
            section: <Passions button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Profesion",
            section: <Passions button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Indestry") {
        if (FlagRight === true) {
          Array.push({
            name: "Indestry",
            section: <IndustryExperience button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Indestry",
            section: <IndustryExperience button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Find Me") {
        if (FlagRight === true) {
          Array.push({
            name: "Find Me",
            section: <FindMeOnline button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Find Me",
            section: <FindMeOnline button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Summary") {
        if (FlagRight === true) {
          Array.push({
            name: "Summary",
            section: <Summry button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Summary",
            section: <Summry button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Strength") {
        if (FlagRight === true) {
          Array.push({
            name: "Strength",
            section: <Strength button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Strength",
            section: <Strength button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Volunteering") {
        if (FlagRight === true) {
          Array.push({
            name: "Volunteering",
            section: <Volunteering button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Volunteering",
            section: <Volunteering button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Experience") {
        if (FlagRight === true) {
          Array.push({
            name: "Experience",
            section: <ExperienceSection button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Experience",
            section: <ExperienceSection button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      } else if (data === "Education") {
        if (FlagRight === true) {
          Array.push({
            name: "Education",
            section: <Education button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          Array.push({
            name: "Education",
            section: <Education button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setFlagRight(false);
        setArray([...Array]);
      }
      localStorage.setItem("Section", JSON.stringify(Array));
    }
  }

  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.SCALE,
  };
  const types = {
    ERROR: "error",
  };

  function HandleAddNewSection() {
    let temp = [];
    temp = Array;
    if (Array === null && Array === undefined) {
      setToggleAddNewSectionRight(false);
      setToggleAddNewSectionLeft(false);
    } else {
      if (Array.length === 1) {
        temp.map((item, index) => {
          if (item.Left === true) {
            setToggleAddNewSectionLeft(true);
            setToggleAddNewSectionRight(false);
          }
        });
        temp.map((item, index) => {
          if (item.Left === false) {
            setToggleAddNewSectionLeft(false);
            setToggleAddNewSectionRight(true);
          }
        });
      } else {
        let flagRight = true;
        let FlagLeft = true;
        let bothLeft = true;
        let bothRight = true;
        temp.map((item, index) => {
          if (item.Left === false) {
            bothLeft = false;
            flagRight = false;
          } else {
            bothRight = false;
            FlagLeft = false;
          }
        });
        if (bothRight === false && bothLeft === false) {
          setToggleAddNewSectionLeft(true);
          setToggleAddNewSectionRight(true);
        } else {
          if (flagRight === false) {
            setToggleAddNewSectionRight(true);
            setToggleAddNewSectionLeft(false);
          } else {
            if (FlagLeft === false) {
              setToggleAddNewSectionRight(false);
              setToggleAddNewSectionLeft(true);
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    let temp = [];
    temp = Array;
    if (Array === null && Array === undefined) {
      setToggleAddNewSectionRight(false);
      setToggleAddNewSectionLeft(false);
    } else {
      if (Array.length === 1) {
        temp.map((item, index) => {
          if (item.Left === true) {
            setToggleAddNewSectionLeft(true);
            setToggleAddNewSectionRight(false);
          }
        });
        temp.map((item, index) => {
          if (item.Left === false) {
            setToggleAddNewSectionLeft(false);
            setToggleAddNewSectionRight(true);
          }
        });
      } else {
        let flagRight = true;
        let FlagLeft = true;
        let bothLeft = true;
        let bothRight = true;
        temp.map((item, index) => {
          if (item.Left === false) {
            bothLeft = false;
            flagRight = false;
          } else {
            bothRight = false;
            FlagLeft = false;
          }
        });
        if (bothRight === false && bothLeft === false) {
          setToggleAddNewSectionLeft(true);
          setToggleAddNewSectionRight(true);
        } else {
          if (flagRight === false) {
            setToggleAddNewSectionRight(true);
            setToggleAddNewSectionLeft(false);
          } else {
            if (FlagLeft === false) {
              setToggleAddNewSectionRight(false);
              setToggleAddNewSectionLeft(true);
            }
          }
        }
      }
    }

    if (localStorage.getItem("Section") !== null) {
      let value = localStorage.getItem("Section");
      value = JSON.parse(value);
      let temp = value;
      temp.map((item, index) => {
        let section = temp[index].name;
        HandleSections(section);
        HandleAddNewSection();
      });
    }
  }, []);

  function HandleRemoveSection(name) {
    let temp = [];
    temp = Array;
    temp.map((item, index) => {
      if (item.name === name) {
        temp.splice(index, 1);
      }
    });
    setArray([...temp]);
    localStorage.setItem("Section", JSON.stringify(temp));
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideButtons(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, [HideButtons]);

  if (ToggleRearrangeSection === true) {
    return (
      <div>
        <HomaPageSabSection
          setToggleRearrangeSection={setToggleRearrangeSection}
          setArray={setArray}
          Array={Array}
          HandleAddNewSection={HandleAddNewSection}
          HandleRemoveSection={HandleRemoveSection}
        />
      </div>
    );
  } else {
    return (
      <>
        <AlertProvider template={AlertTemplate} {...types} {...options}>
          <div style={{ position: "relative" }} ref={ref}>
            <div className="outerContainerButtons"
            style={{display:HideButtons?"none":"flex"}}
            >
              <div
                className="OuterWraperAddNewSectionButton"
                onClick={() => {
                  setToggleAddNewSection(true);
                }}
              >
                <HiPlusCircle className="RearrangeIcon" />
                Add Section
              </div>
              <div
                className="OuterWraperReArrangeButton"
                onClick={() => {
                  setToggleRearrangeSection(true);
                }}
              >
                <CgArrangeFront className="RearrangeIcon" />
                Rearrange Sections
              </div>
              <ReactToPdf targetRef={ref} filename="div-blue.pdf" scale={5.8}>
        {({toPdf}) => (
            <div
                style={{ display: "flex", gap: "25px" }}
                onClick={() => {
                  setHideButtons(true)
                  dispatch(INCREMENTBACKGROUNDCOLORACHIEVEMENT());
                  dispatch(INCREMENTBACKGROUNDCOLOREDUCATION());
                  dispatch(INCREMENTBACKGROUNDCOLORPASSION());
                  dispatch(INCREMENTBACKGROUNDCOLORTRAINING());
                  dispatch(INCREMENTBACKGROUNDCOLOREXPERIENCE());
                  dispatch(INCREMENTBACKGROUNDCOLORSKILL());
                  dispatch(INCREMENTBACKGROUNDCOLORPROJECT());
                  dispatch(INCREMENTBACKGROUNDCOLOMYTIME());
                  dispatch(INCREMENTBACKGROUNDCOLOFINDMEONLINE());
                  dispatch(INCREMENTBACKGROUNDCOLORLANGUAGE());
                  dispatch(INCREMENTBACKGROUNDCOLORSUMMARY());
                  dispatch(INCREMENTBACKGROUNDCOLORSTRENGTH());
                  dispatch(INCREMENTBACKGROUNDCOLORVOLUNTEERING());
                  dispatch(INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE());
                  childRef.current.getAlert()
                  toPdf()
                }}
              >
                <BiDownload />
                <div className="Download">Download</div>
              </div>
        )}
    </ReactToPdf>
            </div>
            <div style={{ position: "absolute", zIndex: "-2" }}>
              <HomaPageSabSection
                setArray={setArray}
                Array={Array}
                HandleAddNewSection={HandleAddNewSection}
                HandleRemoveSection={HandleRemoveSection}
              />
            </div>
            {ToggleAddNewSection && (
              <div
                className="SetBackGroundAddNewSection"
                onClick={() => {
                  setToggleAddNewSection(false);
                }}
              ></div>
            )}
            <Home
            ref={childRef}
              Array={Array}
              ToggleAddNewSectionRight={ToggleAddNewSectionRight}
              ToggleAddNewSectionLeft={ToggleAddNewSectionLeft}
              setToggleAddNewSection={setToggleAddNewSection}
              setFlagRight={setFlagRight}
              HandleSetHoverEffect={HandleSetHoverEffect}
              HoverEffect={HoverEffect}
              SetHoverEffect={SetHoverEffect}
            />
            {ToggleAddNewSection && (
              <>
                <Sections
                  HandleSections={HandleSections}
                  setToggleAddNewSection={setToggleAddNewSection}
                  HandleAddNewSection={HandleAddNewSection}
                  HandleRemoveSection={HandleRemoveSection}
                />
              </>
            )}
          </div>
        </AlertProvider>
      </>
    );
  }
}

export default App;
