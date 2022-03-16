import React, { useState, useContext } from "react";
import styles from "../../../Style";
import injectSheet from "react-jss";
import TextareaAutosize from "react-textarea-autosize";
function SummaryInnerSection(props) {
  return (
    <div>
      <div>
        <div
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            backgroundColor: props.item.selected ? "white" : "",
            border: props.item.selected ? "1px solid #60d5ba" : "",
            alignItems: "unset",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", display: "flex" }}>
            <div style={{ width: "100%" }} className="d-flex flex-column">
              <div className={`${props.list[props.index].toggleSwitch[0].selected ? "summary" : ""}`}>
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder="What's the one thing you want someone to remember after reading your resume?"
                  draggable="false"
                  value={props.list[props.index].title}
                />
              </div>
            </div>
          </div>
          {props.display_dashesLine && <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet(styles)(SummaryInnerSection);
export default StyledApp;
