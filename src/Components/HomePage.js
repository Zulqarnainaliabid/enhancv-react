import React from "react";
import "./HomePage.css";
import img from "./Backgroundimg/backgroundimg.png";
import Header from "../Components/usernamePAge";
import { useState } from "react";

export default function Home(props) {
  const [HoverEffect, SetHoverEffect] = useState(null);
  const [True, SetTrue] = useState(null);

  function HandleSetHoverEffect() {
    SetHoverEffect("rgba(80,77,98,.2)");
  }
  function HandleHoverEffect() {
    SetHoverEffect(null);
    SetTrue(True + 1);
  }
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
            {props.ToggleAddNewSectionLeft ? (
               <div className="SectionRight">
               Left
               {props.Array && props.Array.filter((Section) => Section.Left === true).map(
                   (item, index) => {
                     return <div
                     key={index}
                     >{item.section}</div>;
                   }
                 )}
             </div>
             
            ) : (
              <div className="FirstSection"
              onClick={()=>{
                console.log("click op Left")
              }}
              >
                <div className="AddnewSection" 
                
                >Add new section</div>
              </div>
            )}
            {props.ToggleAddNewSectionRight ? (
              <div className="SectionLeft">
                Right
                {props.Array && props.Array.filter((Section) => Section.Left === false).map(
                    (item, index) => {
                      return <>{item.section}</>;
                    }
                  )}
              </div>
            ) : (
              <div className="SecondSection"
              onClick={()=>{
                console.log("click op Left")
              }}
              >
                <div className="AddnewSection"
                 
                >Add new section</div>
              </div>
            )}
          </div>
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

{
  /* <div style={{marginBottom:"12px"}}>
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
  </div> */
}

// <div style={{marginBottom:"12px"}}>
//               <Education button={HandleSetHoverEffect}  data={True} />
//               </div>
//               <div style={{marginBottom:"12px"}}>
//               <TechStockSection  button={HandleSetHoverEffect}  data={True}/>
//               </div>
//               <div style={{marginBottom:"12px"}}>
//               <TrainingCourse button={HandleSetHoverEffect}  data={True} />
//               </div>
//               <div style={{marginBottom:"12px"}}>
//               <Summry button={HandleSetHoverEffect}  data={True} />
//               </div>
//               <div style={{marginBottom:"12px"}}>
//               <Strength button={HandleSetHoverEffect}  data={True} />
//               </div>
//               <div style={{marginBottom:"12px"}}>
//               <Language button={HandleSetHoverEffect}  data={True} />
//               </div>
//               <div style={{marginBottom:"12px"}}>
//               <MyTime button={HandleSetHoverEffect}  data={True} />
//               </div>
//               </div>
