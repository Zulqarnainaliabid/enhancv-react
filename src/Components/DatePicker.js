import React, {useState, useEffect} from 'react';
import './DatePicker.css';
import Switch from 'react-switch';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import {Button} from 'react-bootstrap';
function DatePicker (props) {
  const [ShowTo, setShowTo] = useState (false);
  const [Checked, setChecked] = useState (true);

  const [FirstYearFrom, setFirstYearFrom] = useState (0);
  const [LastYearFrom, setLastYearFrom] = useState (12);

  const [DisabledLeftArrowYearFrom, setDisabledLeftArrowYearFrom] = useState (
    false
  );
  const [DisabledRightArrowYearFrom, setDisabledRightArrowYearFrom] = useState (
    true
  );

  const [FirstYearTo, setFirstYearTo] = useState (0);
  const [LastYearTo, setLastYearTo] = useState (12);

  const [DisabledLeftArrowYearTo, setDisabledLeftArrowYearTo] = useState (
    false
  );
  const [DisabledRightArrowYearTo, setDisabledRightArrowYearTo] = useState (
    true
  );

  function HandleTo () {
    setShowTo (true);
  }
  function HandleFrom () {
    setShowTo (false);
  }
  function HandleToggle (value) {
    setChecked (value);
    props.HandleOngoing (!value);
  }
  useEffect (() => {
    let value = localStorage.getItem (props.localStorageSection);
    value = JSON.parse (value);
    if (value !== null) {
      setChecked (!value[props.outerIndex].date.onGoing);
    }
  }, []);

  return (
    <div>
      <div className="ContainerDatePicker">
        <div className="OuterWrapperHeadingButtonsDatePicker">
          <div
            className="Buttons"
            style={{
              backgroundColor: ShowTo ? '#E6E6E6' : '',
              color: ShowTo ? 'white' : '',
              boxShadow: ShowTo
                ? 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
                : '',
            }}
            onClick={HandleFrom}
          >
            From
          </div>
          <div
            className="Buttons1"
            style={{
              backgroundColor: ShowTo ? '' : '#E6E6E6',
              color: ShowTo ? '' : 'white',
              boxShadow: ShowTo
                ? ''
                : 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
            }}
            onClick={HandleTo}
          >
            To
          </div>
        </div>
        <div className="InnerContainerDatePicker">
          {ShowTo
            ? <div>
                <div className="outerWrapperIcons">
                  <Button
                    disabled={DisabledLeftArrowYearTo}
                    className="ArrowsButtons"
                    onClick={() => {
                      if (FirstYearTo < 60) {
                        setFirstYearTo (FirstYearTo + 12);
                        setLastYearTo (LastYearTo + 12);
                        setDisabledRightArrowYearTo (false);
                      } else {
                        setDisabledRightArrowYearTo (false);
                        setDisabledLeftArrowYearTo (true);
                      }
                    }}
                  >
                    <FaAngleLeft className="LeftRightArrows" />
                  </Button>
                  <Button
                    disabled={DisabledRightArrowYearTo}
                    className="ArrowsButtons"
                    onClick={() => {
                      if (FirstYearTo >= 12) {
                        setFirstYearTo (FirstYearTo - 12);
                        setLastYearTo (LastYearTo - 12);
                        setDisabledLeftArrowYearTo (false);
                      } else {
                        setDisabledRightArrowYearTo (true);
                        setDisabledLeftArrowYearTo (false);
                      }
                    }}
                  >
                    <FaAngleRight className="LeftRightArrows" />
                  </Button>
                </div>
                <div className="InnerContainerDatePicker">

                  <div
                    className="InnerContainerDatePicker"
                    style={{
                      cursor: props.list[props.outerIndex].date.onGoing
                        ? 'no-drop'
                        : 'pointer',
                    }}
                  >
                    <div
                      className="d-flex flex-wrap justify-content-center monthsFromDatePicker"
                      style={{
                        pointerEvents: props.list[props.outerIndex].date.onGoing
                          ? 'none'
                          : '',
                        opacity: props.list[props.outerIndex].date.onGoing
                          ? '0.5'
                          : '',
                      }}
                    >
                      {props.yearTo.map ((item, index) => {
                        if (index >= FirstYearTo && index < LastYearTo) {
                          return (
                            <div key={index} style={{position: 'relative'}}>
                              <div
                                className="fontSize"
                                style={{
                                  borderColor: props.list[props.outerIndex]
                                    .yearToPicker[index].selected
                                    ? '#2DC08D'
                                    : '',
                                  color: props.list[props.outerIndex]
                                    .yearToPicker[index].selected
                                    ? '#2DC08D'
                                    : '',
                                }}
                                onClick={() => {
                                  props.handleYearOngoing (item.name);
                                  for (
                                    let i = 0;
                                    i <
                                    props.list[props.outerIndex].yearToPicker
                                      .length;
                                    i++
                                  ) {
                                    props.list[props.outerIndex].yearToPicker[
                                      i
                                    ].selected = false;
                                  }
                                  props.list[props.outerIndex].yearToPicker[
                                    index
                                  ].selected = true;
                                  props.setList ([...props.list]);
                                  localStorage.setItem (
                                    props.localStorageSection,
                                    JSON.stringify (props.list)
                                  );
                                }}
                              >
                                {item.name}
                              </div>
                              {props.list[props.outerIndex].yearToPicker[index]
                                .selected &&
                                <div
                                  className="CrossIcon"
                                  onClick={() => {
                                    props.handleYearOngoing ('');
                                    for (
                                      let i = 0;
                                      i <
                                      props.list[props.outerIndex].yearToPicker
                                        .length;
                                      i++
                                    ) {
                                      props.list[props.outerIndex].yearToPicker[
                                        i
                                      ].selected = false;
                                    }
                                    props.setList ([...props.list]);
                                    localStorage.setItem (
                                      props.localStorageSection,
                                      JSON.stringify (props.list)
                                    );
                                  }}
                                >
                                  X
                                </div>}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            : <div>
                <div className="outerWrapperIcons">

                  <Button
                    disabled={DisabledLeftArrowYearFrom}
                    className="ArrowsButtons"
                    onClick={() => {
                      if (FirstYearFrom < 60) {
                        setFirstYearFrom (FirstYearFrom + 12);
                        setLastYearFrom (LastYearFrom + 12);
                        setDisabledRightArrowYearFrom (false);
                      } else {
                        setDisabledRightArrowYearFrom (false);
                        setDisabledLeftArrowYearFrom (true);
                      }
                    }}
                  >
                    <FaAngleLeft className="LeftRightArrows" />
                  </Button>
                  <Button
                    disabled={DisabledRightArrowYearFrom}
                    className="ArrowsButtons"
                    onClick={() => {
                      if (FirstYearFrom >= 12) {
                        setFirstYearFrom (FirstYearFrom - 12);
                        setLastYearFrom (LastYearFrom - 12);
                        setDisabledLeftArrowYearFrom (false);
                      } else {
                        setDisabledRightArrowYearFrom (true);
                        setDisabledLeftArrowYearFrom (false);
                      }
                    }}
                  >
                    <FaAngleRight className="LeftRightArrows" />
                  </Button>
                </div>
                <div
                  className="InnerContainerDatePicker"
                  style={{cursor: 'pointer'}}
                >
                  <div
                    className="d-flex flex-wrap justify-content-center monthsFromDatePicker"
                    style={{gap: '7px'}}
                  >

                    {props.yearFrom.map ((item, index) => {
                      if (index >= FirstYearFrom && index < LastYearFrom) {
                        return (
                          <div key={index} style={{position: 'relative'}}>
                            <div
                              style={{
                                borderColor: props.list[props.outerIndex]
                                  .yearFromPicker[index].selected
                                  ? '#2DC08D'
                                  : '',
                                color: props.list[props.outerIndex]
                                  .yearFromPicker[index].selected
                                  ? '#2DC08D'
                                  : '',
                              }}
                              key={index}
                              className="fontSize"
                              onClick={() => {
                                props.handleYearFrom (item.name);

                                for (
                                  let i = 0;
                                  i <
                                  props.list[props.outerIndex].yearFromPicker
                                    .length;
                                  i++
                                ) {
                                  props.list[props.outerIndex].yearFromPicker[
                                    i
                                  ].selected = false;
                                }
                                props.list[props.outerIndex].yearFromPicker[
                                  index
                                ].selected = true;
                                props.setList ([...props.list]);
                                localStorage.setItem (
                                  props.localStorageSection,
                                  JSON.stringify (props.list)
                                );
                              }}
                            >
                              {item.name}
                            </div>
                            {props.list[props.outerIndex].yearFromPicker[index]
                              .selected &&
                              <div
                                className="CrossIcon"
                                onClick={() => {
                                  props.handleYearFrom ('');
                                  for (
                                    let i = 0;
                                    i <
                                    props.list[props.outerIndex].yearFromPicker
                                      .length;
                                    i++
                                  ) {
                                    props.list[props.outerIndex].yearFromPicker[
                                      i
                                    ].selected = false;
                                  }
                                  props.setList ([...props.list]);
                                  localStorage.setItem (
                                    props.localStorageSection,
                                    JSON.stringify (props.list)
                                  );
                                }}
                              >
                                X
                              </div>}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>}
        </div>
        <div className="onGoing" style={{display: ShowTo ? 'flex' : 'none'}}>
          <div
            className="TextHolderMidButtons"
            style={{
              opacity: !props.list[props.outerIndex].date.onGoing ? '0.5' : '',
            }}
          >
            Ongoing
          </div>
          <div className="ToggleButtonsDatepicker">
            <Switch
              height={15}
              width={30}
              offColor="#888"
              onColor="#00c091"
              activeBoxShadow="null"
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={HandleToggle}
              checked={Checked}
              id="normal-switch"
            />
          </div>
        </div>
        <div className="MidLine" />
        {!ShowTo
          ? <div
              className="InnerContainerDatePicker"
              style={{cursor: 'pointer'}}
            >
              <div
                className="d-flex flex-wrap justify-content-center monthsFromDatePicker"
                style={{gap: '12px'}}
              >
                {props.monthFrom.map ((item, index) => {
                  return (
                    <div key={index} style={{position: 'relative'}}>
                      <div
                        className="fontSize"
                        style={{
                          borderColor: props.list[props.outerIndex]
                            .monthFromPicker[index].selected
                            ? '#2DC08D'
                            : '',
                          color: props.list[props.outerIndex].monthFromPicker[
                            index
                          ].selected
                            ? '#2DC08D'
                            : '',
                        }}
                        onClick={() => {
                          props.handleMonthFrom (item.number);
                          for (
                            let i = 0;
                            i <
                            props.list[props.outerIndex].monthFromPicker.length;
                            i++
                          ) {
                            props.list[props.outerIndex].monthFromPicker[
                              i
                            ].selected = false;
                          }
                          props.list[props.outerIndex].monthFromPicker[
                            index
                          ].selected = true;
                          props.setList ([...props.list]);
                          localStorage.setItem (
                            props.localStorageSection,
                            JSON.stringify (props.list)
                          );
                        }}
                      >
                        {item.name}
                      </div>
                      {props.list[props.outerIndex].monthFromPicker[index]
                        .selected &&
                        <div
                          className="CrossIcon"
                          onClick={() => {
                            props.handleMonthFrom ('');
                            for (
                              let i = 0;
                              i <
                              props.list[props.outerIndex].monthFromPicker
                                .length;
                              i++
                            ) {
                              props.list[props.outerIndex].monthFromPicker[
                                i
                              ].selected = false;
                            }
                            props.setList ([...props.list]);
                            localStorage.setItem (
                              props.localStorageSection,
                              JSON.stringify (props.list)
                            );
                          }}
                        >
                          X
                        </div>}
                    </div>
                  );
                })}
              </div>
            </div>
          : <div
              className="InnerContainerDatePicker"
              style={{
                cursor: props.list[props.outerIndex].date.onGoing
                  ? 'no-drop'
                  : 'pointer',
              }}
            >
              <div
                className="d-flex flex-wrap justify-content-center monthsFromDatePicker"
                style={{
                  pointerEvents: props.list[props.outerIndex].date.onGoing
                    ? 'none'
                    : '',
                  opacity: props.list[props.outerIndex].date.onGoing
                    ? '0.5'
                    : '',
                }}
              >
                {props.monthTo.map ((item, index) => {
                  return (
                    <div key={index} style={{position: 'relative'}}>
                      <div
                        style={{
                          borderColor: props.list[props.outerIndex]
                            .monthToPicker[index].selected
                            ? '#2DC08D'
                            : '',
                          color: props.list[props.outerIndex].monthToPicker[
                            index
                          ].selected
                            ? '#2DC08D'
                            : '',
                        }}
                        className="fontSize"
                        onClick={() => {
                          props.HandleMonthOngoing (item.number);

                          for (
                            let i = 0;
                            i <
                            props.list[props.outerIndex].monthToPicker.length;
                            i++
                          ) {
                            props.list[props.outerIndex].monthToPicker[
                              i
                            ].selected = false;
                          }
                          props.list[props.outerIndex].monthToPicker[
                            index
                          ].selected = true;
                          props.setList ([...props.list]);
                          localStorage.setItem (
                            props.localStorageSection,
                            JSON.stringify (props.list)
                          );
                        }}
                      >
                        {item.name}
                      </div>
                      {props.list[props.outerIndex].monthToPicker[index]
                        .selected &&
                        <div
                          className="CrossIcon"
                          onClick={() => {
                            props.HandleMonthOngoing ('');
                            for (
                              let i = 0;
                              i <
                              props.list[props.outerIndex].monthToPicker.length;
                              i++
                            ) {
                              props.list[props.outerIndex].monthToPicker[
                                i
                              ].selected = false;
                            }
                            props.setList ([...props.list]);
                            localStorage.setItem (
                              props.localStorageSection,
                              JSON.stringify (props.list)
                            );
                          }}
                        >
                          X
                        </div>}
                    </div>
                  );
                })}
              </div>
            </div>}
      </div>
    </div>
  );
}

export default DatePicker;
