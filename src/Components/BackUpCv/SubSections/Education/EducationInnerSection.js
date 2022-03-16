import React, {useState, useContext} from 'react';
import {Date, Location} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
function EducationInnerSection (props) {
  const SlashFrom = () => {
    if (
      props.list[props.index].date.monthFrom &&
      props.list[props.index].date.yearFrom
    ) {
      return <div>/</div>;
    } else {
      return <div />;
    }
  };
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

  const SlashTo = () => {
    if (
      props.list[props.index].date.monthOngoing &&
      props.list[props.index].date.yearOngoing
    ) {
      return <div>/</div>;
    } else {
      return <div />;
    }
  };

  return (
    <div>
      <div>
        <div className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap">
          <div className="d-flex">
            <div>
              <div style={{position: 'relative', display: 'flex'}}>
                <div className="d-flex flex-column">
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeHolder={'Degree and Field of Study'}
                    draggable="false"
                    value={props.list[props.index].value.degree}
                  />
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeHolder={'School or University'}
                    draggable="false"
                    value={props.list[props.index].value.university}
                  />
                  <div
                    className="d-flex align-items-center"
                    style={{gap: '10px'}}
                  >
                    {props.list[props.index].toggleSwitch[2].selected &&
                      <div
                        className="d-flex align-items-center OuterWrapperDatePicker"
                        style={{gap: '5px'}}
                      >
                        <Date className="IconsFontSize12" />
                        {ShowDatePeriod () && <p>Date Period</p>}
                        <div className="d-flex TextHolderSectionLocationAndTime">
                          <div>{props.list[props.index].date.monthFrom}</div>
                          {SlashFrom ()}
                          <div>{props.list[props.index].date.yearFrom}</div>
                          <div>{Minus ()}</div>

                          {props.list[props.index].date.onGoing
                            ? <div>OnGoing</div>
                            : <div className="d-flex">
                                <div>
                                  {props.list[props.index].date.monthOngoing}
                                </div>
                                {SlashTo ()}
                                <div>
                                  {props.list[props.index].date.yearOngoing}
                                </div>
                              </div>}
                        </div>
                      </div>}
                    {props.list[props.index].toggleSwitch[1].selected &&
                      <div className="d-flex align-items-center">
                        <Location className="IconsFontSize12" />
                        <TextareaAutosize
                          className="InputFieldBachUpCv"
                          placeHolder={'Location'}
                          draggable="false"
                          value={props.list[props.index].value.location}
                        />
                      </div>}
                  </div>
                </div>
              </div>
              {props.list[props.index].toggleSwitch[3].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary">
                    <TextareaAutosize
                      className="InputFieldBachUpCv"
                      placeHolder={
                        'What knowledge or experience did you acquire during your studies there? (e.g. Delivered a comprehensive marketing strategy)'
                      }
                      draggable="false"
                      value={props.list[props.index].value.bullets}
                    />
                  </div>
                </div>}
              {props.display_dashesLine &&
                <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
            </div>
            {props.list[props.index].toggleSwitch[0].selected &&
              <div className="d-flex align-items-center">
                <div
                  className=" text-center d-flex flex-column ps-3"
                  style={{borderLeft: '1px solid ', gap: '5px'}}
                >
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeHolder={'GPA'}
                    draggable="false"
                    value={props.list[props.index].value.gpa}
                  />
                  <div
                    className="d-flex justify-content-center"
                    style={{gap: '5px'}}
                  >
                    <TextareaAutosize
                      className="InputFieldBachUpCv"
                      placeHolder={'4.0'}
                      draggable="false"
                      value={props.list[props.index].value.gpaTotal}
                    />

                    <p>/</p>
                    <TextareaAutosize
                      className="InputFieldBachUpCv"
                      placeHolder={'4.1'}
                      draggable="false"
                      value={props.list[props.index].value.gpaObtain}
                    />
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (EducationInnerSection);
export default StyledApp;
