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
import React, { useEffect } from "react";
import HomaPageSabSection from './HomePageSabSection'
import { useState } from "react";
export function Section2ndBox(props) {

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
            <div className="AddtoResume" onClick={HandleRemoveSubSection}>
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
      labelLowerArray: "Remove Achievement resume",
      label: "Add Achievement resume",
      Hover: false,
      imag: SectionImg1,
      name: "Achievement",
    },
    {
      labelLowerArray: "Remove to skill resume",
      label: "Add to skill resume",
      Hover: false,
      imag: SectionImg2,
      name: "Skill",
    },
    {
      labelLowerArray: "Remove project resume",
      label: "Add to project resume",
      Hover: false,
      imag: SectionImg3,
      name: "Project",
    },
    {
      labelLowerArray: "Remove training resume",
      label: "Add to training resume",
      Hover: false,
      imag: SectionImg4,
      name: "Training",
    },
    {
      labelLowerArray: "Remove mytime resume",
      label: "Add to mytime resume",
      Hover: false,
      imag: SectionImg5,
      name: "MyTime",
    },
    {
      labelLowerArray: "Remove language resume",
      label: "Add to language resume",
      Hover: false,
      imag: SectionImg6,
      name: "Langue",
    },
    {
      labelLowerArray: "Remove profesion resume",
      label: "Add to profesion resume",
      Hover: false,
      imag: SectionImg7,
      name: "Profesion",
    },
    {
      labelLowerArray: "Remove industry resume",
      label: "Add to industry resume",
      Hover: false,
      imag: SectionImg8,
      name: "Indestry",
    },
    {
      labelLowerArray: "Remove  find me online  resume",
      label: "Add to find me online resume",
      Hover: false,
      imag: SectionImg9,
      name: "Find Me",
    },
    {
      labelLowerArray: "Remove summary resume",
      label: "Add to summary resume",
      Hover: false,
      imag: SectionImg10,
      name: "Summary",
    },
    {
      labelLowerArray: "Remove strength resume",
      label: "Add to strength resume",
      Hover: false,
      imag: SectionImg11,
      name: "Strength",
    },
    {
      labelLowerArray: "Remove volunterying resume",
      label: "Add to volunterying resume",
      Hover: false,
      imag: SectionImg12,
      name: "Volunteering",
    },
    {
      labelLowerArray: "Remove Experience resume",
      label: "Add to Experience resume",
      Hover: false,
      imag: SectionImg13,
      name: "Experience",
    },
    {
      labelLowerArray: "Remove Education resume",
      label: "Add to Education resume",
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
       console.log("name = =p",name)
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




// export default function Sections(props) {
//   let data = [
//     {
//       labelLowerArray: "Remove Achievement resume",
//       label: "Add Achievement resume",
//       Hover: false,
//       imag: SectionImg1,
//       name: "Achievement",
//     },
//     {
//       labelLowerArray: "Remove to skill resume",
//       label: "Add to skill resume",
//       Hover: false,
//       imag: SectionImg2,
//       name: "Skill",
//     },
//     {
//       labelLowerArray: "Remove project resume",
//       label: "Add to project resume",
//       Hover: false,
//       imag: SectionImg3,
//       name: "Project",
//     },
//     {
//       labelLowerArray: "Remove training resume",
//       label: "Add to training resume",
//       Hover: false,
//       imag: SectionImg4,
//       name: "Training",
//     },
//     {
//       labelLowerArray: "Remove mytime resume",
//       label: "Add to mytime resume",
//       Hover: false,
//       imag: SectionImg5,
//       name: "MyTime",
//     },
//     {
//       labelLowerArray: "Remove language resume",
//       label: "Add to language resume",
//       Hover: false,
//       imag: SectionImg6,
//       name: "Langue",
//     },
//     {
//       labelLowerArray: "Remove profesion resume",
//       label: "Add to profesion resume",
//       Hover: false,
//       imag: SectionImg7,
//       name: "Profesion",
//     },
//     {
//       labelLowerArray: "Remove industry resume",
//       label: "Add to industry resume",
//       Hover: false,
//       imag: SectionImg8,
//       name: "Indestry",
//     },
//     {
//       labelLowerArray: "Remove  find me online  resume",
//       label: "Add to find me online resume",
//       Hover: false,
//       imag: SectionImg9,
//       name: "Find Me",
//     },
//     {
//       labelLowerArray: "Remove summary resume",
//       label: "Add to summary resume",
//       Hover: false,
//       imag: SectionImg10,
//       name: "Summary",
//     },
//     {
//       labelLowerArray: "Remove strength resume",
//       label: "Add to strength resume",
//       Hover: false,
//       imag: SectionImg11,
//       name: "Strength",
//     },
//     {
//       labelLowerArray: "Remove volunterying resume",
//       label: "Add to volunterying resume",
//       Hover: false,
//       imag: SectionImg12,
//       name: "Volunteering",
//     },
//     {
//       labelLowerArray: "Remove Experience resume",
//       label: "Add to Experience resume",
//       Hover: false,
//       imag: SectionImg13,
//       name: "Experience",
//     },
//     {
//       labelLowerArray: "Remove Education resume",
//       label: "Add to Education resume",
//       Hover: false,
//       imag: SectionImg14,
//       name: "Education",
//     },
//   ];
//   const [ArrayUper, setArrayUper] = useState(data);
//   const [ArrayLower, setArrayLower] = useState([]);
//   const [ShowText, setShowText] = useState("Show Used Sections");
//   const [ShowTextLowerIcon, setShowTextLowerIcon] = useState(
//     <MdKeyboardArrowDown />
//   );
//   const [Toggle, setToggle] = useState(false);
//   const [MidButton, setMidButton] = useState(true);
//   useEffect(() => {
//     if (localStorage.getItem("ArrayUper") !== null) {
//       let value = localStorage.getItem("ArrayUper");
//       value = JSON.parse(value);
//       setArrayUper(value);
//     }
//     if (localStorage.getItem("ArrayLower") !== null) {
//       let value = localStorage.getItem("ArrayLower");
//       value = JSON.parse(value);
//       setArrayLower(value);
//     }
//     if (ArrayLower.length === 0) {
//       setMidButton(false);
//     }
//     {
//       setMidButton(true);
//     }
//   }, []);

 
 
//   return (
//     <>
//       <div className="outerContainerSection">
//         <div className="HeadingSection">Add new section</div>
//         <div className="subHeadingSection">
//           Click on a section to add it to your resume
//         </div>
//         <div className="outerWraperSection">
//           {ArrayUper.map((item, index) => {
//             return (
//               <SectionBox
//                 index={index}
//                 item={item}
//                 ArrayLower={ArrayLower}
//                 ArrayUper={ArrayUper}
//                 setArrayUper={setArrayUper}
//                 setArrayLower={setArrayLower}
//                 funHandleSection={props.HandleSections}
//                 SetToggleAddnewSection={props.setToggleAddNewSection}
//                 functionHandleAddNewSection={props.HandleAddNewSection}
//               />
//             );
//           })}
//         </div>
//         <div className="outerWraperLowerSection" style={{ display: "block" }}>
//           <div
//             className="outerWraperMidButtons"
//             style={{ display: MidButton ? "flex" : "none" }}
//             onClick={() => {
//               setToggle(!Toggle);
//               if (Toggle) {
//                 setShowText("Show Used Section");
//                 setShowTextLowerIcon(<MdKeyboardArrowDown />);
//               } else {
//                 setShowText("Hide Used Section");
//                 setShowTextLowerIcon(<MdKeyboardArrowUp />);
//               }
//             }}
//           >
//             <div className="MidButtons">{ShowText}</div>
//             <div className="UperAwwor">{ShowTextLowerIcon}</div>
//           </div>
//           <div
//             className="outerWraperSectionmidbuttons"
//             style={{ display: Toggle ? "flex" : "none" }}
//           >
//             {ArrayLower &&
//               ArrayLower.map((item, index) => {
//                 return (
//                   <Section2ndBox
//                     item={item}
//                     ArrayLower={ArrayLower}
//                     setArrayLower={setArrayLower}
//                     setArrayUper={setArrayUper}
//                     ArrayUper={ArrayUper}
//                     item={item}
//                     index={index}
//                     HandleRemoveSection={props.HandleRemoveSection}
//                   />
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </>
//   );

// }
