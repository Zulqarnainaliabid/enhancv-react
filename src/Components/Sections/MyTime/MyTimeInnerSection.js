import React, {useState, useContext, useRef, useEffect} from 'react';
import {Context} from '../../Context/Context';
import {Setting} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import ApexChart from './Chart';
function MyTimeInnerSection (props) {
  const contextData = useContext (Context);
  const [DisplayToggleSwitch, setDisplayToggleSwitch] = useState (false);
  const {classes} = props;
  const [SliceNumber, setSliceNumber] = useState (3);
  function handleCloseToggleSwitch () {
    setDisplayToggleSwitch (false);
  }
  function HandleSetBackGroundColor (e) {
    props.setActiveBackGroundColor (true);
    handleCloseToggleSwitch ();
    contextData.HandleUpdateBackGroundHighLitter ();
    props.setHighLighter (false);
  }

  function HandleSetting () {
    setDisplayToggleSwitch (!DisplayToggleSwitch);
  }
  const childRef = useRef ();
  const [NumberOfSlice3, setNumberOfSlice3] = useState ('#00c091');
  const [NumberOfSlice6, setNumberOfSlice6] = useState ('#ccc');
  const [NumberOfSlice9, setNumberOfSlice9] = useState ('#ccc');
  const [Series, setSeries] = useState ([5, 5, 5]);
  const [Labels, setLabels] = useState (['A', 'B', 'C']);
  const [InputFieldChart, setInputFieldChart] = useState ([
    {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
    {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
    {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
  ]);

  function HandleNumberOfSlice3 () {
    setNumberOfSlice6 ('#ccc');
    setNumberOfSlice3 ('#00c091');
    setNumberOfSlice9 ('#ccc');
    setLabels (['A', 'B', 'C']);
    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      console.log ('value9', value);
      let temp = [];
      value = JSON.parse (value);
      var result = value.map (function (x) {
        return parseInt (x);
      });
      for (let i = 0; i < 3; i++) {
        temp[i] = result[i];
      }
      setSeries (temp);
    } else {
      setSeries ([5, 5, 5]);
    }
    setSliceNumber (3);
    if (localStorage.getItem ('InputFieldCartMyTime') !== null) {
      let value = localStorage.getItem ('InputFieldCartMyTime');
      value = JSON.parse (value);
      console.log ('o99==', value);
      let temp = [];
      for (let i = 0; i < 3; i++) {
        temp[i] = value[i];
      }
      setInputFieldChart ([...temp]);
    } else {
      setInputFieldChart ([
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
      ]);
    }
    const slice = {
      NumberOfSlice6: '#ccc',
      NumberOfSlice3: '#00c091',
      NumberOfSlice9: '#ccc',
      labels: ['A', 'B', 'C'],
    };
    localStorage.setItem ('arraySlice', JSON.stringify (slice));
  }

  function HandleNumberOfSlice6 () {
    setSliceNumber (6);
    setNumberOfSlice6 ('#00c091');
    setNumberOfSlice3 ('#ccc');
    setNumberOfSlice9 ('#ccc');
    setLabels (['A', 'B', 'C', 'D', 'E', 'F']);
    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      console.log ('value6', value);
      let temp = [];
      value = JSON.parse (value);
      var result = value.map (function (x) {
        return parseInt (x);
      });
      for (let i = 0; i < 6; i++) {
        temp[i] = result[i];
      }
      setSeries (temp);
    } else {
      setSeries ([5, 5, 5, 5, 5, 5]);
    }
    if (localStorage.getItem ('InputFieldCartMyTime') !== null) {
      let value = localStorage.getItem ('InputFieldCartMyTime');
      value = JSON.parse (value);
      let temp = [
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'D'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'E'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'F'},
      ];
      for (let i = 0; i <3; i++) {
        temp[i] = value[i];
      }
      setInputFieldChart ([...temp]);
    } else {
      setInputFieldChart ([
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'D'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'E'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'F'},
      ]);
    }
    const slice = {
      NumberOfSlice6: '#00c091',
      NumberOfSlice3: '#ccc',
      NumberOfSlice9: '#ccc',
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    };
    localStorage.setItem ('arraySlice', JSON.stringify (slice));
  }
  function HandleNumberOfSlice9 () {
    setSliceNumber (9);
    setNumberOfSlice6 ('#ccc');
    setNumberOfSlice3 ('#ccc');
    setNumberOfSlice9 ('#00c091');
    setLabels (['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      console.log ('value9', value);
      let temp = [];
      value = JSON.parse (value);
      var result = value.map (function (x) {
        return parseInt (x);
      });
      for (let i = 0; i < result.length; i++) {
        temp[i] = result[i];
      }
      setSeries (temp);
    } else {
      setSeries ([5, 5, 5, 5, 5, 5, 5, 5]);
    }

    if (localStorage.getItem ('InputFieldCartMyTime') !== null) {
      let value = localStorage.getItem ('InputFieldCartMyTime');
      value = JSON.parse (value);
      let temp = [
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'D'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'E'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'F'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'G'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'F'},
      ];
      for (let i = 0; i < 3; i++) {
        temp[i] = value[i];
      }
      setInputFieldChart ([...temp]);
    } else {
      setInputFieldChart ([
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'D'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'E'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'F'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'G'},
        {InputFieldActivity: '', InputFieldPercentage: '', label: 'F'},
      ]);
    }

    const slice = {
      NumberOfSlice6: '#ccc',
      NumberOfSlice3: '#ccc',
      NumberOfSlice9: '#00c091',
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    };
    localStorage.setItem ('arraySlice', JSON.stringify (slice));
  }

  function handleInputFiled (index, inputField) {
    InputFieldChart[index].InputFieldActivity = inputField;
    setInputFieldChart ([...InputFieldChart]);
    localStorage.setItem (
      'InputFieldCartMyTime',
      JSON.stringify (InputFieldChart)
    );
  }
  function handleInputFiledTypePercentage (index, inputField) {
    InputFieldChart[index].InputFieldPercentage = inputField;
    setInputFieldChart ([...InputFieldChart]);
    localStorage.setItem (
      'InputFieldCartMyTime',
      JSON.stringify (InputFieldChart)
    );
  }

  function HandleSeries (array) {
    var result = array.map (function (x) {
      return parseInt (x);
    });
    let temp4 = [];
    if (SliceNumber === 3) {
      for (let i = 0; i < 4; i++) {
        temp4[i] = result[i];
      }
    } else if (SliceNumber === 6) {
      for (let i = 0; i < 6; i++) {
        temp4[i] = result[i];
      }
    } else if (SliceNumber === 9) {
      for (let i = 0; i < result.length; i++) {
        temp4[i] = result[i];
      }
    }
    setSeries ([...temp4]);
    localStorage.setItem ('arraySeries', JSON.stringify (temp4));
  }

  useEffect (() => {
    if (localStorage.getItem ('arraySlice') !== null) {
      let value = localStorage.getItem ('arraySlice');
      value = JSON.parse (value);
      setNumberOfSlice6 (value.NumberOfSlice6);
      setNumberOfSlice3 (value.NumberOfSlice3);
      setNumberOfSlice9 (value.NumberOfSlice9);
      setLabels (value.labels);
    }

    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      let temp = [];
      value = JSON.parse (value);
      var result = value.map (function (x) {
        return parseInt (x);
      });
      for (let i = 0; i < 6; i++) {
        temp[i] = result[i];
      }
      setSeries (temp);
    }

    if (localStorage.getItem ('InputFieldCartMyTime') !== null) {
      let value = localStorage.getItem ('InputFieldCartMyTime');
      value = JSON.parse (value);
      setInputFieldChart ([...value]);
    }
  }, []);

  return (
    <div>
      {props.ActiveBackGroundColor &&
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: 'relative',
          }}
        >
          <div className="headingOptionBoxRight CommonCssClassAbsolutePosition ">
            <div
              className="outerWrapperHeaderIcons"
              style={{border: 'unset', padding: '8px'}}
            >
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
                    <div className="InnerWraperToggleButtonsSlice">
                      <div className="ToggleButtonsLabelSlice">
                        Number of slice
                      </div>
                      <div
                        className="RadioButtonsToggleButtons"
                        style={{backgroundColor: NumberOfSlice3}}
                        onClick={HandleNumberOfSlice3}
                      />
                      <div
                        className="RadioButtonsToggleButtons"
                        style={{backgroundColor: NumberOfSlice6}}
                        onClick={HandleNumberOfSlice6}
                      />
                      <div
                        className="RadioButtonsToggleButtons"
                        style={{backgroundColor: NumberOfSlice9}}
                        onClick={HandleNumberOfSlice9}
                      />
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>}
      <div>
        <div
          onClick={HandleSetBackGroundColor}
          className="outerWrapperBox BorderRadius d-flex flex-column flex-wrap"
          style={{
            backgroundColor: props.ActiveBackGroundColor ? 'white' : '',
            border: props.ActiveBackGroundColor ? '1px solid #60d5ba' : '',
            alignItems: 'unset',
            position: 'relative',
          }}
        >
          <div style={{width: '100%'}}>
            <ApexChart
              ref={childRef}
              series={Series}
              labels={Labels}
              InputFieldChart={InputFieldChart}
              handleInputFiled={handleInputFiled}
              handleInputFiledTypePercentage={handleInputFiledTypePercentage}
              HandleSeries={HandleSeries}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (MyTimeInnerSection);
export default StyledApp;
