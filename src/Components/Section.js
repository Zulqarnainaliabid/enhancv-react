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
import React from 'react'
import { useState } from "react";
export default function Sections(props) {
    const [HoverEffectImage1, setHoverEffectImage1] = useState(false);
    const [HoverEffectImage2, setHoverEffectImage2] = useState(false);
    const [HoverEffectImage3, setHoverEffectImage3] = useState(false);
    const [HoverEffectImage4, setHoverEffectImage4] = useState(false);
    const [HoverEffectImage5, setHoverEffectImage5] = useState(false);
    const [HoverEffectImage6, setHoverEffectImage6] = useState(false);
    const [HoverEffectImage7, setHoverEffectImage7] = useState(false);
    const [HoverEffectImage8, setHoverEffectImage8] = useState(false);
    const [HoverEffectImage9, setHoverEffectImage9] = useState(false);
    const [HoverEffectImage10, setHoverEffectImage10] = useState(false);
    const [HoverEffectImage11, setHoverEffectImage11] = useState(false);
    const [HoverEffectImage12, setHoverEffectImage12] = useState(false);
    const [HoverEffectImage13, setHoverEffectImage13] = useState(false);
  return (
    <>
      <div className="outerContainerSection">
      <div className="HeadingSection">Add new section</div>
      <div className="subHeadingSection">
        Click on a section to add it to your resume
      </div>
      <div className="outerWraperSection">
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage1(true);
            }}
          >
            <img src={SectionImg1} />
          </div>
          {HoverEffectImage1 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage1(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume"  onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
                props.setachievement()
             }} >Add  Achievement resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage2(true);
            }}
          >
            <img src={SectionImg2} />
          </div>
          {HoverEffectImage2 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage2(true);
              }}
              className="HoverImage1"
            >
              <div onClick={()=>{
                   if(props.LeftCount==="Left"){
                    props.HandleLeftSection()
                  }else{
                    props.HandleSection()
                  }
              }} className="AddtoResume">Add to skill resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage3(true);
            }}
          >
            <img src={SectionImg3} />
          </div>
          {HoverEffectImage3 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage3(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" onClick={()=>{
                 if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
                props.setproject()
              }}>Add to projects resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage4(true);
            }}
          >
            <img src={SectionImg4} />
          </div>
          {HoverEffectImage4 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage4(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume"
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
              }}
              >Add to training resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage5(true);
            }}
          >
            <img src={SectionImg5} />
          </div>
          {HoverEffectImage5 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage5(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
              }}
              >Add to mytime resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage6(true);
            }}
          >
            <img src={SectionImg6} />
          </div>
          {HoverEffectImage6 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage6(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
              }}
              >Add to language resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage7(true);
            }}
          >
            <img src={SectionImg7} />
          </div>
          {HoverEffectImage7 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage7(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" onClick={()=>{
                 if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
                props.setpassion()
              }}>Add to profesion resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage8(true);
            }}
          >
            <img src={SectionImg8} />
          </div>
          {HoverEffectImage8 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage8(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
                props.setindustryExperience(true)
              }}
              >Add to industry resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage9(true);
            }}
          >
            <img src={SectionImg9} />
          </div>
          {HoverEffectImage9 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage9(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
                props.setfindmeonline(true)
              }}
              >Add to find me online resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage10(true);
            }}
          >
            <img src={SectionImg10} />
          </div>
          {HoverEffectImage10 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage10(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
              }}
              >Add to summary resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage11(true);
            }}
          >
            <img src={SectionImg11} />
          </div>
          {HoverEffectImage11 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage11(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
              }}
              >Add to strength resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage12(true);
            }}
          >
            <img src={SectionImg12} />
          </div>
          {HoverEffectImage12 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage12(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" 
              onClick={()=>{
                if(props.LeftCount==="Left"){
                  props.HandleLeftSection()
                }else{
                  props.HandleSection()
                }
                props.setvolunteering(true)
              }}
              >Add to volunterying resume</div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }} className="Section">
          <div
            onMouseEnter={() => {
              setHoverEffectImage13(true);
            }}
          >
            <img src={SectionImg13} />
          </div>
          {HoverEffectImage13 && (
            <div
              onMouseLeave={() => {
                setHoverEffectImage13(true);
              }}
              className="HoverImage1"
            >
              <div className="AddtoResume" onClick={()=>{
                  if(props.LeftCount==="Left"){
                    props.HandleLeftSection()
                  }else{
                    props.HandleSection()
                  }
                 props.setExperience(true)
              }}>Add to Experience resume</div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
