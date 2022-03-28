import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../../Context/Context';
import MyTimeInnerSection from './MyTimeInnerSection';
import InputField from '../../InputField';
import {Delete, Template} from '../../JasonData';
export default function MyTimeOuterSection (props) {
  const contextData = useContext (Context);
  const [HighLighter, setHighLighter] = useState (false);
  const [DisplayLoader, setDisplayLoader] = useState (false);
  const [ValueFindMeMeOnline, setValueFindMeMeOnline] = useState ('');
  const [ActiveBackGroundColor, setActiveBackGroundColor] = useState (false);

  function HandleCompleteBoarderSelected () {
    setHighLighter (true);
  }

  useEffect (() => {
    let value = localStorage.getItem ('HeadingValueMyTime');
    value = JSON.parse (value);
    if (value === null || value === undefined) {
      value = '';
    }
    setValueFindMeMeOnline (value);
  }, []);

  useEffect (
    () => {
      alertUser ();
    },
    [contextData.UpdateBachGroundHighLitter]
  );
  function alertUser () {
    setHighLighter (false);
    setActiveBackGroundColor (false);
  }
  useEffect (
    () => {
      if (contextData.BackGroundHighLitter !== 'MyTime') {
        setHighLighter (false);
        setActiveBackGroundColor (false);
      }
    },
    [contextData.BackGroundHighLitter]
  );

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setDisplayLoader (false);
      }, 1000);
      return () => clearTimeout (timer);
    },
    [DisplayLoader]
  );

  function handleInputData (data) {
    if (data.name === 'MyTime') {
      setValueFindMeMeOnline (data.value);
    }
    localStorage.setItem ('HeadingValueMyTime', JSON.stringify (data.value));
  }

  return (
    <div>
      <div
        className="outerWrapperCompleteBox"
        style={{backgroundColor: HighLighter ? 'white' : ''}}
        onClick={e => {
          props.setDisplayBackGroundColor (true);
          props.HandleBackGroundColor (e);
          contextData.HandleUpdateBackGroundHighLitter ('MyTime');
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center bg-danger"
          style={{position: 'relative'}}
        >
          {HighLighter &&
            <div
              className="headingOptionBoxRight d-flex CommonCssClassAbsolutePosition"
              style={{top: '-20px'}}
            >
              <div className="outerWrapperHeaderIcons" style={{padding: '8px'}}>
                <Delete
                  onClick={() => {
                    props.HandleRemoveElement ('MyTimeOuterSection');
                    contextData.HandleRemoveElement ('MyTimeOuterSection');
                  }}
                  className="DeleteIcon CommonCssClassCursorPointer"
                />
              </div>
              <div
                className="outerWrapperHeaderIcons"
                style={{border: 'unset', padding: '8px'}}
                onClick={() => {
                  props.HandleState (false);
                }}
              >
                <Template className="DeleteIcon ArrangeIcon CommonCssClassCursorPointer" />
              </div>
            </div>}
        </div>
        <div
          style={{backgroundColor: HighLighter ? 'white' : '', width: '100%'}}
          className="HeadingNameBox BorderRadius"
          onClick={HandleCompleteBoarderSelected}
        >
          <InputField
            placeHolder={'MY TIME'}
            otherStyle={'SectionHeaderTextHolder'}
            value={ValueFindMeMeOnline}
            index={0}
            name={'MyTime'}
            handleInputData={handleInputData}
          />
        </div>
        <div>
          <div>
            <MyTimeInnerSection
              setHighLighter={setHighLighter}
              ActiveBackGroundColor={ActiveBackGroundColor}
              setActiveBackGroundColor={setActiveBackGroundColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
