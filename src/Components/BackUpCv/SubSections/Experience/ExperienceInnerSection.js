import React, { useState, useContext } from "react";
import { Date, Location, LinkHeader } from "../../../JasonData";
import styles from "../../../Style";
import injectSheet from "react-jss";
import TextareaAutosize from "react-textarea-autosize";
function ExperienceInnerSection(props) {
  const Minus = () => {
    if (
      !props.list[props.index].date.monthFrom &&
      !props.list[props.index].date.yearFrom &&
      !props.list[props.index].date.monthOngoing &&
      !props.list[props.index].date.yearOngoing
    ) {
      return <div />;
    } else {
      return <div>-</div>;
    }
  };
  const SlashTo = () => {
    if (props.list[props.index].date.monthOngoing && props.list[props.index].date.yearOngoing) {
      return <div>/</div>;
    } else {
      return <div />;
    }
  };
  const ShowDatePeriod = () => {
    if (
      !props.list[props.index].date.monthFrom &&
      !props.list[props.index].date.yearFrom &&
      !props.list[props.index].date.monthOngoing &&
      !props.list[props.index].date.yearOngoing
    ) {
      return true;
    } else {
      return false;
    }
  };
  const SlashFrom = () => {
    if (props.list[props.index].date.monthFrom && props.list[props.index].date.yearFrom) {
      return <div>/</div>;
    } else {
      return <div />;
    }
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "relative",
        }}
      />
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
              {props.list[props.index].toggleSwitch[0].selected && (
                <TextareaAutosize className="InputFieldBachUpCv" placeHolder="Title" draggable="false" value={props.list[props.index].value.title} />
              )}
              {props.list[props.index].toggleSwitch[1].selected && (
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder="Company Name"
                  draggable="false"
                  value={props.list[props.index].value.companyName}
                />
              )}
              <div className="d-flex align-items-center " style={{ gap: "12px" }}>
                {props.list[props.index].toggleSwitch[5].selected && (
                  <div className="d-flex align-items-center OuterWrapperDatePicker" style={{ gap: "5px" }}>
                    <Date className="IconsFontSize12" />
                    {ShowDatePeriod() && <p>Date Period</p>}
                    <div className="d-flex TextHolderSectionLocationAndTime">
                      <div>{props.list[props.index].date.monthFrom}</div>
                      {SlashFrom()}
                      <div>{props.list[props.index].date.yearFrom}</div>
                      <div>{Minus()}</div>

                      {props.list[props.index].date.onGoing ? (
                        <div>OnGoing</div>
                      ) : (
                        <div className="d-flex ">
                          <div>{props.list[props.index].date.monthOngoing}</div>
                          {SlashTo()}
                          <div>{props.list[props.index].date.yearOngoing}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {props.list[props.index].toggleSwitch[4].selected && (
                  <div className="d-flex align-items-center">
                    <Location className="IconsFontSize12" />
                    <TextareaAutosize className="InputFieldBachUpCv" placeHolder="Location" draggable="false" value={props.list[props.index].value.location} />
                  </div>
                )}
              </div>
              {props.list[props.index].toggleSwitch[6].selected && (
                <div className="d-flex align-items-center" style={{ gap: "10px" }}>
                  <LinkHeader className="IconsFontSize12" />
                  <TextareaAutosize className="InputFieldBachUpCv" placeHolder="URL" draggable="false" value={props.list[props.index].value.url} />
                </div>
              )}
              {props.list[props.index].toggleSwitch[2].selected && (
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder="Company Description"
                  draggable="false"
                  value={props.list[props.index].value.companyDescription}
                />
              )}
            </div>
          </div>
          {props.list[props.index].toggleSwitch[3].selected && (
            <div style={{ marginLeft: "13px" }}>
              <div className="summary">
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder="What did you achieve in this role?"
                  draggable="false"
                  value={props.list[props.index].value.bullets}
                />
              </div>
            </div>
          )}
          {props.display_dashesLine && <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet(styles)(ExperienceInnerSection);
export default StyledApp;
