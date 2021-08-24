import SectionImg1 from "./sections/section1.PNG";
import SectionImg2 from "./sections/section2.PNG";
import SectionImg3 from "./sections/section3.PNG";
import SectionImg4 from "./sections/section4.PNG";
import SectionImg5 from "./sections/section5.PNG";
import SectionImg6 from "./sections/section6.PNG";
import SectionImg7 from "./sections/section7.PNG";
import SectionImg8 from "./sections/section8.PNG";
import SectionImg9 from "./sections/section9.PNG";
import SectionImg10 from "./sections/section10.PNG";
import SectionImg11 from "./sections/section11.PNG";
import SectionImg12 from "./sections/section12.PNG";
import SectionImg13 from "./sections/Section13.PNG";
import SectionImg14 from "./sections/Section14.PNG";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import {ACHIEVEMENTYES,EDUCATIONYES , EXPERIENCEYES , FINDMEONLINEYES , LANGUAGEYES , MYTIMEYES , PASSIONYES , PROJECTYES , STRENGTHYES , SUMMARYYES , TRAININGYES , TECHSTOCKYES , VOLUNTEERINFYES} from "./Redux/actions/indux";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export function Section2ndBox(props) {
  const AchievementYes = useSelector((state) => state.Achievementyes);
  const EducationYes = useSelector((state) => state.EducationYes);
  const ExperienceYes = useSelector((state) => state.ExperienceYes);
  const FindmeOnlineYes = useSelector((state) => state.FindmeOnlineYes);
  const IndustryExperienceYes = useSelector((state) => state.IndustryExperienceYes);
  const LanguageYes = useSelector((state) => state.LanguageYes);
  const MytimeYes = useSelector((state) => state.MytimeYes);
  const PassionYes = useSelector((state) => state.PassionYes);
  const ProjectYes = useSelector((state) => state.ProjectYes);
  const StrengthYes = useSelector((state) => state.StrengthYes);
  const SummaryYes = useSelector((state) => state.SummaryYes);
  const TrainingYes = useSelector((state) => state.TrainingYes);
  const VolunteeringYes = useSelector((state) => state.VolunteeringYes);
  const TechstockYes = useSelector((state) => state.TechstockYes);
  const dispatch = useDispatch();

  function HandleRemoveSubSection() {
    let temp = [];
    temp = props.ArrayLower;
    let tempbox = temp[props.index];
    let namesection = temp[props.index].name
    props.ArrayUper.push(tempbox);
    props.setArrayUper([...props.ArrayUper]);
    localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
    temp.splice(props.index, 1);
    props.setArrayLower([...temp]);
    localStorage.setItem("ArrayLower", JSON.stringify(temp));
    props.HandleRemoveSection(namesection);
  }

  useEffect(() => {
    if(AchievementYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Achievement"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(ACHIEVEMENTYES(false));
  }, [AchievementYes]);

  useEffect(() => {
    if(EducationYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Education"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(EDUCATIONYES(false));
  }, [EducationYes]);

  useEffect(() => {
    if(ExperienceYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Experience"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(EXPERIENCEYES(false));
  }, [ExperienceYes]);

  useEffect(() => {
    if(FindmeOnlineYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Find Me"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(FINDMEONLINEYES(false));
  }, [FindmeOnlineYes]);

  useEffect(() => {
    if(IndustryExperienceYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Indestry"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(FINDMEONLINEYES(false));
  }, [IndustryExperienceYes]);


  useEffect(() => {
    if(LanguageYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Langue"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(LANGUAGEYES(false));
  }, [LanguageYes]);

  useEffect(() => {
    if(MytimeYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="MyTime"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(MYTIMEYES(false));
  }, [MytimeYes]);

  useEffect(() => {
    if(PassionYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Profesion"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(PASSIONYES(false));
  }, [PassionYes]);

  useEffect(() => {
    if(ProjectYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Project"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(PROJECTYES(false));
  }, [ProjectYes]);

  useEffect(() => {
    if(StrengthYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Strength"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(STRENGTHYES(false));
  }, [StrengthYes]);

  useEffect(() => {
    if(SummaryYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Summary"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(SUMMARYYES(false));
  }, [SummaryYes]);

  useEffect(() => {
    if(TrainingYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Training"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(TRAININGYES(false));
  }, [TrainingYes]);

  useEffect(() => {
    if(VolunteeringYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Volunteering"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(VOLUNTEERINFYES(false));
  }, [VolunteeringYes]);

  useEffect(() => {
    if(TechstockYes){
      let temp = [];
      temp = props.ArrayLower;
      temp.map((item,index)=>{
        if(item.name==="Skill"){
         let tempbox = item
          temp.splice(index, 1);
          props.ArrayUper.push(tempbox);
          props.setArrayUper([...props.ArrayUper]);
          localStorage.setItem("ArrayUper", JSON.stringify(props.ArrayUper));
        }
      })
      props.setArrayLower([...temp]);
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }
    dispatch(TECHSTOCKYES(false));
  }, [TechstockYes]);


  return (
    <div style={{ position: "relative" }} className="Section">
      <div
        onMouseEnter={() => {
          let temp = [];
          temp = props.ArrayLower;
          temp[props.index].Hover = true;
          props.setArrayLower([...temp]);
        }}
      >
        <img src={props.item.imag} />
        {props.item.Hover && (
          <div
            onMouseLeave={() => {
              let temp = [];
              temp = props.ArrayLower;
              temp[props.index].Hover = false;
              props.setArrayLower([...temp]);
            }}
            className="HoverImage1"
          >
            <div className="RemoveSection" onClick={HandleRemoveSubSection}>
              {props.item.labelLowerArray}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export function SectionBox(props) {
  function HandlePopEvent() {
    let temp = props.ArrayUper;
    let ArrayLower = props.ArrayLower;
    ArrayLower.push(props.ArrayUper[props.index]);
    props.setArrayLower([...ArrayLower]);
    temp.splice(props.index, 1);
    props.setArrayUper([...temp]);
    localStorage.setItem("ArrayUper", JSON.stringify(temp));
    localStorage.setItem("ArrayLower", JSON.stringify(ArrayLower));
  }
  return (
    <div style={{ position: "relative" }} className="Section">
      <div
        onMouseEnter={() => {
          let temp = [];
          temp = props.ArrayUper;
          temp[props.index].Hover = true;
          props.setArrayUper([...temp]);
        }}
      >
        <img src={props.item.imag} />
        {props.item.Hover && (
          <div
          key={props.item}
            onMouseLeave={() => {
              let temp = [];
              temp = props.ArrayUper;
              temp[props.index].Hover = false;
              props.setArrayUper([...temp]);
            }}
            className="HoverImage1"
          >
            <div
              className="AddtoResume"
              onClick={() => {
                props.funHandleSection(props.item.name);
                props.SetToggleAddnewSection(false);
                props.functionHandleAddNewSection();
                HandlePopEvent();
              }}
            >
              {props.item.label}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const { forwardRef, useRef, useImperativeHandle } = React;
export  const Sections = forwardRef((props, ref) => {

  let data = [
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg1,
      name: "Achievement",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg2,
      name: "Skill",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg3,
      name: "Project",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg4,
      name: "Training",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg5,
      name: "MyTime",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg6,
      name: "Langue",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg7,
      name: "Profesion",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg8,
      name: "Indestry",
    },
    {
      labelLowerArray: "Remove  section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg9,
      name: "Find Me",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg10,
      name: "Summary",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg11,
      name: "Strength",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg12,
      name: "Volunteering",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg13,
      name: "Experience",
    },
    {
      labelLowerArray: "Remove section",
      label: "Add to resume",
      Hover: false,
      imag: SectionImg14,
      name: "Education",
    },
  ];
  const [ArrayUper, setArrayUper] = useState(data);
  const [ArrayLower, setArrayLower] = useState([]);
  const [ShowText, setShowText] = useState("Show Used Sections");
  const [ShowTextLowerIcon, setShowTextLowerIcon] = useState(
    <MdKeyboardArrowDown />
  );
  const [Toggle, setToggle] = useState(false);
  const [MidButton, setMidButton] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("ArrayUper") !== null) {
      let value = localStorage.getItem("ArrayUper");
      value = JSON.parse(value);
      setArrayUper(value);
    }
    if (localStorage.getItem("ArrayLower") !== null) {
      let value = localStorage.getItem("ArrayLower");
      value = JSON.parse(value);
      setArrayLower(value);
    }
    if (ArrayLower.length === 0) {
      setMidButton(false);
    }
    {
      setMidButton(true);
    }
  }, []);

 
  useImperativeHandle(ref, () => ({
     HandleRemoveSectionRearrange(name){
      let temp = [];
      temp = ArrayLower;
      temp.map((item,index)=>{
        if(item.name===name){
          let name = item;
          temp.splice(index,1)
          setArrayLower(temp)
          ArrayUper.push(name)
          setArrayUper([...ArrayUper])
        }
      })
      localStorage.setItem("ArrayUper", JSON.stringify(ArrayUper));
      localStorage.setItem("ArrayLower", JSON.stringify(temp));
    }

  }));
  return (
    <>
      <div className="outerContainerSection">
        <div className="HeadingSection">Add new section</div>
        <div className="subHeadingSection">
          Click on a section to add it to your resume
        </div>
        <div className="outerWraperSection">
          {ArrayUper.map((item, index) => {
            return (
              <SectionBox
                key={index}
                index={index}
                item={item}
                ArrayLower={ArrayLower}
                ArrayUper={ArrayUper}
                setArrayUper={setArrayUper}
                setArrayLower={setArrayLower}
                funHandleSection={props.HandleSections}
                SetToggleAddnewSection={props.setToggleAddNewSection}
                functionHandleAddNewSection={props.HandleAddNewSection}
              />
            );
          })}
        </div>
        <div className="outerWraperLowerSection" style={{ display: "block" }}>
          <div
            className="outerWraperMidButtons"
            style={{ display: MidButton ? "flex" : "none" }}
            onClick={() => {
              setToggle(!Toggle);
              if (Toggle) {
                setShowText("Show Used Section");
                setShowTextLowerIcon(<MdKeyboardArrowDown />);
              } else {
                setShowText("Hide Used Section");
                setShowTextLowerIcon(<MdKeyboardArrowUp />);
              }
            }}
          >
            <div className="MidButtons">{ShowText}</div>
            <div className="UperAwwor">{ShowTextLowerIcon}</div>
          </div>
          <div
            className="outerWraperSectionmidbuttons"
            style={{ display: Toggle ? "flex" : "none" }}
          >
            {ArrayLower &&
              ArrayLower.map((item, index) => {
                return (
                  <Section2ndBox
                    key={index}
                    item={item}
                    ArrayLower={ArrayLower}
                    setArrayLower={setArrayLower}
                    setArrayUper={setArrayUper}
                    ArrayUper={ArrayUper}
                    item={item}
                    index={index}
                    HandleRemoveSection={props.HandleRemoveSection}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
});
