import React, {useState, useContext} from 'react';
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
} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import {SlideDown} from 'react-slidedown';
import RichTextEditor from '../../RichTextEditor';
function PassionInnerSection (props) {
  const contextData = useContext (Context);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [IconsList, setIconsList] = useState (true);
  const [Icon, setIcon] = useState (<Star />);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const [BorderColor, setBorderColor] = useState (false);
  const [SearchFieldInputValue, setSearchFieldInputValue] = useState ('');
  const [DisplayCloseIcon, setDisplayCloseIcon] = useState (false);
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
    localStorage.setItem ('Passion', JSON.stringify (props.list));
  }
  function handleInputData (data) {
    let temp = props.list;
    if (data.name === 'title') {
      temp[data.index].value.title = data.value;
    } else {
      temp[data.index].value.username = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Passion', JSON.stringify (temp));
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
          if (value.Left[i] === 'Passion') {
            return '404px';
          }
        }
        for (let i = 0; i < value.Right.length; i++) {
          if (value.Right[i] === 'Passion') {
            return '246px';
          }
        }
      }
    }
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
                classNames="list-transition"
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
              <InputField
                placeHolder={'Career Interest / Passion'}
                otherStyle={'TextHolderSectionOuterHeader'}
                value={props.list[props.index].value.title}
                index={props.index}
                name={'title'}
                handleInputData={handleInputData}
              />
              {props.list[props.index].toggleSwitch[0].selected &&
                <div style={{marginLeft: '13px'}}>
                  <div className="summary">
                    <RichTextEditor
                      placeHolder={
                        'What are you looking for in your next company? (e.g. Learning Opportunities)'
                      }
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
const StyledApp = injectSheet (styles) (PassionInnerSection);
export default StyledApp;
