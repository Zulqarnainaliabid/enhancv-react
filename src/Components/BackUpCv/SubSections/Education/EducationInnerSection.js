import React, {useState, useContext} from 'react';
import {Date, Location} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
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

  function HandleEditorWidth () {
    if (!props.Template) {
      return '355px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Education') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Education') {
            return '114px';
          }
        }
      }
    }
  }

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
                    placeholder={'Degree and Field of Study'}
                    draggable="false"
                    value={props.list[props.index].value.degree}
                  />
                  <TextareaAutosize
                    className={`InputFieldBachUpCv ${props.Colors}`}
                    placeholder={'School or University'}
                    draggable="false"
                    value={props.list[props.index].value.university}
                  />
                  <div
                    className="d-flex align-items-center"
                    style={{gap: '6px'}}
                  >
                    {props.list[props.index].toggleSwitch[2].selected &&
                      <div
                        className="d-flex align-items-center OuterWrapperDatePicker"
                        style={{gap: '5px'}}
                      >
                        <Date className="IconsFontSize12" />
                        {ShowDatePeriod () &&
                          <p className="InputFieldBachUpCv">Date Period</p>}
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
                          placeholder={'Location'}
                          draggable="false"
                          value={props.list[props.index].value.location}
                        />
                      </div>}
                  </div>
                </div>
              </div>

              {props.list[props.index].toggleSwitch[3].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div
                    className="summary"
                    style={{
                      width: HandleEditorWidth (),
                    }}
                  >
                    <Editor
                      className="InputFieldBachUpCv"
                      options={{
                        placeholder: {
                          text: 'What knowledge or experience did you acquire during your studies there? (e.g. Delivered a comprehensive marketing strategy)',
                          hideOnClick: true,
                        },
                      }}
                      text={props.list[props.index].value.bullets}
                    />
                  </div>
                </div>}
              {props.display_dashesLine &&
                <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
            </div>
          </div>
          <div>
            {props.list[props.index].toggleSwitch[0].selected &&
              <div className="d-flex justify-content-center mt-2 align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <TextareaAutosize
                    className="InputFieldBachUpCv w-25"
                    placeholder={'GPA'}
                    draggable="false" 
                    value={props.list[props.index].value.gpa}
                  />
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{gap: '12px'}}
                  >
                    <TextareaAutosize
                      className={`InputFieldBachUpCv  ${props.Colors}`}
                      placeholder={'4.0'}
                      draggable="false"
                      value={props.list[props.index].value.gpaTotal}
                      style={{textAlign:"right"}}
                    />
                    <p>/</p>
                    <TextareaAutosize
                      className="InputFieldBachUpCv"
                      placeholder={'4.0'}
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
