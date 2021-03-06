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
  LinkHeader,
} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import RichTextEditor from '../../RichTextEditor';
import DatePicker from '../../DatePicker';
import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';
function ExperienceInnerSection (props) {
  const contextData = useContext (Context);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const [ShowDate, setShowDate] = useState (false);
  const [pointEvent, setpointEvent] = useState ('none');
  const [CursurPointer, setCursurPointer] = useState ('not-allowed');
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
    localStorage.setItem ('Experience', JSON.stringify (props.list));
  }
  function handleInputData (data,innerIndex) {
    let temp = props.list;
    if (data.name === 'title') {
      temp[data.index].value.title = data.value;
    } else if (data.name === 'companyName') {
      temp[data.index].value.companyName = data.value;
    } else if (data.name === 'location') {
      temp[data.index].value.location = data.value;
    } else if (data.name === 'url') {
      temp[data.index].value.url = data.value;
    } else if (data.name === 'companyDescription') {
      temp[data.index].DescriptionArray[innerIndex].companyDescription = data.value;
    } else if (data.name === 'bullets') {
      temp[data.index].DescriptionArray[innerIndex].bullets = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Experience', JSON.stringify (temp));
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
    localStorage.setItem ('Experience', JSON.stringify (props.list));
  }
  function handleMonthFrom (monthFrom) {
    props.list[props.index].date.monthFrom = monthFrom;
    props.setList ([...props.list]);
    localStorage.setItem ('Experience', JSON.stringify (props.list));
  }
  function HandleMonthOngoing (MonthOnGoing) {
    props.list[props.index].date.monthOngoing = MonthOnGoing;
    props.setList ([...props.list]);
    localStorage.setItem ('Experience', JSON.stringify (props.list));
  }
  function handleYearOngoing (yearOnGoing) {
    props.list[props.index].date.yearOngoing = yearOnGoing;
    props.setList ([...props.list]);
    localStorage.setItem ('Experience', JSON.stringify (props.list));
  }

  function HandleOngoing (toggle) {
    props.list[props.index].date.onGoing = toggle;
    props.setList ([...props.list]);
    localStorage.setItem ('Experience', JSON.stringify (props.list));
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
      return '856px';
    } else {
      let value = localStorage.getItem ('SectionsArray');
      value = JSON.parse (value);
      if (value !== null) {
        for (let i = 0; i < value.Left.length; i++) {
          if (value.Left[i] === 'Experience') {
            return '482px';
          }
        }
        for (let i = 0; i < value.Right.length; i++) {
          if (value.Right[i] === 'Experience') {
            return '314px';
          }
        }
      }
    }
  }
  function HandleGetPlaceHolder (item) {
    if (item === '<p><br></p>' || item === undefined || item === '') {
      return 'What did you achieve in this role?';
    } else {
      return ' ';
    }
  }
  function CssClass () {
    return 'summary';
  }
  function HandlerAddingDescription () {
    let temp = props.list;
    temp[props.index].DescriptionArray.push ( {
      companyDescription: '',
      bullets: '',
    });
    props.setList ([...temp]);
    localStorage.setItem ('Experience', JSON.stringify (temp));
    setCursurPointer ('pointer');
    setpointEvent ('');
  }
  function HandlerDeletingDescription () {
    let temp = props.list;
    if (temp[props.index].DescriptionArray.length > 1) {
      temp[props.index].DescriptionArray.pop ();
      props.setList ([...temp]);
      localStorage.setItem ('Experience', JSON.stringify (temp));
    } else {
      setpointEvent ('none');
      setCursurPointer ('not-allowed');
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
            <FaPlusSquare
              className="DeleteIcon CommonCssClassCursorPointer"
              onClick={HandlerAddingDescription}
            />
          </div>
          <div
            className="outerWrapperHeaderIcons"
            style={{cursor: CursurPointer}}
          >
            <FaMinusSquare
              className="DeleteIcon CommonCssClassCursorPointer"
              style={{pointerEvents: pointEvent}}
              onClick={HandlerDeletingDescription}
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
              localStorageSection={'Experience'}
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
          <div style={{position: 'relative', display: 'flex',alignItems:"center"}}>
            <div
              style={{width: '100%'}}
              className="d-flex flex-column"
              onClick={() => {
                handleCloseToggleSwitch ();
              }}
            >
              {props.list[props.index].toggleSwitch[0].selected &&
                <InputField
                  placeHolder={'Title'}
                  otherStyle={'TextHolderSectionOuterHeader'}
                  value={props.list[props.index].value.title}
                  index={props.index}
                  name={'title'}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />}
              {props.list[props.index].toggleSwitch[1].selected &&
                <InputField
                  placeHolder={'Company Name'}
                  otherStyle={'TextHolderSectionSubHeader'}
                  value={props.list[props.index].value.companyName}
                  index={props.index}
                  name={'companyName'}
                  handleInputData={handleInputData}
                  selectedColor={true}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />}
              <div className="d-flex  " style={{gap: '12px',alignItems:"center"}}>
                {props.list[props.index].toggleSwitch[5].selected &&
                  <div
                    className="d-flex  OuterWrapperDatePicker align-items-center"
                    style={{gap: '5px'}}
                    onBlur={() => {
                      setShowDate (false);
                    }}
                    onClick={() => {
                      setShowDate (!ShowDate);
                    }}
                  >
                    <Date
                      className="IconsFontSize12"
                      style={{marginTop: '0px'}}
                    />
                    {ShowDatePeriod () &&
                      <p style={{marginTop: '-4px'}}>Date Period</p>}
                    <div
                      className="d-flex TextHolderSectionLocationAndTime"
                      style={{marginTop: '-2px'}}
                    >
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
                {props.list[props.index].toggleSwitch[4].selected &&
                  <div className="d-flex align-items-center">
                    <Location
                      className="IconsFontSize12"
                      style={{marginTop: '0px',alignItems:"center"}}
                    />
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
              {props.list[props.index].toggleSwitch[6].selected &&
                <div
                  className="d-flex align-items-center"
                  style={{gap: '10px'}}
                >
                  <LinkHeader className="IconsFontSize12" />
                  <InputField
                    placeHolder={'URL'}
                    otherStyle={'TextHolderSectionLocationAndTime'}
                    value={props.list[props.index].value.url}
                    index={props.index}
                    name={'url'}
                    handleInputData={handleInputData}
                    useUpperCase={false}
                    UpperCaseHeaderInputField={false}
                  />
                </div>}
              {props.item.DescriptionArray.map ((item, index) => {
                return (
                  <div key={index}>
                    {props.list[props.index].toggleSwitch[2].selected &&
                      <InputField
                        placeHolder={'Company Description'}
                        otherStyle={'Bullets'}
                        value={props.list[props.index].DescriptionArray[index].companyDescription}
                        index={props.index}
                        innerIndex={index}
                        name={'companyDescription'}
                        handleInputData={handleInputData}
                        useUpperCase={false}
                        UpperCaseHeaderInputField={false}
                      />}
                    {props.list[props.index].toggleSwitch[3].selected &&
                      <div style={{marginLeft: '13px',marginTop:"-7px"}}>
                        <div className={CssClass ()}>
                          <RichTextEditor
                            placeHolder={HandleGetPlaceHolder (
                              props.list[props.index].DescriptionArray[index].bullets
                            )}
                            otherStyle={'Bullets'}
                            value={props.list[props.index].DescriptionArray[index].bullets}
                            index={props.index}
                            innerIndex={index}
                            name={'bullets'}
                            handleInputData={handleInputData}
                            EditorWidth={HandleEditorWidth ()}
                          />
                        </div>
                      </div>}
                  </div>
                );
              })}

            </div>
          </div>

          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (ExperienceInnerSection);
export default StyledApp;
