import React, { useEffect } from "react";
import "./HomePage.css";
import img from "./Backgroundimg/backgroundimg.png";
import SummaryCoverLetter from './SummaryCoverLetter'
import Header from "../Components/usernamePAge";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  INCREMENTBACKGROUNDNULL,
  TOGGLELEFT,
  UPDATEBACKGROUNDIMAGE,
  TOGGLEPAGES,
} from "./Redux/actions/indux";
const { forwardRef, useRef, useImperativeHandle } = React;
const ComponentToPrint = forwardRef((props, ref) => {


    const [Count, setCount] = useState(null);
    const UpdateBackGroundImage = useSelector(
      (state) => state.UpdateBackGroundImage
    );
    const TogglePages = useSelector((state) => state.TogglePages);
  
    const dispatch = useDispatch();
  
    function HandleHoverEffect() {
      props.SetHoverEffect(null);
      setCount(Count + 1);
      dispatch(INCREMENTBACKGROUNDNULL());
    }

    // useImperativeHandle( () => ({
    //   getAlert() {
    //     props.SetHoverEffect(null);
    //     setCount(Count + 1);
    //     dispatch(INCREMENTBACKGROUNDNULL());
    //   },
    // }));
  
    useEffect(() => {
      if (localStorage.getItem("BackGroundImage") !== null) {
        let value = localStorage.getItem("BackGroundImage");
        value = JSON.parse(value);
        dispatch(UPDATEBACKGROUNDIMAGE(value));
      }
      if (localStorage.getItem("TogglePAge") !== null) {
        let value = localStorage.getItem("TogglePAge");
        value = JSON.parse(value);
        dispatch(TOGGLEPAGES(value));
      }
    }, []);
  

    return (
      <div ref={ref} className="outerContainter"y>
      <div
        className="InnerContainer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${UpdateBackGroundImage})`,
        }}
      >
        <Header button={props.HandleSetHoverEffect} data={Count} />
       {TogglePages ? <></>:<SummaryCoverLetter button={props.HandleSetHoverEffect}/>}

        {TogglePages && (
          <div className="outerWraperTwoSections">
            {props.SingleColumnTemplate ? (
              <>
                {props.ToggleAddNewSectionLeftSingleColumn ? (
                  <div className="SectionRightSingleColumn">
                    {props.Array &&
                      props.Array.filter(
                        (Section) =>
                          props.SingleColumnTemplate || Section.Left === true
                      ).map((item, index) => {
                        return <div key={index}>{item.section}</div>;
                      })}
                  </div>
                ) : (
                  <div
                    className="FirstSection"
                    onClick={() => {
                      props.setToggleAddNewSection(true);
                      dispatch(TOGGLELEFT(true));
                    }}
                  >
                    <div className="AddnewSection">Add new section</div>
                  </div>
                )}
              </>
            ) : (
              <>
                {props.ToggleAddNewSectionLeft ? (
                  <div className="SectionRight">
                    {props.Array &&
                      props.Array.filter(
                        (Section) => Section.Left === true
                      ).map((item, index) => {
                        return <div key={index}>{item.section}</div>;
                      })}
                  </div>
                ) : (
                  <div
                    className="FirstSection"
                    onClick={() => {
                      props.setToggleAddNewSection(true);
                      dispatch(TOGGLELEFT(true));
                    }}
                  >
                    <div className="AddnewSection">Add new section</div>
                  </div>
                )}
                {props.ToggleAddNewSectionRight ? (
                  <div className="SectionLeft">
                    {props.Array &&
                      props.Array.filter(
                        (Section) => Section.Left === false
                      ).map((item, index) => {
                        return <div key={index}>{item.section}</div>;
                      })}
                  </div>
                ) : (
                  <div
                    className="SecondSection"
                    onClick={() => {
                      props.setToggleAddNewSection(true);
                    }}
                  >
                    <div className="AddnewSection">Add new section </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
        <div className="OuterWraperSection"></div>
        <div
          onClick={HandleHoverEffect}
          style={{
            position: "absolute",
            backgroundColor: props.HoverEffect,
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
  });

export default ComponentToPrint