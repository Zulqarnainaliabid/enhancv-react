import React, {useState, useContext, useRef, useEffect} from 'react';
import {Context} from '../../Context/Context';
import Switch from 'react-switch';
import {Setting} from '../../JasonData';
import {CSSTransition} from 'react-transition-group';
import styles from '../../Style';
import injectSheet from 'react-jss';
import InputField from '../../InputField';
// import React, {useState, useEffect, useRef} from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {CgArrangeFront} from 'react-icons/cg';
import ApexChart from './Chart';
import {RiSettings5Fill} from 'react-icons/ri';
function MyTimeInnerSection (props) {
  const contextData = useContext (Context);
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
  }

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
    if (data.name === 'title') {
      temp[data.index].title = data.value;
    } else {
      temp[data.index].username = data.value;
    }
    props.setList ([...temp]);
    localStorage.setItem ('MyTime', JSON.stringify (temp));
  }

  function HandleSetting () {
    setDisplayToggleSwitch (!DisplayToggleSwitch);
  }

  const inputref = useRef (null);
  const childRef = useRef ();
  const [ShowHeaderButton, setShowHeaderButton] = useState ('none');
  const [backgroundColor, setbackgroundColor] = useState (null);
  const [borderBottm, setborderBottm] = useState ('none');
  const [UpdateState, setUpdateState] = useState (0);
  const [ToggleButtons, setToggleButtons] = useState (false);
  const [UnderBoxcolor, setUnderBoxcolor] = useState (false);
  const [SliceButton, setSliceButton] = useState (false);
  const [NumberOfSlice3, setNumberOfSlice3] = useState ('#00c091');
  const [NumberOfSlice6, setNumberOfSlice6] = useState ('#ccc');
  const [NumberOfSlice9, setNumberOfSlice9] = useState ('#ccc');
  const [series, setseries] = useState ([5, 5, 5, 5]);
  const [labels, setlabels] = useState (['A', 'B', 'C', 'D']);
  const [SliceNumber, setSliceNumber] = useState (3);

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
    setseries ([...temp4]);
  }
  function HandleNumberOfslice3 () {
    setNumberOfSlice6 ('#ccc');
    setNumberOfSlice3 ('#00c091');
    setNumberOfSlice9 ('#ccc');

    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      let temp = [];
      value = JSON.parse (value);
      var result = value.map (function (x) {
        return parseInt (x);
      });
      for (let i = 0; i < 4; i++) {
        temp[i] = result[i];
      }
      setseries (temp);
    } else {
      setseries ([5, 5, 5, 5]);
    }
    setlabels (['A', 'B', 'C', 'D']);
    setSliceNumber (3);
    const slice = {
      NumberOfSlice6: '#ccc',
      NumberOfSlice3: '#00c091',
      NumberOfSlice9: '#ccc',
      series: [5, 5, 5, 5],
      labels: ['A', 'B', 'C', 'D'],
    };
    localStorage.setItem ('arraySlice', JSON.stringify (slice));
  }
  function HandleNumberOfslice6 () {
    setNumberOfSlice6 ('#00c091');
    setNumberOfSlice3 ('#ccc');
    setNumberOfSlice9 ('#ccc');
    setSliceNumber (6);
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
      setseries (temp);
    } else {
      setseries ([5, 5, 5, 5, 5, 5]);
    }
    setlabels (['A', 'B', 'C', 'D', 'E', 'F']);
    const slice = {
      NumberOfSlice6: '#00c091',
      NumberOfSlice3: '#ccc',
      NumberOfSlice9: '#ccc',
      series: [5, 5, 5, 5, 5, 5],
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    };
    localStorage.setItem ('arraySlice', JSON.stringify (slice));
  }
  function HandleNumberOfslice9 () {
    setNumberOfSlice6 ('#ccc');
    setNumberOfSlice3 ('#ccc');
    setNumberOfSlice9 ('#00c091');
    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      let temp = [];
      value = JSON.parse (value);
      var result = value.map (function (x) {
        return parseInt (x);
      });
      for (let i = 0; i < result.length; i++) {
        temp[i] = result[i];
      }
      setseries (temp);
    } else {
      setseries ([5, 5, 5, 5, 5, 5, 5, 5]);
    }
    setlabels (['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    setSliceNumber (9);
    const slice = {
      NumberOfSlice6: '#ccc',
      NumberOfSlice3: '#ccc',
      NumberOfSlice9: '#00c091',
      series: [5, 5, 5, 5, 5, 5, 5, 5],
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    };
    localStorage.setItem ('arraySlice', JSON.stringify (slice));
  }
  useEffect (() => {
    if (localStorage.getItem ('arraySlice') !== null) {
      let value = localStorage.getItem ('arraySlice');
      console.log("jj",value)
      value = JSON.parse (value);
      setNumberOfSlice6 (value.NumberOfSlice6);
      setNumberOfSlice3 (value.NumberOfSlice3);
      setNumberOfSlice9 (value.NumberOfSlice9);
      setlabels (value.labels);
      
    }
  }, []);
  useEffect (() => {
    if (localStorage.getItem ('arraySeries') !== null) {
      let value = localStorage.getItem ('arraySeries');
      value = JSON.parse (value);
      console.log("99",value)
      var result = value.map (function (x) {
        return parseInt (x);
      });
      HandleSeries (result);
      setseries ([...result]);
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
          style={{display: props.item.selected ? 'flex' : 'none' ,top:"-30px"}}
          className="headingOptionBoxRight CommonCssClassAbsolutePosition "
        >
          <div className="outerWrapperHeaderIcons" style={{border: 'unset',padding:"8px"}}>
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
                  <div className="InnerWraperToggleButtonsSlice">
                    <div className="ToggleButtonsLabelSlice">
                      Number of slice
                    </div>
                    <div
                      className="RadioButtonsToggleButtons"
                      style={{backgroundColor: NumberOfSlice3}}
                      onClick={HandleNumberOfslice3}
                    />
                    <div
                      className="RadioButtonsToggleButtons"
                      style={{backgroundColor: NumberOfSlice6}}
                      onClick={HandleNumberOfslice6}
                    />
                    <div
                      className="RadioButtonsToggleButtons"
                      style={{backgroundColor: NumberOfSlice9}}
                      onClick={HandleNumberOfslice9}
                    />
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
          <div style={{width:"100%"}}>
            <ApexChart
              ref={childRef}
              series={series}
              labels={labels}
              SliceNumber={SliceNumber}
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
