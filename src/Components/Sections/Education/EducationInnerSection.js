import React, {useState, useContext} from 'react';
import {Context} from '../../Context/Context';
import Switch from 'react-switch';
import {
  Setting,
  Plus,
  Delete,
  Text,
  ArrowDown,
  ArrowUp,
  Date,
  Location,
} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import RichTextEditor from '../../RichTextEditor';
import DatePicker from '../../DatePicker';
function EducationInnerSection (props) {
  const contextData = useContext (Context);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const [ShowDate, setShowDate] = useState (false);
  const {classes} = props;
  function handleCloseToggleSwitch () {
    setDisplayToggleSwitch (false);
  }
  function HandleSetBackGroundColor (e) {
    handleCloseToggleSwitch ();
    contextData.HandleUpdateBackGroundHighLitter ();
    props.setHighLighter (false);
    let temp = props.list;
    if (!temp[props.index].selected) {
      props.list.map ((item, index) => {
        if (item.selected) {
          temp[index].selected = false;
        }
      });
      temp[props.index].selected = true;
      props.setList ([...temp]);
    }
    setUpdateNumber (UpdateNumber + 1);
    let array = props.list;
    if (array.length !== 1) {
      if (props.index === 0) {
        props.IsActiveUp (false);
        props.IsActive (true);
      } else if (props.index === array.length - 1) {
        props.IsActive (false);
        props.IsActiveUp (true);
      } else {
        props.IsActive (true);
        props.IsActiveUp (true);
      }
    } else {
      props.IsActive (false);
      props.IsActiveUp (false);
    }
  }
  function HandleArrowDown () {
    handleCloseToggleSwitch ();
    props.IsActiveUp (true);
    let temp = props.list;
    if (temp[props.index].selected) {
      temp[props.index + 1].selected = true;
    }
    temp[props.index].selected = false;
    props.setList ([...temp]);
    if (props.index + 1 === temp.length - 1) {
      props.IsActive (false);
    } else {
      props.IsActive (true);
    }
  }
  const HandleArrowUP = () => {
    handleCloseToggleSwitch ();
    let index = props.index - 1;
    props.IsActive (true);
    let temp = props.list;
    if (temp[props.index].selected) {
      temp[props.index - 1].selected = true;
    }
    temp[props.index].selected = false;
    props.setList ([...temp]);
    if (props.index === 1) {
      props.IsActiveUp (false);
    } else {
      props.IsActiveUp (true);
    }
  };
  function handleChange (index) {
    let temp = props.list[props.index].toggleSwitch;
    for (let i = 0; i < temp.length; i++) {
      if (temp[index].selected) {
        temp[index].selected = false;
        break;
      } else {
        temp[index].selected = true;
        break;
      }
    }
    props.list[props.index].toggleSwitch = temp;
    props.setList ([...props.list]);
    localStorage.setItem ('Education', JSON.stringify (props.list));
  }
  function handleInputData (data) {
    let temp = props.list;
    if (data.name === 'degree') {
      temp[data.index].value.degree = data.value;
    } else if (data.name === 'school') {
      temp[data.index].value.university = data.value;
    } else if (data.name === 'location') {
      temp[data.index].value.location = data.value;
    } else if (data.name === 'bullets') {
      temp[data.index].value.bullets = data.value;
    } else if (data.name === 'gpa') {
      temp[data.index].value.gpa = data.value;
    } else if (data.name === 'gpaTotal') {
      temp[data.index].value.gpaTotal = data.value;
    } else if (data.name === 'gpaObtain') {
      temp[data.index].value.gpaObtain = data.value;
    } else if (data.name === 'gpaPercentage') {
      temp[data.index].value.percentage = data.value;
    } else if (data.name === 'marksTotal') {
      temp[data.index].value.marksTotal = data.value;
    } else if (data.name === 'marksObtain') {
      temp[data.index].value.marksObtain = data.value;
    }

    props.setList ([...temp]);
    localStorage.setItem ('Education', JSON.stringify (temp));
  }
  function HandleAddNewItem () {
    handleCloseToggleSwitch ();
    props.HandlerAddItemInArray ();
    props.IsActiveUp (true);
    props.IsActive (false);
  }
  function HandleSetting () {
    setDisplayToggleSwitch (!DisplayToggleSwitch);
  }

  function handleYearFrom (yearFrom) {
    props.list[props.index].date.yearFrom = yearFrom;
    props.setList ([...props.list]);
    localStorage.setItem ('Education', JSON.stringify (props.list));
  }
  function handleMonthFrom (monthFrom) {
    props.list[props.index].date.monthFrom = monthFrom;
    props.setList ([...props.list]);
    localStorage.setItem ('Education', JSON.stringify (props.list));
  }
  function HandleMonthOngoing (MonthOnGoing) {
    props.list[props.index].date.monthOngoing = MonthOnGoing;
    props.setList ([...props.list]);
    localStorage.setItem ('Education', JSON.stringify (props.list));
  }
  function handleYearOngoing (yearOnGoing) {
    props.list[props.index].date.yearOngoing = yearOnGoing;
    props.setList ([...props.list]);
    localStorage.setItem ('Education', JSON.stringify (props.list));
  }

  function HandleOngoing (toggle) {
    props.list[props.index].date.onGoing = toggle;
    props.setList ([...props.list]);
    localStorage.setItem ('Education', JSON.stringify (props.list));
  }
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
    if (!contextData.ToggleTemplate) {
      return '694px';
    } else {
      let value = localStorage.getItem ('SectionsArray');
      value = JSON.parse (value);
      if (value !== null) {
        for (let i = 0; i < value.Left.length; i++) {
          if (value.Left[i] === 'Education') {
            return '200px';
          }
        }
        for (let i = 0; i < value.Right.length; i++) {
          if (value.Right[i] === 'Education') {
            return '193px';
          }
        }
      }
    }
  }

  function HandleGetPlaceHolder (item) {
    if (item === '<p><br></p>' || item === undefined) {
      return 'What knowledge or experience did you acquire during your studies there? (e.g. Delivered a comprehensive marketing strategy)';
    } else {
      return ' ';
    }
  }

  return (
    <div>
      {ShowDate &&
        <div
          onClick={() => {
            setShowDate (false);
          }}
          className="backGroundColorDatePicker"
        />}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{display: props.item.selected ? 'flex' : 'none'}}
          className="headingOptionBoxRight CommonCssClassAbsolutePosition"
        >
          <div
            className="d-flex align-items-center outerWrapperPlusAndNewEntry CommonCssClassCursorPointer"
            onClick={HandleAddNewItem}
          >
            <Plus className="newEntryPlusIcon CommonCssClassCursorPointer" />
            <div className="newEntryText">New Entry</div>
          </div>
          {props.ToggleArrowUp &&
            <div className="outerWrapperHeaderIcons" style={{border: 'unset'}}>
              <ArrowUp
                onClick={HandleArrowUP}
                className="DeleteIcon CommonCssClassCursorPointer"
                style={{fontSize: '27px'}}
              />
            </div>}
          {props.ToggleArrowDown &&
            <div className="outerWrapperHeaderIcons" style={{border: 'unset'}}>
              <ArrowDown
                style={{fontSize: '27px'}}
                onClick={HandleArrowDown}
                className="DeleteIcon CommonCssClassCursorPointer"
              />
            </div>}
          <div className="outerWrapperHeaderIcons">
            <Delete
              className="DeleteIcon CommonCssClassCursorPointer"
              onClick={() => props.DeleteOneItemInArray (props.index)}
            />
          </div>
          <div className="outerWrapperHeaderIcons">
            <Text
              style={{
                color: '#D7D9DA',
                cursor: 'no-drop',
              }}
              className="DeleteIcon ArrangeIcon CommonCssClassCursorPointer"
            />
          </div>
          <div className="outerWrapperHeaderIcons" style={{border: 'unset'}}>
            <Setting
              onClick={HandleSetting}
              className="DeleteIcon ArrangeIcon CommonCssClassCursorPointer"
            />
            <div style={{position: 'relative'}}>
              <CSSTransition
                in={DisplayToggleSwitch}
                timeout={400}
                unmountOnExit
                classNames={{
                  enter: classes.listTransitionEnter,
                  enterActive: classes.listTransitionEnterActive,
                  exit: classes.listTransitionExit,
                  exitActive: classes.listTransitionExitActive,
                }}
              >
                <div
                  className={classes.listBody}
                  style={{top: '20px', right: '0px'}}
                >
                  {props.list[props.index].toggleSwitch.map ((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          paddingBottom: '4px',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div className="ToggleButtonsLabel CommonCssClassCursorPointer fontSize14">
                          {item.name}
                        </div>
                        <Switch
                          height={18}
                          width={33}
                          offColor="#888"
                          onColor="#00c091"
                          activeBoxShadow="null"
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onChange={() => {
                            handleChange (index);
                          }}
                          checked={item.selected}
                          id="normal-switch"
                        />
                      </div>
                    );
                  })}
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
        {ShowDate &&
          <div>
            <DatePicker
              monthFrom={props.list[props.index].monthFromPicker}
              monthTo={props.list[props.index].monthToPicker}
              yearFrom={props.list[props.index].yearFromPicker}
              yearTo={props.list[props.index].yearToPicker}
              outerIndex={props.index}
              list={props.list}
              setList={props.setList}
              handleYearFrom={handleYearFrom}
              handleMonthFrom={handleMonthFrom}
              HandleMonthOngoing={HandleMonthOngoing}
              handleYearOngoing={handleYearOngoing}
              HandleOngoing={HandleOngoing}
              localStorageSection={'Education'}
            />
          </div>}
      </div>
      <div>
        <div
          onClick={HandleSetBackGroundColor}
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            backgroundColor: props.item.selected ? 'white' : '',
            border: props.item.selected ? '1px solid #60d5ba' : '',
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div className="d-flex">
            <div>
              <div style={{position: 'relative', display: 'flex'}}>
                <div
                  style={{width: HandleEditorWidth ()}}
                  className="d-flex flex-column"
                  onClick={() => {
                    handleCloseToggleSwitch ();
                  }}
                >
                  <InputField
                    placeHolder={'Degree and Field of Study'}
                    otherStyle={'TextHolderSectionOuterHeader'}
                    value={props.list[props.index].value.degree}
                    index={props.index}
                    name={'degree'}
                    handleInputData={handleInputData}
                    useUpperCase={false}
                    UpperCaseHeaderInputField={false}
                  />
                  <InputField
                    placeHolder={'School or University'}
                    otherStyle={'TextHolderSectionSubHeader'}
                    value={props.list[props.index].value.university}
                    index={props.index}
                    name={'school'}
                    handleInputData={handleInputData}
                    selectedColor={true}
                    useUpperCase={false}
                    UpperCaseHeaderInputField={false}
                  />
                  <div
                    className="d-flex align-items-center"
                    style={{gap: '10px'}}
                  >
                    {props.list[props.index].toggleSwitch[2].selected &&
                      <div
                        className="d-flex align-items-center OuterWrapperDatePicker"
                        style={{gap: '5px'}}
                        onBlur={() => {
                          setShowDate (false);
                        }}
                        onClick={() => {
                          setShowDate (!ShowDate);
                        }}
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
                        <InputField
                          placeHolder={'Location'}
                          otherStyle={'TextHolderSectionLocationAndTime'}
                          value={props.list[props.index].value.location}
                          index={props.index}
                          name={'location'}
                          handleInputData={handleInputData}
                          useUpperCase={false}
                          UpperCaseHeaderInputField={false}
                        />
                      </div>}
                  </div>
                </div>
              </div>
              {props.list[props.index].toggleSwitch[3].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary">
                    <RichTextEditor
                     placeHolder= {HandleGetPlaceHolder (
                      props.list[props.index].value.bullets
                     )}
                      otherStyle={'Bullets'}
                      value={props.list[props.index].value.bullets}
                      index={props.index}
                      name={'bullets'}
                      handleInputData={handleInputData}
                      widthEducation={true}
                      EditorWidth={HandleEditorWidth ()}
                    />
                  </div>
                </div>}
              {props.display_dashesLine &&
                <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
            </div>

            {props.list[props.index].toggleSwitch[0].selected &&
              <div className="d-flex align-items-center">
                {props.list[props.index].toggleSwitch[5].selected
                  ? <div
                      className=" text-center d-flex flex-column ps-3"
                      style={{borderLeft: '1px solid ', gap: '5px'}}
                    >
                      {props.list[props.index].toggleSwitch[4].selected
                        ? <InputField
                            placeHolder={'GPA'}
                            otherStyle={'TextHolderSectionsTitle'}
                            value={props.list[props.index].value.gpa}
                            index={props.index}
                            name={'gpa'}
                            handleInputData={handleInputData}
                            CursorCenter={true}
                            useUpperCase={false}
                            UpperCaseHeaderInputField={false}
                          />
                        : <p className="TextHolderSectionSubHeader">
                            Percentage
                          </p>}
                      {props.list[props.index].toggleSwitch[4].selected
                        ? <div
                            className="d-flex justify-content-center"
                            style={{gap: '5px'}}
                          >
                            <InputField
                              placeHolder={'4.0'}
                              otherStyle={'TextHolderSectionsTitle'}
                              value={props.list[props.index].value.gpaTotal}
                              index={props.index}
                              name={'gpaTotal'}
                              handleInputData={handleInputData}
                              maximumLength={true}
                              selectedColor={true}
                              useUpperCase={false}
                              UpperCaseHeaderInputField={false}
                            />
                            <p>/</p>

                            <InputField
                              placeHolder={'4.1'}
                              otherStyle={'TextHolderSectionsTitle'}
                              value={props.list[props.index].value.gpaObtain}
                              index={props.index}
                              name={'gpaObtain'}
                              handleInputData={handleInputData}
                              maximumLength={true}
                              useUpperCase={false}
                              UpperCaseHeaderInputField={false}
                            />
                          </div>
                        : <div className="d-flex">

                            <InputField
                              placeHolder={'%'}
                              otherStyle={'TextHolderSectionsTitle'}
                              value={props.list[props.index].value.percentage}
                              index={props.index}
                              name={'gpaPercentage'}
                              handleInputData={handleInputData}
                              selectedColor={true}
                              CursorCenter={true}
                              useUpperCase={false}
                              UpperCaseHeaderInputField={false}
                            />

                          </div>}
                    </div>
                  : <div
                      className=" text-center d-flex flex-column ps-3"
                      style={{borderLeft: '1px solid ', gap: '5px'}}
                    >
                      <p className="TextHolderSectionSubHeader">
                        Marks
                      </p>
                      <div
                        className="d-flex justify-content-center"
                        style={{gap: '5px'}}
                      >
                        <InputField
                          placeHolder={'1100'}
                          otherStyle={'TextHolderSectionsTitle'}
                          value={props.list[props.index].value.marksTotal}
                          index={props.index}
                          name={'marksTotal'}
                          handleInputData={handleInputData}
                          maximumLength={true}
                          selectedColor={true}
                          useUpperCase={false}
                          UpperCaseHeaderInputField={false}
                        />
                        <p>/</p>
                        <InputField
                          placeHolder={'1100'}
                          otherStyle={'TextHolderSectionsTitle'}
                          value={props.list[props.index].value.marksObtain}
                          index={props.index}
                          name={'marksObtain'}
                          handleInputData={handleInputData}
                          maximumLength={true}
                          useUpperCase={false}
                          UpperCaseHeaderInputField={false}
                        />
                      </div>
                    </div>}

              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (EducationInnerSection);
export default StyledApp;
