import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../../Context/Context';
import Switch from 'react-switch';
import {
  iconList,
  Setting,
  Plus,
  Delete,
  Text,
  ArrowDown,
  ArrowUp,
  Star,
  Close,
  Date,
} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import {SlideDown} from 'react-slidedown';
import RichTextEditor from '../../RichTextEditor';
import DatePicker from '../../DatePicker';
function CustomInnerSection (props) {
  const contextData = useContext (Context);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [IconsList, setIconsList] = useState (true);
  const [Icon, setIcon] = useState (<Star />);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const [BorderColor, setBorderColor] = useState (false);
  const [SearchFieldInputValue, setSearchFieldInputValue] = useState ('');
  const [DisplayCloseIcon, setDisplayCloseIcon] = useState (false);
  const [ShowDate, setShowDate] = useState (false);
  const {classes} = props;
  function handleCloseToggleSwitch () {
    setDisplayToggleSwitch (false);
  }
  function HandleSetBackGroundColor (e) {
    HandleCloseIconList ();
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
    HandleCloseIconList ();
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
  function HandleCloseIconList () {
    setIconsList (false);
  }
  const HandleArrowUP = () => {
    HandleCloseIconList ();
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
    localStorage.setItem ('Custom', JSON.stringify (props.list));
  }
  function handleInputData (data) {
    let temp = props.list;
    if (data.name === 'title') {
      temp[data.index].value.title = data.value;
    } else {
      temp[data.index].value.username = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Custom', JSON.stringify (temp));
  }
  function HandleAddNewItem () {
    HandleCloseIconList ();
    handleCloseToggleSwitch ();
    props.HandlerAddItemInArray ();
    props.IsActiveUp (true);
    props.IsActive (false);
  }
  function HandleIcon () {
    setIconsList (!IconsList);
    handleCloseToggleSwitch ();
  }
  function HandleSetting () {
    setDisplayToggleSwitch (!DisplayToggleSwitch);
    HandleCloseIconList ();
  }
  function HandleEditorWidth () {
    if (!contextData.ToggleTemplate) {
      return '751px';
    } else {
      let value = localStorage.getItem ('SectionsArray');
      value = JSON.parse (value);
      if (value !== null) {
        for (let i = 0; i < value.Left.length; i++) {
          if (value.Left[i] === 'Custom') {
            return '404px';
          }
        }
        for (let i = 0; i < value.Right.length; i++) {
          if (value.Right[i] === 'Custom') {
            return '246px';
          }
        }
      }
    }
  }

  useEffect (() => {
    let value = localStorage.getItem ('Custom');
    value = JSON.parse (value);
    if (value) {
      for (let i = 0; i < iconList.length; i++) {
        if (value[props.index].iconName === iconList[i].name) {
          setIcon (iconList[i].icon);
        }
      }
    }
  }, []);
  function handleInputData (data) {
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
      temp[data.index].value.companyDescription = data.value;
    } else if (data.name === 'bullets') {
      temp[data.index].value.bullets = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Experience', JSON.stringify (temp));
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
          <div className="outerWrapperHeaderIcons">
            <div
              className="DeleteIcon CommonCssClassCursorPointer ArrangeIcon mb-1"
              onClick={HandleIcon}
            >
              {Icon}
            </div>
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
                localStorageSection={'Custom'}
              />
            </div>}
          {IconsList &&
            <div>
              <SlideDown className="outerWrapperListIcon BorderRadius CommonCssClassAbsolutePosition ">
                <div className="BorderRadius SignUPName mb-2 d-flex  justify-content-between align-items-center">
                  <input
                    className="SearchFieldInputPlaceHolder"
                    placeholder="Search Icons"
                    style={{borderColor: BorderColor ? 'green' : ''}}
                    onFocus={() => {
                      setBorderColor (true);
                    }}
                    onBlur={() => {
                      setBorderColor (false);
                    }}
                    value={SearchFieldInputValue}
                    onChange={ev => {
                      setSearchFieldInputValue (ev.target.value);
                      if (ev.target.value) {
                        setDisplayCloseIcon (true);
                      } else {
                        setDisplayCloseIcon (false);
                      }
                    }}
                  />
                  {DisplayCloseIcon &&
                    <Close
                      style={{color: 'green', cursor: 'pointer'}}
                      onClick={() => {
                        setSearchFieldInputValue ('');
                        setDisplayCloseIcon (false);
                      }}
                    />}
                </div>
                <div
                  style={{
                    height: '250px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    overflowY: 'scroll',
                    justifyContent: 'center',
                  }}
                >
                  {iconList
                    .filter (val => {
                      if (SearchFieldInputValue == '') {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase ()
                          .includes (SearchFieldInputValue.toLowerCase ())
                      ) {
                        return val;
                      }
                    })
                    .map ((item, index) => {
                      return (
                        <div
                          key={index}
                          className="iconsList CommonCssClassCursorPointer"
                          onClick={() => {
                            setIcon (item.icon);
                            props.list[props.index].iconName = item.name;
                            props.setList (props.list);
                            localStorage.setItem (
                              'Custom',
                              JSON.stringify (props.list)
                            );
                          }}
                        >
                          {item.icon}
                        </div>
                      );
                    })}
                </div>
              </SlideDown>
            </div>}
        </div>
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
          <div style={{position: 'relative', display: 'flex'}}>
            {props.list[props.index].toggleSwitch[1].selected &&
              <div
                onClick={() => {
                  setIconsList (!IconsList);
                }}
                className={`${contextData.SelectedColor}`}
                style={{
                  color: '#008CFF',
                  fontSize: '25px',
                }}
              >
                {Icon}
              </div>}
            <div
              style={{width: '100%'}}
              className="d-flex flex-column ms-2"
              onClick={() => {
                handleCloseToggleSwitch ();
                HandleCloseIconList ();
              }}
            >
              <div className="d-flex justify-content-center">
                <InputField
                  placeHolder={'Custom Title'}
                  otherStyle={'TextHolderSectionOuterHeader'}
                  value={props.list[props.index].value.title}
                  index={props.index}
                  name={'title'}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
                <div
                  className="d-flex align-items-center "
                  style={{gap: '12px'}}
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
                  <div className="summary">
                    <RichTextEditor
                      placeHolder={'Custom Description'}
                      otherStyle={'Bullets'}
                      value={props.list[props.index].value.username}
                      index={props.index}
                      name={'username'}
                      handleInputData={handleInputData}
                      EditorWidth={HandleEditorWidth ()}
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
