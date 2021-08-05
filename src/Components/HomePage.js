import React from "react";
import "./HomePage.css";
import img from "./Backgroundimg/backgroundimg.png";
import Header from "../Components/usernamePAge";
import ExperienceSection from "./ExperienceSection";
import TechStockSection from "./TechStockSection";
import { useState } from "react";
import Achievements from "./Achivement";
import Education from "./Education";
import FindMeOnline from "./FindMeOnline";
import IndustryExperience from "./IndustryExperience";
import Language from "./Language";
import MyTime from "./MyTime";
import Volunteering from './Volunteering'
import Passions from "./Passions";
import Summry from "./Summry";
import Strength from './Strength'
import TrainingCourse from "./TrainingCourse";
import Projects from "./Projects";
import Sections from "./Section";
export default function Home() {
  const [HoverEffect, SetHoverEffect] = useState(null);
  const [True, SetTrue] = useState(null);
  const [ToggleSection, setToggleSection] = useState(false);
  const [RightSection, setRightSection] = useState(false);
  const [LeftSection, setLeftSection] = useState(false);
  const [Experience, setExperience] = useState(false);
  const [achievement, setachievement] = useState(false);
  
  const [project, setproject] = useState(false);
  const [passion, setpassion] = useState(false);
  const [findmeonline, setfindmeonline] = useState(false);
  const [volunteering, setvolunteering] = useState(false);
  const [industryExperience, setindustryExperience] = useState(false);
  
  const [LeftCount, setLeftCount] = useState(null);
  
  const [RightCount, setRightCount] = useState(null);
  function HandleSetHoverEffect() {
    SetHoverEffect("rgba(80,77,98,.2)");
  }
  function HandleHoverEffect() {
    SetHoverEffect(null);
    SetTrue(True + 1);
  }
  function HandleSection() {
    setRightSection(true);
    setToggleSection(false);
  }
  function HandleLeftSection() {
    setLeftSection(true);
    setToggleSection(false);
  }
  const data = [{ name: "Achievement" }, { name: "Achievement" }];
  return (
    <div className="outerContainter">
      <div
        className="InnerContainer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
        }}
      >
        <Header button={HandleSetHoverEffect} data={True} />
        <div className="outerWraperTwoSections">
          {RightSection ? (
            <div className="SectionRight">
              <div style={{marginBottom:"12px"}}>
             {Experience &&  <ExperienceSection button={HandleSetHoverEffect} data={True}/>}
               </div>
               <div style={{marginBottom:"12px"}}>
             {achievement &&  <Achievements button={HandleSetHoverEffect}  data={True} />}
               </div>
               <div style={{marginBottom:"12px"}}>
              {project && <Projects button={HandleSetHoverEffect}  data={True} />}
               </div>
               <div style={{marginBottom:"12px"}}>
              {passion && <Passions button={HandleSetHoverEffect}  data={True} />}
               </div>
               <div style={{marginBottom:"12px"}}>
              {findmeonline && <FindMeOnline button={HandleSetHoverEffect}  data={True} />}
               </div>
               <div style={{marginBottom:"12px"}}>
             {volunteering &&  <Volunteering button={HandleSetHoverEffect} data={True}/> }
               </div>
               <div style={{marginBottom:"12px"}}>
              {industryExperience && <IndustryExperience button={HandleSetHoverEffect}  data={True} />}
               </div>
                </div>
          ) : (
            <div
              className="FirstSection"
              onClick={() => {
                setToggleSection(true);
                console.log("Right");
                setRightCount("Right")
              }}
            >
              <div className="AddnewSection">Add new section</div>
            </div>
          )}
          {LeftSection ? (
            <div className="SectionLeft">
               <div style={{marginBottom:"12px"}}>
                <Education button={HandleSetHoverEffect}  data={True} />
                </div>
                <div style={{marginBottom:"12px"}}>
                <TechStockSection  button={HandleSetHoverEffect}  data={True}/>
                </div>
                <div style={{marginBottom:"12px"}}>
                <TrainingCourse button={HandleSetHoverEffect}  data={True} />
                </div>
                <div style={{marginBottom:"12px"}}>
                <Summry button={HandleSetHoverEffect}  data={True} />  
                </div>
                <div style={{marginBottom:"12px"}}>
                <Strength button={HandleSetHoverEffect}  data={True} />  
                </div>
                <div style={{marginBottom:"12px"}}>
                <Language button={HandleSetHoverEffect}  data={True} />
                </div>
                <div style={{marginBottom:"12px"}}>
                <MyTime button={HandleSetHoverEffect}  data={True} />
                </div>
                </div>
          ) : (
            <div
              className="SecondSection"
              onClick={() => {
                setToggleSection(true);
              }}
            >
              <div
                className="AddnewSection"
                onClick={() => {
                  console.log("left");
                  setLeftCount("left")
                }}
              >
                Add new section
              </div>
            </div>
          )}
        </div>
        {ToggleSection && (
          <>
            <Sections HandleSection={HandleSection} 
            HandleLeftSection={HandleLeftSection}
            setExperience={setExperience}
            setachievement={setachievement}
            setproject={setproject}
            setpassion={setpassion}
            setfindmeonline={setfindmeonline}
            setvolunteering={setvolunteering}
            setindustryExperience={setindustryExperience}
            LeftCount={LeftCount}
            RightCount={RightCount}
            />
            <div
              onClick={() => {
                setToggleSection(false);
              }}
              className="HoverBackground"
            ></div>
          </>
        )}
        <div className="OuterWraperSection"></div>
        <div
          onClick={HandleHoverEffect}
          style={{
            position: "absolute",
            backgroundColor: HoverEffect,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 0,
          }}
        ></div>
      </div>
    </div>
  );
}
