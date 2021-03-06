import React from 'react';
import {Date} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function CustomInnerSection (props) {
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
      return '344px';
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'Achievements') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Achievements') {
            return '110px';
          }
        }
      }
    }
  }

  return (
    <div>
      <div>
        <div
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{position: 'relative', display: 'flex'}}>
            <div style={{width: '100%'}} className="d-flex flex-column ms-2">
              <div className="d-flex justify-content-center">
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeholder="Custom Title"
                  draggable="false"
                  value={props.list[props.index].value.title}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
                <div
                  className="d-flex align-items-center "
                  style={{gap: '12px'}}
                >
                  {props.list[props.index].toggleSwitch[2].selected &&
                    <div
                      className="d-flex align-items-center OuterWrapperDatePicker"
                      style={{gap: '5px'}}
                    >
                      <Date className="IconsFontSize12" />
                      {ShowDatePeriod () &&
                        <p className="DatePeriodCustomSection">Date Period</p>}
                      <div className="d-flex TextHolderSectionLocationAndTime">
                        <div>{props.list[props.index].date.monthFrom}</div>
                        {SlashFrom ()}
                        <div>{props.list[props.index].date.yearFrom}</div>
                        <div>{Minus ()}</div>

                        {props.list[props.index].date.onGoing
                          ? <div>OnGoing</div>
                          : <div className="d-flex ">
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
                </div>
              </div>
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary" style={{width: HandleEditorWidth ()}}>
                    <Editor
                      className="InputFieldBachUpCv"
                      options={{
                        placeholder: {
                          text: 'Custom Description',
                          hideOnClick: true,
                        },
                      }}
                      text={props.list[props.index].value.bullets}
                    />
                  </div>
                </div>}
            </div>
          </div>
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (CustomInnerSection);
export default StyledApp;
