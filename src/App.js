import Home from "./Components/HomePage";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Education from "./Components/Education";
import Loader from "./Components/Loader";
import ReactToPdf from "react-to-pdf";
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
  TOGGLEREARRANGEBUTTONS,
  ACHIEVEMENTYES,
  TOGGLELEFT,
} from "./Components/Redux/actions/indux";
function App() {
  const [ToggleRearrangeSection, setToggleRearrangeSection] = useState(null);
  const [ToggleAddNewSection, setToggleAddNewSection] = useState(false);
  const [ToggleAddNewSectionLeft, setToggleAddNewSectionLeft] = useState(false);
  const [ToggleAddNewSectionRight, setToggleAddNewSectionRight] =
    useState(false);
  const [HoverEffect, SetHoverEffect] = useState(null);
  const [Array, setArray] = useState([]);
  const [HideButtons, setHideButtons] = useState(false);
  const ref = React.createRef();
  const dispatch = useDispatch();
  const { useRef } = React;
  const childRef = useRef();
  const Achievementyes = useSelector((state) => state.Achievementyes);
  const EducationYes = useSelector((state) => state.EducationYes);
  const ExperienceYes = useSelector((state) => state.ExperienceYes);
  const FindmeOnlineYes = useSelector((state) => state.FindmeOnlineYes);
  const IndustryExperienceYes = useSelector(
    (state) => state.IndustryExperienceYes
  );
  const LanguageYes = useSelector((state) => state.LanguageYes);
  const MytimeYes = useSelector((state) => state.MytimeYes);
  const PassionYes = useSelector((state) => state.PassionYes);

  const ProjectYes = useSelector((state) => state.ProjectYes);
  const StrengthYes = useSelector((state) => state.StrengthYes);
  const SummaryYes = useSelector((state) => state.SummaryYes);
  const TrainingYes = useSelector((state) => state.TrainingYes);
  const VolunteeringYes = useSelector((state) => state.VolunteeringYes);
  const TechstockYes = useSelector((state) => state.TechstockYes);
  const ToggleLeft = useSelector((state) => state.ToggleLeft);
  const ToggleRearrangebuttons = useSelector((state) => state.ToggleRearrangebuttons);
  
  useEffect(() => {
    if (Achievementyes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Achievement") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [Achievementyes]);

  useEffect(() => {
    if (EducationYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Education") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [EducationYes]);

  useEffect(() => {
    if (ExperienceYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Experience") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [ExperienceYes]);

  useEffect(() => {
    if (FindmeOnlineYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Find Me") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [FindmeOnlineYes]);

  useEffect(() => {
    if (IndustryExperienceYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Indestry") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [IndustryExperienceYes]);

  useEffect(() => {
    if (LanguageYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Langue") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [LanguageYes]);

  useEffect(() => {
    if (MytimeYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "MyTime") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [MytimeYes]);

  useEffect(() => {
    if (PassionYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Profesion") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [PassionYes]);

  useEffect(() => {
    if (ProjectYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Project") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [ProjectYes]);

  useEffect(() => {
    if (StrengthYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Strength") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [StrengthYes]);

  useEffect(() => {
    if (SummaryYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Summary") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [SummaryYes]);

  useEffect(() => {
    if (TrainingYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Training") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [TrainingYes]);

  useEffect(() => {
    if (VolunteeringYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Volunteering") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [VolunteeringYes]);

  useEffect(() => {
    if (TechstockYes) {
      let temp = [];
      temp = Array;
      temp.map((item, index) => {
        if (item.name === "Skill") {
          temp.splice(index, 1);
        }
      });
      setArray([...temp]);
      localStorage.setItem("Section", JSON.stringify(temp));
      HandleAddNewSection();
    }
  }, [TechstockYes]);

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

  function HandleSections(data,toggle) {
    if (data !== undefined && data !== null) {
      if (data === "Achievement") {
        if (!toggle) {
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
      } else if (data === "Skill") {
        console.log("check it",ToggleLeft)
        if (!toggle) {
          console.log("yes.....")
          Array.push({
            name: "Skill",
            section: <TechStockSection button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: false,
          });
          HandleAddNewSection();
        } else {
          console.log("yes.2 ")
          Array.push({
            name: "Skill",
            section: <TechStockSection button={HandleSetHoverEffect} />,
            margen: "",
            BoxShedow: "",
            Left: true,
          });
        }
        setArray([...Array]);
      } else if (data === "Project") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Training") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "MyTime") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Langue") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Profesion") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Indestry") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Find Me") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Summary") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Strength") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Volunteering") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Experience") {
        if (!toggle) {
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
        setArray([...Array]);
      } else if (data === "Education") {
        if (!toggle) {
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
    if (Array === null || Array === undefined || Array.length === 0) {
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
    if (Array === null || Array === undefined || Array.length === 0) {
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
        if (temp[index].Left === false) {
          HandleSections(section,temp[index].Left);
          HandleAddNewSection();
        } else {
          HandleSections(section,temp[index].Left);
          HandleAddNewSection();
        }
      });
    }
  }, []);
 
  function HandleSetHoverEffect() {
    SetHoverEffect("rgba(80,77,98,.2)");
  }
  function handlePdf(topdf) {
    const timer = setTimeout(() => {
      topdf();
    }, 1000);
    return () => clearTimeout(timer);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideButtons(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [HideButtons]);

  useEffect(() => {
    if(ToggleRearrangebuttons){
      setToggleRearrangeSection(true);
    }
    dispatch(TOGGLEREARRANGEBUTTONS(false));
  }, [ToggleRearrangebuttons]);
 
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
            <div
              className="outerContainerButtons"
              style={{ display: HideButtons ? "none" : "flex" }}
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
              <ReactToPdf
                targetRef={ref}
                filename="div-blue.pdf"
                x={0.5}
                y={0.5}
                scale={0.58}
              >
                {({ toPdf }) => (
                  <div
                    style={{ display: "flex", gap: "25px" }}
                    onClick={() => {
                      setHideButtons(true);
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
                      childRef.current.getAlert();
                      handlePdf(toPdf);
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
