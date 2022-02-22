import React, {Component, useContext, useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from '../Style';
import injectSheet from 'react-jss';
import {Context} from './Context';
import Switch from 'react-switch';
function Settings (props) {
  const [List, setList] = useState (props.List);
  const contextData = useContext (Context);
  const [radioValue, setRadioValue] = useState (1);
  const {classes} = props;

  function handleChange (index) {
    let temp = List;
    for (let i = 0; i < temp.length; i++) {
      if (temp[index].selected) {
        temp[index].selected = false;
      } else {
        temp[index].selected = true;
      }
    }
    localStorage.setItem (props.ListName, JSON.stringify (temp));
    setList ([...temp]);
    contextData.UpdateToggleSettingsValue ();
  }
  useEffect (() => {
    let value = localStorage.getItem (props.ListName);
    let IndexOfUserImageShape = localStorage.getItem ('indexOfUserImageShape');
    IndexOfUserImageShape = JSON.parse (IndexOfUserImageShape);
    value = JSON.parse (value);
    if (value !== null && value !== undefined) {
      setList ([...value]);
    }
    if (IndexOfUserImageShape !== null && IndexOfUserImageShape !== undefined) {
      setRadioValue (IndexOfUserImageShape);
    }
  }, []);
  
  return (
    <div className={classes.container}>
      <CSSTransition
        in={contextData.DisplaySettings}
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
        <div className={classes.listBody}>
          {List.map ((item, index) => {
            return (
              <div key={index} style={{display: 'flex', paddingBottom: '4px',justifyContent:"space-between"}}>
                <div
                  className="ToggleButtonsLabel CommonCssClassCursorPointer fontSize14"
                  onClick={() => {
                    handleChange (index);
                  }}
                >
                  {item.Label}
                </div>
                <div className="outerWraperSwitchClass">
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
              </div>
            );
          })}
          <div className="d-flex align-items-center outerContainerRadioButtons">
            <label  className="LabelPhotoStyle CommonCssClassCursorPointer fontSize14">
              Photo Style
            </label>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{gap: '7px'}}
            >
              <input
               className='CommonCssClassCursorPointer'
                type="radio"
                name="radio"
                value="Square"
                checked={2 === radioValue}
                onChange={e => {
                  setRadioValue (2);
                  
                  contextData.HandleUserImageShape (true);
                  localStorage.setItem (
                    'indexOfUserImageShape',
                    JSON.stringify (2)
                  );
                }}
              />
              <input
              className='CommonCssClassCursorPointer'
                type="radio"
                value="Circle"
                name="radio"
                checked={1 === radioValue}
                onChange={e => {
                  setRadioValue (1);
                  contextData.HandleUserImageShape (false);
                  localStorage.setItem (
                    'indexOfUserImageShape',
                    JSON.stringify (1)
                  );
                }}
              />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
const StyledApp = injectSheet (styles) (Settings);
export default StyledApp;
