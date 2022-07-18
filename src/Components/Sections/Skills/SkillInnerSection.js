import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../../Context/Context';
import Switch from 'react-switch';
import {Setting, Plus, Delete, Text, ArrowDown, ArrowUp} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';
import AutosizeInput from 'react-input-autosize';
function SkillsInnerSection (props) {
  const contextData = useContext (Context);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const [CursurPointer, setCursurPointer] = useState (null);
  const [pointEvent, setpointEvent] = useState (null);
  const [BorderStyle, setBorderStyle] = useState (false);
  const [BackGroundColo, setBackGroundColo] = useState ('rgb(204, 204, 204)');
  const [BackGroundColoSecond, setBackGroundColoSecond] = useState (
    'rgb(0, 192, 145)'
  );
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
    localStorage.setItem ('Skill', JSON.stringify (props.list));
  }
  function handleInputData (data) {
    let temp = props.list;
    if (data.name === 'groupTitle') {
      temp[data.index].value.groupName = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Skill', JSON.stringify (temp));
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

  function HandlerAddingToolAndTechnology () {
    let temp = [];
    temp = props.list;
    temp[props.index].value.ToolAndTechnology.push ({text: ''});
    localStorage.setItem ('Skill', JSON.stringify (temp));
    props.setList ([...temp]);
    setpointEvent ('');
    setCursurPointer ('pointer');
  }
  function HandlerMinusToolAndTechnology () {
    let temp = [];
    temp = props.list;
    if (temp[props.index].value.ToolAndTechnology.length === 1) {
      setpointEvent ('none');
      setCursurPointer ('not-allowed');
    } else {
      temp[props.index].value.ToolAndTechnology.pop ({text: ''});
      localStorage.setItem ('Skill', JSON.stringify (temp));
      props.setList ([...temp]);
    }
  }
  useEffect (() => {
    let value = localStorage.getItem ('BorderStyle');
    value = JSON.parse (value);
    if (value !== null) {
      setBackGroundColo (value.backGroundColor1);
      setBackGroundColoSecond (value.backGroundColor2);
      setBorderStyle (value.border);
    }
  }, []);

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
          <div className="outerWrapperHeaderIcons">
            <FaPlusSquare
              className="DeleteIcon CommonCssClassCursorPointer"
              onClick={HandlerAddingToolAndTechnology}
            />
          </div> 
          <div
            className="outerWrapperHeaderIcons"
            style={{cursor: CursurPointer}}
          >
            <FaMinusSquare
              className="DeleteIcon CommonCssClassCursorPointer"
              style={{pointerEvents: pointEvent}}
              onClick={HandlerMinusToolAndTechnology}
            />
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
                  <div className="outerWraperBorderStyle">
                    <div>Border Style</div>
                    <div style={{display: 'flex', gap: '5px'}}>
                      <div
                        className="RadioButtonsToggleButtons"
                        style={{backgroundColor: BackGroundColo}}
                        onClick={() => {
                          setBackGroundColo ('rgb(0, 192, 145)');
                          setBackGroundColoSecond ('rgb(204, 204, 204)');
                          setBorderStyle (false);

                          let data = {
                            backGroundColor1: 'rgb(0, 192, 145)',
                            backGroundColor2: 'rgb(204, 204, 204)',
                            border: false,
                          };
                          localStorage.setItem (
                            'BorderStyle',
                            JSON.stringify (data)
                          );
                        }}
                      />
                      <div
                        onClick={() => {
                          setBackGroundColo ('rgb(204, 204, 204)');
                          setBackGroundColoSecond ('rgb(0, 192, 145)');
                          setBorderStyle (true);
                          let data = {
                            backGroundColor1: 'rgb(204, 204, 204)',
                            backGroundColor2: 'rgb(0, 192, 145)',
                            border: true,
                          };
                          localStorage.setItem (
                            'BorderStyle',
                            JSON.stringify (data)
                          );
                        }}
                        className="RadioButtonsToggleButtons"
                        style={{backgroundColor: BackGroundColoSecond}}
                      />
                    </div>
                  </div>
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
            {props.list[props.index].toggleSwitch[0].selected &&
              <div
                style={{width: '100%'}}
                className="d-flex flex-column"
                onClick={() => {
                  handleCloseToggleSwitch ();
                }}
              >
                <InputField
                  placeHolder={'Group Title'}
                  otherStyle={'TextHolderSectionOuterHeader'}
                  value={props.list[props.index].value.groupName}
                  index={props.index}
                  name={'groupTitle'}
                  handleInputData={handleInputData}
                  selectedColor={true}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
              </div>}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap',gap:"9px",marginTop:"12px",marginBottom:"12px"}}>
            {props.list[
              props.index
            ].value.ToolAndTechnology.map ((item, index) => {
              return (
                <div key={index}>
                  <AutosizeInput
                    value={item.text}
                    onFocus={() => {
                      props.list[props.index].value.ToolAndTechnology[
                        index
                      ].selected = true;
                      props.setList ([...props.list]);
                      localStorage.setItem (
                        'Skill',
                        JSON.stringify (props.list)
                      );
                    }}
                    onBlur={() => {
                      props.list[props.index].value.ToolAndTechnology[
                        index
                      ].selected = false;
                      props.setList ([...props.list]);
                      localStorage.setItem (
                        'Skill',
                        JSON.stringify (props.list)
                      );
                    }}
                    inputStyle={
                      BorderStyle
                        ? {
                            // textAlign: 'center',
                            border: '1px solid #A9A9A9',
                            display:"block",
                            paddingTop: '3px',
                            paddingBottom: '3px',
                            paddingLeft: '8px',
                            paddingRight: '8px',
                            fontSize: '14px',
                            color: 'black',
                            fontWeight: '700',
                            overflow: 'hidden',
                            minWidth: '20px', 
                            maxWidth: '350px',
                            lineHeight:"12px",
                            margin:"auto",
                            opacity: props.list[props.index].value
                              .ToolAndTechnology[index].selected
                              ? '0.5'
                              : '',
                          }
                        : {
                            // textAlign: 'center',
                            borderBottom: '1px solid #A9A9A9',
                            display:"block",
                            paddingLeft: '5px',
                            paddingRight:"5px",
                            color: 'black',
                            fontSize: '14px',
                            fontWeight: '700',
                            overflow: 'hidden',
                            minWidth: '20px',
                            maxWidth: '350px',
                            margin:"auto",
                            opacity: props.list[props.index].value
                              .ToolAndTechnology[index].selected
                              ? '0.5'
                              : '',
                          }
                    }
                    placeholder="Tool / Technology"
                    name="form-field-name"
                    onChange={function (event) {
                      props.list[props.index].value.ToolAndTechnology[
                        index
                      ].text =
                        event.target.value;
                      localStorage.setItem (
                        'Skill',
                        JSON.stringify (props.list)
                      );
                      props.setList ([...props.list]);
                    }}
                  />
                </div>
              );
            })}
          </div>
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (SkillsInnerSection);
export default StyledApp;
