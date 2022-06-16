import React from 'react';
import {Date, Location, LinkHeader} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function VolunteeringInnerSection (props) {
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
          if (props.Sections.Left[i] === 'Volunteering') {
            return '179px';
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'Volunteering') {
            return '114px';
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
            <div style={{width: '100%'}} className="d-flex flex-column">
              {props.list[props.index].toggleSwitch[0].selected &&
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeholder="Title"
                  draggable="false"
                  value={props.list[props.index].value.title}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />}
              {props.list[props.index].toggleSwitch[1].selected &&
                <TextareaAutosize
                  className={`InputFieldBachUpCv ${props.Colors}`}
                  placeholder="Organization Name"
                  draggable="false"
                  value={props.list[props.index].value.companyName}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />}
              <div className="d-flex align-items-center" style={{gap: '10px'}}>
                {props.list[props.index].toggleSwitch[5].selected &&
                  <div
                    className="d-flex align-items-center OuterWrapperDatePicker"
                    style={{gap: '5px'}}
                  >
                    <Date className="IconsFontSize12" />
                    {ShowDatePeriod () && <p className='InputFieldBachUpCv'>Date Period</p>}
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
                {props.list[props.index].toggleSwitch[4].selected &&
                  <div className="d-flex align-items-center">
                    <Location className="IconsFontSize12" />
                    <TextareaAutosize
                      className="InputFieldBachUpCv"
                      placeholder="Location"
                      draggable="false"
                      value={props.list[props.index].value.location}
                      onChange={() => {
                        console.log ('onchange');
                      }}
                    />
                  </div>}
              </div>
              {props.list[props.index].toggleSwitch[6].selected &&
                <div
                  className="d-flex align-items-center"
                  style={{gap: '10px'}}
                >
                  <LinkHeader className="IconsFontSize12" />
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeholder="URL"
                    draggable="false"
                    value={props.list[props.index].value.url}
                    onChange={() => {
                      console.log ('onchange');
                    }}
                  />
                </div>}
            </div>
          </div>
          {props.list[props.index].toggleSwitch[2].selected &&
            <TextareaAutosize
              className="InputFieldBachUpCv"
              placeholder="Description"
              draggable="false"
              value={props.list[props.index].value.companyDescription}
              onChange={() => {
                console.log ('onchange');
              }}
            />}
          {props.list[props.index].toggleSwitch[3].selected &&
            <div style={{marginLeft: '13px'}}>
              <div className="summary"  style={{width: HandleEditorWidth ()}}>
                <Editor
                  className="InputFieldBachUpCv"
                  options={{
                    placeholder: {
                      text: 'What was the impact of your efforts? (e.g. Brought on 12 corporate sponsors)',
                      hideOnClick: true,
                    },
                  }}
                  text={props.list[props.index].value.bullets}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>
            </div>}
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (VolunteeringInnerSection);
export default StyledApp;
