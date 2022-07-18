import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../../Context/Context';
import Switch from 'react-switch';
import {Setting, Plus, Delete, Text, ArrowDown, ArrowUp} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import '../../index.css';
import Slider from 'react-input-slider';
function LanguageInnerSection (props) {
  const contextData = useContext (Context);
  const [ValueRange, setValueRange] = useState (10);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const [state, setState] = useState (10);
  const [Language, setLanguage] = useState ('Beginner');

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
  }
  function handleInputData (data) {
    let temp = props.list;
    if (data.name === 'language') {
      temp[data.index].value.language = data.value;
    } else if (data.name === 'proficiency') {
      temp[data.index].value.proficiency = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Language', JSON.stringify (temp));
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
  const handleChangeSlider = value => {
    setState (value);
    let temp = props.list;
    temp[props.index].proficiencyValue = value;

    if (value < 40) {
      setLanguage ('Beginner');
      temp[props.index].language = 'Beginner';
    } else if (value >= 40 && value < 60) {
      setLanguage ('Intermediate');
      temp[props.index].language = 'Intermediate';
    } else if (value >= 60 && value < 80) {
      setLanguage ('Advanced');
      temp[props.index].language = 'Advanced';
    } else if (value >= 80 && value < 100) {
      setLanguage ('Proficient');
      temp[props.index].language = 'Proficient';
    } else if (value === 100) {
      setLanguage ('Native');
      temp[props.index].language = 'Native';
    }
    localStorage.setItem ('Language', JSON.stringify (temp));
  };
  useEffect (() => {
    let value = localStorage.getItem ('Language');
    value = JSON.parse (value);
    if (value !== null) {
      if (value[props.index].proficiencyValue === 5) {
        setState (1);
      }
      setState (value[props.index].proficiencyValue);
      setLanguage (value[props.index].language);
    } else {
      setState (0);
      setLanguage ('Beginner');
    }
  }, []);

  let CssClass = '#686868';
  if (contextData.SelectedColor === 'darkColor') {
    CssClass = '#686868';
  }
  if (contextData.SelectedColor === 'blueColor') {
    CssClass = '#008cffb0';
  }
  if (contextData.SelectedColor === 'greenColor') {
    CssClass = '#00b400';
  }
  if (contextData.SelectedColor === 'redColor') {
    CssClass = '#ff8080';
  }
  if (contextData.SelectedColor === 'yellowDark') {
    CssClass = '#FF6E01';
  }
  if (contextData.SelectedColor === 'yellowLight') {
    CssClass = '#E29E1A';
  }

  return (
    <div>
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
            <div
              style={{width: '100%'}}
              className="d-flex justify-content-between"
              onClick={() => {
                handleCloseToggleSwitch ();
              }}
            >
              <div style={{width: '80px'}}>
                <InputField
                  placeHolder={'Language'}
                  otherStyle={'TextHolderSectionsTitle'}
                  value={props.list[props.index].value.language}
                  index={props.index}
                  name={'language'}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
              </div>
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{width: '89px'}}>
                  <InputField
                    placeHolder={Language}
                    otherStyle={'TextHolderSectionsTitle'}
                    value={props.list[props.index].value.proficiency}
                    index={props.index}
                    name={'proficiency'}
                    handleInputData={handleInputData}
                    useUpperCase={false}
                    UpperCaseHeaderInputField={false}
                  />
                </div>}
            </div>
          </div>
          {props.list[props.index].toggleSwitch[1].selected &&
            <div>
              <Slider
                axis="x" 
                x={state}
                onChange={({x}) => handleChangeSlider (x)}
                styles={{
                  track: {
                    backgroundColor: '#EEEEEE',
                  },
                  active: {
                    backgroundColor:CssClass,
                  },
                  thumb: {
                    width: 0,
                    height: 0,
                  },
                  disabled: {
                    opacity: 0.3,
                  },
                }}
              />
            </div>
            }

          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (LanguageInnerSection);
export default StyledApp;
