import React  from 'react';
import {Date, Location, LinkHeader} from '../../../JasonData';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import TextareaAutosize from 'react-autosize-textarea';
function PublicationInnerSection (props) {
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
        <div
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            backgroundColor: props.item.selected ? 'white' : '',
            border: props.item.selected ? '1px solid #60d5ba' : '',
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{position: 'relative', display: 'flex'}}>
            <div style={{width: '100%'}} className="d-flex flex-column">
              {props.list[props.index].toggleSwitch[0].selected &&
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder={'Name Of Article'}
                  draggable="false"
                  value={props.list[props.index].value.title}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />}
              {props.list[props.index].toggleSwitch[1].selected &&
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder={'Publishing Company / Journal'}
                  draggable="false"
                  value={props.list[props.index].value.companyName}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />}
              {props.list[props.index].toggleSwitch[6].selected &&
                <TextareaAutosize
                  className="InputFieldBachUpCv"
                  placeHolder={'Authors / Co-authors'}
                  draggable="false"
                  value={props.list[props.index].value.CoAuthors}
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
                {props.list[props.index].toggleSwitch[4].selected &&
                  <div className="d-flex align-items-center">
                    <Location className="IconsFontSize12" />
                    <TextareaAutosize
                      className="InputFieldBachUpCv"
                      placeHolder={'Location'}
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
                    placeHolder={'URL'}
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
              placeholder='Publication Description'
              draggable="false"
              value={props.list[props.index].value.companyDescription}
              onChange={() => {
                console.log ('onchange');
              }}
            />}
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (PublicationInnerSection);
export default StyledApp;
