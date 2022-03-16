// import Example from './Example';
import React, { useState, useEffect, useRef, useContext, useImperativeHandle } from "react";
import Header from "./Header";
import { Context } from "../Components/Context/Context";
import AchievementsOuterSection from "./Sections/Achievements/AchievementsOuterSection";
import FindMeOuterSection from "./Sections/FindMe/FindMeOuterSection";
import CustomOuterSection from "./Sections/Custom/CustomOuterSection";
import EducationOuterSection from "./Sections/Education/EducationOuterSection";
import ExperienceOuterSection from "./Sections/Experience/ExperienceOuterSection";
import IndustryExperienceOuterSection from "./Sections/IndustryExperience/IndustryExperienceOuterSection";
import LanguageOuterSection from "./Sections/Language/LanguageOuterSection";
import MyTimeOuterSection from "./Sections/MyTime/MuTimeOuterSection";
import PassionOuterSection from "./Sections/Passion/PassionOuterSection";
import ProjectsOuterSection from "./Sections/Projects/ProjectsOuterSection";
import SkillsOuterSection from "./Sections/Skills/SkillOuterSection";
import StrengthOuterSection from "./Sections/Strength/StrengthOuterSection";
import SummaryOuterSection from "./Sections/Summary/SummaryOuterSection";
import TrainingOuterSection from "./Sections/TrainingCourses/TrainingCoursesOuterSection";
import VolunteeringOuterSection from "./Sections/Volunteering/VolunteeringOuterSection";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const contextData = useContext(Context);
  const { ref1, ref2 } = ref;
  const [displayBackGroundColor, setDisplayBackGroundColor] = useState(false);
  const [ShowLeftSection, setShowLeftSection] = useState(false);
  const [ShowRightSection, setShowRightSection] = useState(false);

  let header = <Header setDisplayBackGroundColor={setDisplayBackGroundColor} HandleBackGroundColor={handleChildClick} />;

  function handleState(toggle) {
    console.log("h", toggle);
  }

  let FindMe = (
    <FindMeOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );
  let Achievements = (
    <AchievementsOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Custom = (
    <CustomOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Education = (
    <EducationOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Experience = (
    <ExperienceOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let IndustryExperience = (
    <IndustryExperienceOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Language = (
    <LanguageOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let MyTime = (
    <MyTimeOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Passion = (
    <PassionOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Project = (
    <ProjectsOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Skill = (
    <SkillsOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Strength = (
    <StrengthOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Summary = (
    <SummaryOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let TrainingCourses = (
    <TrainingOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  let Volunteering = (
    <VolunteeringOuterSection
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      HandleBackGroundColor={handleChildClick}
      HandleRemoveElement={HandleRemoveElement}
      HandleState={props.HandleState}
    />
  );

  const [Resume, setResume] = useState({
    Left: [],
    Right: [],
  });

  const [AlternateResume, setAlternateResume] = useState({
    Left: [],
    Right: [],
  });

  useEffect(() => {
    if (contextData.AddSectionInArray) {
      HandleAddElement(contextData.AddSectionInArray);
      contextData.handleAddSection(null);
    }
  }, [contextData.AddSectionInArray]);

  function handleLRBAddSection() {
    let value = localStorage.getItem("SectionsArray");
    value = JSON.parse(value);
    if (Resume !== null) {
      if (contextData.ToggleTemplate) {
        if (Resume.Right.length === 0 && value.Right.length === 0) {
          setShowRightSection(true);
        }
        if (Resume.Left.length === 0 && value.Left.length === 0) {
          setShowLeftSection(true);
        }
      } else {
        if (Resume.Left.length === 0 && Resume.Right.length === 0) {
          setShowLeftSection(true);
        } else {
          setShowLeftSection(false);
        }
      }
    }
  }

  useEffect(() => {
    handleLRBAddSection();
  });

  useImperativeHandle(ref2, () => ({
    getAlert() {
      HandleBackGroundColor();
    },
  }));

  function HandleBackGroundColor() {
    setDisplayBackGroundColor(false);
    contextData.handleUpdateBachGroundHighLitter();
  }

  function handleParentClick(e) {
    console.log("parent");
    HandleBackGroundColor();
  }

  function handleChildClick(e) {
    e.stopPropagation();
    console.log("child");
  }

  function HandleRemoveElement(data) {
    let value = localStorage.getItem("SectionsArray");
    value = JSON.parse(value);
    if (value !== null) {
      if (Resume.Left.length !== 0) {
        for (let j = 0; j < Resume.Left.length; j++) {
          if (Resume.Left[j].type.name === data) {
            Resume.Left.splice(j, 1);
            value.Left.splice(j, 1);
            break;
          }
        }
        setResume(Resume);
        setAlternateResume(value);
        localStorage.setItem("SectionsArray", JSON.stringify(value));
      }
      if (Resume.Right.length !== 0) {
        for (let i = 0; i < Resume.Right.length; i++) {
          if (Resume.Right[i].type.name === data) {
            Resume.Right.splice(i, 1);
            value.Right.splice(i, 1);
            break;
          }
        }
        setResume(Resume);
        setAlternateResume(value);
        localStorage.setItem("SectionsArray", JSON.stringify(value));
      }
    }
    let DND = localStorage.getItem("DND");
    DND = JSON.parse(DND);
    if (DND !== null) {
      for (let i = 0; i < DND[0].length; i++) {
        if (DND[0][i].id === data) {
          DND[0].splice(i, 1);
          localStorage.setItem("DND", JSON.stringify(DND));
          break;
        }
      }
      for (let i = 0; i < DND[1].length; i++) {
        if (DND[1][i].id === data) {
          DND[1].splice(i, 1);
          localStorage.setItem("DND", JSON.stringify(DND));
          break;
        }
      }
    }
  }

  useEffect(() => {
    if (contextData.RemoveSectionInArray) {
      HandleRemoveElement(contextData.RemoveSectionInArray);
      contextData.HandleRemoveElement(null);
    }
  }, [contextData.RemoveSectionInArray]);

  useEffect(() => {
    let BackImage = localStorage.getItem("BackImage");
    BackImage = JSON.parse(BackImage);
    if (BackImage !== null || BackImage !== undefined) {
      contextData.HandleBackImage(BackImage);
    }
  }, []);

  function HandleAddElement(data) {
    if (data === "AchievementsOuterSection") {
      Resume.Right.push(Achievements);
      AlternateResume.Right.push("Achievements");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "SkillsOuterSection") {
      Resume.Left.push(Skill);
      AlternateResume.Left.push("Skill");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "ProjectsOuterSection") {
      Resume.Right.push(Project);
      AlternateResume.Right.push("Project");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "TrainingOuterSection") {
      Resume.Left.push(TrainingCourses);
      AlternateResume.Left.push("TrainingCourses");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "MyTimeOuterSection") {
      Resume.Right.push(MyTime);
      AlternateResume.Right.push("MyTime");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "LanguageOuterSection") {
      Resume.Left.push(Language);
      AlternateResume.Left.push("Language");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "PassionOuterSection") {
      Resume.Right.push(Passion);
      AlternateResume.Right.push("Passion");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "IndustryExperienceOuterSection") {
      Resume.Left.push(IndustryExperience);
      AlternateResume.Left.push("IndustryExperience");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "FindMeOuterSection") {
      Resume.Right.push(FindMe);
      AlternateResume.Right.push("FindMe");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "SummaryOuterSection") {
      Resume.Left.push(Summary);
      AlternateResume.Left.push("Summary");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "StrengthOuterSection") {
      Resume.Right.push(Strength);
      AlternateResume.Right.push("Strength");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "VolunteeringOuterSection") {
      Resume.Left.push(Volunteering);
      AlternateResume.Left.push("Volunteering");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "ExperienceOuterSection") {
      Resume.Right.push(Experience);
      AlternateResume.Right.push("Experience");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    } else if (data === "EducationOuterSection") {
      Resume.Left.push(Education);
      AlternateResume.Left.push("Education");
      setResume(Resume);
      setAlternateResume(AlternateResume);
      localStorage.setItem("SectionsArray", JSON.stringify(AlternateResume));
    }
  }

  useEffect(() => {
    let value = localStorage.getItem("SectionsArray");
    value = JSON.parse(value);
    if (value !== null) {
      setAlternateResume(value);
      if (value.Left.length !== 0)
        for (let j = 0; j < value.Left.length; j++) {
          if (value.Left[j] === "Achievements") {
            Resume.Left.push(Achievements);
          } else if (value.Left[j] === "Skill") {
            Resume.Left.push(Skill);
          } else if (value.Left[j] === "Project") {
            Resume.Left.push(Project);
          } else if (value.Left[j] === "TrainingCourses") {
            Resume.Left.push(TrainingCourses);
          } else if (value.Left[j] === "MyTime") {
            Resume.Left.push(MyTime);
          } else if (value.Left[j] === "Language") {
            Resume.Left.push(Language);
          } else if (value.Left[j] === "Passion") {
            Resume.Left.push(Passion);
          } else if (value.Left[j] === "IndustryExperience") {
            Resume.Left.push(IndustryExperience);
          } else if (value.Left[j] === "FindMe") {
            Resume.Left.push(FindMe);
          } else if (value.Left[j] === "Summary") {
            Resume.Left.push(Summary);
          } else if (value.Left[j] === "Strength") {
            Resume.Left.push(Strength);
          } else if (value.Left[j] === "Volunteering") {
            Resume.Left.push(Volunteering);
          } else if (value.Left[j] === "Experience") {
            Resume.Left.push(Experience);
          } else if (value.Left[j] === "Education") {
            Resume.Left.push(Education);
          }
        }
      if (value.Right.length !== 0) {
        for (let j = 0; j < value.Right.length; j++) {
          if (value.Right[j] === "Achievements") {
            Resume.Right.push(Achievements);
          } else if (value.Right[j] === "Skill") {
            Resume.Right.push(Skill);
          } else if (value.Right[j] === "Project") {
            Resume.Right.push(Project);
          } else if (value.Right[j] === "TrainingCourses") {
            Resume.Right.push(TrainingCourses);
          } else if (value.Right[j] === "MyTime") {
            Resume.Right.push(MyTime);
          } else if (value.Right[j] === "Language") {
            Resume.Right.push(Language);
          } else if (value.Right[j] === "Passion") {
            Resume.Right.push(Passion);
          } else if (value.Right[j] === "IndustryExperience") {
            Resume.Right.push(IndustryExperience);
          } else if (value.Right[j] === "FindMe") {
            Resume.Right.push(FindMe);
          } else if (value.Right[j] === "Summary") {
            Resume.Right.push(Summary);
          } else if (value.Right[j] === "Strength") {
            Resume.Right.push(Strength);
          } else if (value.Right[j] === "Volunteering") {
            Resume.Right.push(Volunteering);
          } else if (value.Right[j] === "Experience") {
            Resume.Right.push(Experience);
          } else if (value.Right[j] === "Education") {
            Resume.Right.push(Education);
          }
        }
      }
      setResume(Resume);
    }
  }, [contextData.UpdateIndexes]);

  return (
    <div>
      <div style={{ position: "sticky" }} />
      <div className="p-1 ">
        <div ref={ref1}>
          <div>
            <div
              className="outerContainerResume"
              style={{
                backgroundImage: `url(${contextData.BackImage})`,
              }}
            >
              <div style={{ zIndex: "999" }}>
                <div
                  className="HoverBackgroundColor CommonCssClassAbsolutePosition LeftRightTopBottomZero"
                  style={{
                    backgroundColor: "black",
                    opacity: displayBackGroundColor ? "0.8" : "0",
                  }}
                  onClick={() => {
                    HandleBackGroundColor();
                  }}
                />
                <div>{header}</div>
                <section
                  style={{
                    width: "100%",
                    paddingTop: "12px",
                    display: contextData.ToggleTemplate ? "flex" : "block",
                    gap: "20px",
                  }}
                  onClick={handleParentClick}
                >
                  <div
                    style={{
                      width: contextData.ToggleTemplate ? "60%" : "100%",
                    }}
                  >
                    {Resume.Left.map((item, index) => {
                      return (
                        <div key={index}>
                          <div> {item}</div>
                        </div>
                      );
                    })}
                    {ShowLeftSection && (
                      <div className="outerWrapperAddItemsRightSection">
                        <div className="outerWrapperButtonRightSection d-flex justify-content-center">
                          <p
                            className="ButtonAddNewSection FontWeight text-center text-white BorderRadius CommonCssClassCursorPointer"
                            onClick={() => {
                              contextData.HandleBackGroundColorOfModal(true);
                              contextData.HandleShowModal(true);
                              contextData.handleDisplayBackgroundTransparent(false);
                              contextData.HandleToggleModalCSSClass("outerWrapperModalAddSections");
                              contextData.HandleToggleModal("AddSection");
                            }}
                          >
                            Add New Section
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      width: contextData.ToggleTemplate ? "40%" : "100%",
                    }}
                  >
                    {Resume.Right.map((item, index) => {
                      return (
                        <div key={index}>
                          <div> {item}</div>
                        </div>
                      );
                    })}
                    {contextData.ToggleTemplate && (
                      <div>
                        {ShowRightSection && (
                          <div className="outerWrapperAddItemsRightSection">
                            <div className="outerWrapperButtonRightSection d-flex justify-content-center">
                              <p
                                className="ButtonAddNewSection FontWeight text-center text-white BorderRadius CommonCssClassCursorPointer"
                                onClick={() => {
                                  contextData.HandleBackGroundColorOfModal(true);
                                  contextData.HandleShowModal(true);
                                  contextData.handleDisplayBackgroundTransparent(false);
                                  contextData.HandleToggleModalCSSClass("outerWrapperModalAddSections");
                                  contextData.HandleToggleModal("AddSection");
                                }}
                              >
                                Add New Section
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
            {/* <div className="d-flex justify-content-between BottomPageCurve">
              <div className="CurveAtTheBottomOfResumeContent RotateLeftSideCurveAtTheBottomOfResumeContent" />
              <div className="CurveAtTheBottomOfResumeContent RotateRightSideCurveAtTheBottomOfResumeContent" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
});
