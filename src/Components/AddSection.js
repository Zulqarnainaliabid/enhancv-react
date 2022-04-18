import React, {useState, useContext, useEffect} from 'react';
import {Context} from './Context/Context';

import Achievements from './SectionImages/Achievements.png';
import Education from './SectionImages/Education.png';
import Experience from './SectionImages/Experience.png';
import findme from './SectionImages/findme.png';
import language from './SectionImages/language.png';
import passion from './SectionImages/passion.png';
import project from './SectionImages/project.png';
import skill from './SectionImages/skill.png';
import strength from './SectionImages/strength.png';
import summary from './SectionImages/summary.png';
import time from './SectionImages/time.png';
import training from './SectionImages/training.png';
import volunteering from './SectionImages/volunteering.png';
import industry from './SectionImages/industry.png';

import {MdHeight, MdKeyboardArrowDown} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
export function Section2ndBox (props) {
  function HandleRemoveSubSection () {
    let temp = [];
    temp = props.ArrayLower;
    let tempbox = temp[props.index];
    let namesection = temp[props.index].name;

    props.ArrayUper.push (tempbox);
    props.setArrayUper ([...props.ArrayUper]);
    localStorage.setItem ('ArrayUper', JSON.stringify (props.ArrayUper));
    temp.splice (props.index, 1);
    props.setArrayLower ([...temp]);
    localStorage.setItem ('ArrayLower', JSON.stringify (temp));
    props.HandleRemoveSection (namesection);
  }

  return (
    <div style={{position: 'relative'}} className="Section">
      <div
        onMouseEnter={() => {
          let temp = [];
          temp = props.ArrayLower;
          temp[props.index].Hover = true;
          props.setArrayLower ([...temp]);
        }}
      >
          <img src={props.item.imag} />
        {props.item.Hover &&
          <div
            onMouseLeave={() => {
              let temp = [];
              temp = props.ArrayLower;
              temp[props.index].Hover = false;
              props.setArrayLower ([...temp]);
            }}
            className="HoverImage1"
          >
            <div className="RemoveSection" onClick={HandleRemoveSubSection}>
              {props.item.labelLowerArray}
          
            </div>
          </div>}
      </div>
    </div>
  );
}

export function SectionBox (props) {

  console.log ('helo12', props.item.imag);

  const contextData = useContext (Context);
  function HandlePopEvent () {
    let temp = props.ArrayUper;
    let ArrayLower = props.ArrayLower;
    ArrayLower.push (props.ArrayUper[props.index]);
    props.setArrayLower ([...ArrayLower]);
    temp.splice (props.index, 1);
    props.setArrayUper ([...temp]);
    localStorage.setItem ('ArrayUper', JSON.stringify (temp));
    localStorage.setItem ('ArrayLower', JSON.stringify (ArrayLower));
  }
  return (
    <div style={{position: 'relative'}} className="Section">
      <div
        onMouseEnter={() => {
          let temp = [];
          temp = props.ArrayUper;
          temp[props.index].Hover = true;
          props.setArrayUper ([...temp]);
        }}
      >
        <div style={{width: '282px'}}>
          <img src={props.item.imag} style={{width: '100%',height:"130px"}} alt="Logo" />
          <p className='text-center' style={{fontSize:"18px",fontWeight:"bolder"}}>{props.item.labelName}</p>
        </div>
        {props.item.Hover &&
          <div
            key={props.item}
            onMouseLeave={() => {
              let temp = [];
              temp = props.ArrayUper;
              temp[props.index].Hover = false;
              props.setArrayUper ([...temp]);
            }}
            className="HoverImage1"
          >
            <div
              className="AddtoResume"
              onClick={() => {
                if (true) {
                  props.funHandleSection (props.item.name, true);
                } else {
                  props.funHandleSection (props.item.name, false);
                }
                props.SetToggleAddnewSection (false);
                HandlePopEvent ();
                console.log ('ji', props.item.name);
                contextData.HandleAddSectionName (props.item.name);
                contextData.handleAddSection (props.item.name);
              }}
            >
              {props.item.label}
            </div>
          </div>}
      </div>
    </div>
  );
}

export default function AddSection (props) {
  const contextData = useContext (Context);

  let data = [
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: Achievements,
      name: 'AchievementsOuterSection',
      labelName:"Achievements",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: skill,
      name: 'SkillsOuterSection',
      labelName:"skill",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: project,
      name: 'ProjectsOuterSection',
      labelName:"Project",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: training,
      name: 'TrainingOuterSection',
      labelName:"Training",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: time,
      name: 'MyTimeOuterSection',
      labelName:"My Time",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: language,
      name: 'LanguageOuterSection',
      labelName:"Language",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: passion,
      name: 'PassionOuterSection',
      labelName:"Passion",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: industry,
      name: 'IndustryExperienceOuterSection',
      labelName:"Industry",
    },
    {
      labelLowerArray: 'Remove  section',
      label: 'Add to resume',
      Hover: false,
      imag: findme,
      name: 'FindMeOuterSection',
      labelName:"FindMe",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: summary,
      name: 'SummaryOuterSection',
      labelName:"Summary",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: strength,
      name: 'StrengthOuterSection',
      labelName:"Strength",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: volunteering,
      name: 'VolunteeringOuterSection',
      labelName:"Volunteering",
    },

    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: Experience,
      name: 'ExperienceOuterSection',
      labelName:"Experience",
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: Education,
      name: 'EducationOuterSection',
      labelName:"Education",
    },
  ];

  const [ArrayUper, setArrayUper] = useState (data);
  const [ArrayLower, setArrayLower] = useState ([]);
  const [ShowText, setShowText] = useState ('Show Used Sections');
  const [ShowTextLowerIcon, setShowTextLowerIcon] = useState (
    <MdKeyboardArrowDown />
  );
  const [Toggle, setToggle] = useState (false);
  const [MidButton, setMidButton] = useState (true);
  useEffect (() => {
    if (localStorage.getItem ('ArrayUper') !== null) {
      let value = localStorage.getItem ('ArrayUper');
      value = JSON.parse (value);
      setArrayUper (value);
    }
    if (localStorage.getItem ('ArrayLower') !== null) {
      let value = localStorage.getItem ('ArrayLower');
      value = JSON.parse (value);
      setArrayLower (value);
    }
    if (ArrayLower.length === 0) {
      setMidButton (false);
    }
    {
      setMidButton (true);
    }
  }, []);
  function HandleRemoveSection (name) {
    contextData.HandleRemoveElement (name);
  }

  return (
    <div>
      <div className="outerContainerSection">
        <div className="HeadingSection">Add new section</div>
        <div className="subHeadingSection">
          Click on a section to add it to your resume
        </div>
        <div className="outerWraperSection">
          <div className="d-flex flex-wrap justify-content-center" style={{gap:"25px"}}>
            {ArrayUper.map ((item, index) => {
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
                />
              );
            })}
          </div>
          <div className="outerWraperLowerSection" style={{display: 'block'}}>
            <div
              className="outerWraperMidButtons"
              style={{display: MidButton ? 'flex' : 'none'}}
              onClick={() => {
                setToggle (!Toggle);
                if (Toggle) {
                  setShowText ('Show Used Section');
                  setShowTextLowerIcon (<MdKeyboardArrowDown />);
                } else {
                  setShowText ('Hide Used Section');
                  setShowTextLowerIcon (<MdKeyboardArrowUp />);
                }
              }}
            >
              <div className="MidButtons">{ShowText}</div>
              <div className="UperAwwor">{ShowTextLowerIcon}</div>
            </div>
            <div
              className="flex-wrap justify-content-center"
              style={{display: Toggle ? 'flex' : 'none'}}
            >
              {ArrayLower &&
                ArrayLower.map ((item, index) => {
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
                      HandleRemoveSection={HandleRemoveSection}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
