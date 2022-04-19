import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../../Context/Context';
import Switch from 'react-switch';
import {Setting, Plus, Delete, Text, ArrowDown, ArrowUp} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
import {HiPlus} from 'react-icons/hi';
function BookInnerSection (props) {
  const contextData = useContext (Context);
  const [UpdateNumber, setUpdateNumber] = useState (0);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
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
    localStorage.setItem ('Book', JSON.stringify (props.list));
  }
  function handleInputData (data) {
    let temp = props.list;
    if (data.name === 'title') {
      temp[data.index].value.title = data.value;
    } else if (data.name === 'author') {
      temp[data.index].value.author = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('Book', JSON.stringify (temp));
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

  let Color = '#686868';

  if (contextData.SelectedColor === 'darkColor') {
    Color = '#686868';
  }
  if (contextData.SelectedColor === 'blueColor') {
    Color = '#008cff';
  }
  if (contextData.SelectedColor === 'greenColor') {
    Color = '#00b400';
  }
  if (contextData.SelectedColor === 'redColor') {
    Color = '#ff0001';
  }

  const selectImage = fileChangeEvent => {
    let temp = props.list;
    temp[
      localStorage.getItem ('BookImageIndex')
    ].value.bookUri = URL.createObjectURL (fileChangeEvent.target.files[0]);
    props.setList ([...temp]);
    localStorage.setItem ('Book', JSON.stringify (temp));
  };
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
          className="outerWrapperBox BorderRadius d-flex"
          style={{
            backgroundColor: props.item.selected ? 'white' : '',
            border: props.item.selected ? '1px solid #60d5ba' : '',
            alignItems: 'unset',
            position: 'relative',
            gap: '12px',
          }}
        >
          {props.list[props.index].value.bookUri
            ? <div
                style={{width: '160px', height: '160px', border: '1px solid'}}
              >
                <img
                  src={props.list[props.index].value.bookUri}
                  alt="selectedImage"
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
            : <label
                onClick={() => {
                  localStorage.setItem (
                    'BookImageIndex',
                    JSON.stringify (props.index)
                  );
                }}
                htmlFor="uploadFile"
                className="OuterWrapperPlusIconBookSections"
              >
                <HiPlus className="PlusIconBookSections" />
              </label>}
          <input
            style={{display: 'none'}}
            type="file"
            id="uploadFile"
            accept="image/png, image/jpeg"
            onChange={e => {
              selectImage (e);
            }}
          />
          <div style={{position: 'relative', display: 'flex'}}>
            <div
              style={{width: '100%'}}
              className=""
              onClick={() => {
                handleCloseToggleSwitch ();
              }}
            >
              {props.list[props.index].toggleSwitch[0].selected &&
                <div>
                  <InputField
                    placeHolder={'Title'}
                    otherStyle={'TextHolderSectionsTitle'}
                    value={props.list[props.index].value.title}
                    index={props.index}
                    name={'title'}
                    handleInputData={handleInputData}
                  />
                </div>}
              {props.list[props.index].toggleSwitch[1].selected &&
                <div>
                  <InputField
                    placeHolder={'Author(s)'}
                    otherStyle={'TextHolderSectionsTitle'}
                    value={props.list[props.index].value.author}
                    index={props.index}
                    name={'author'}
                    handleInputData={handleInputData}
                  />
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
const StyledApp = injectSheet (styles) (BookInnerSection);
export default StyledApp;
