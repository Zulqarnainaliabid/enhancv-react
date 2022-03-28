import React, {useState, useContext, useEffect} from 'react';
import {Context} from './Context/Context';
import SectionImg1 from './SectionImages/section1.PNG';
import SectionImg2 from './SectionImages/section2.PNG';
import SectionImg3 from './SectionImages/section3.PNG';
import SectionImg4 from './SectionImages/section4.PNG';
import SectionImg5 from './SectionImages/section5.PNG';
import SectionImg6 from './SectionImages/section6.PNG';
import SectionImg7 from './SectionImages/section7.PNG';
import SectionImg8 from './SectionImages/section8.PNG';
import SectionImg9 from './SectionImages/section9.PNG';
import SectionImg10 from './SectionImages/section10.PNG';
import SectionImg11 from './SectionImages/section11.PNG';
import SectionImg12 from './SectionImages/section12.PNG';
import SectionImg13 from './SectionImages/Section13.PNG';
import SectionImg14 from './SectionImages/Section14.PNG';
import {MdKeyboardArrowDown} from 'react-icons/md';
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
        <img src={props.item.imag} />
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
                contextData.HandleAddSectionName(props.item.name)
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
      imag: SectionImg1,
      name: 'AchievementsOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg2,
      name: 'SkillsOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg3,
      name: 'ProjectsOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg4,
      name: 'TrainingOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg5,
      name: 'MyTimeOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg6,
      name: 'LanguageOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg7,
      name: 'PassionOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg8,
      name: 'IndustryExperienceOuterSection',
    },
    {
      labelLowerArray: 'Remove  section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg9,
      name: 'FindMeOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg10,
      name: 'SummaryOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg11,
      name: 'StrengthOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg12,
      name: 'VolunteeringOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg13,
      name: 'ExperienceOuterSection',
    },
    {
      labelLowerArray: 'Remove section',
      label: 'Add to resume',
      Hover: false,
      imag: SectionImg14,
      name: 'EducationOuterSection',
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
          <div className="d-flex flex-wrap justify-content-center">
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
