import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../../Context/Context';
import Experience from './ExperienceInnerSection';
import {Rings} from 'react-loader-spinner';
import InputField from '../../InputField';
import {Plus, Delete, Template} from '../../JasonData';
export default function ExperienceOuterSection (props) {
  const contextData = useContext (Context);
  const [HighLighter, setHighLighter] = useState (false);
  const [array, setState] = useState ([
    {
      selected: false,
      toggleSwitch: [
        {name: 'Show Title', selected: true},
        {name: 'Show CompanyName', selected: true},
        {name: 'Show Description', selected: true},
        {name: 'Show Bullets', selected: true},
        {name: 'Show Location', selected: true},
        {name: 'Show Period', selected: true},
        {name: 'Show Link', selected: true},
      ],
      value: {
        title: '',
        companyName: '',
        timePeriod: '',
        location: '',
        url: '',
        companyDescription: '',
        bullets: '',
      },
      date: {
        monthFrom: '',
        monthOngoing: '',
        yearFrom: '',
        yearOngoing: '',
        selectedSlashFrom: false,
        selectedSlashOngoing: false,
        selectedMinus: false,
        onGoing: false,
      },
      yearFromPicker: [
        {name: '2011', selected: false},
        {name: '2012', selected: false},
        {name: '2013', selected: false},
        {name: '2014', selected: false},
        {name: '2015', selected: false},
        {name: '2016', selected: false},
        {name: '2017', selected: false},
        {name: '2018', selected: false},
        {name: '2019', selected: false},
        {name: '2020', selected: false},
        {name: '2021', selected: false},
        {name: '2022', selected: false},
      ],
      yearToPicker: [
        {name: '2011', selected: false},
        {name: '2012', selected: false},
        {name: '2013', selected: false},
        {name: '2014', selected: false},
        {name: '2015', selected: false},
        {name: '2016', selected: false},
        {name: '2017', selected: false},
        {name: '2018', selected: false},
        {name: '2019', selected: false},
        {name: '2020', selected: false},
        {name: '2021', selected: false},
        {name: '2022', selected: false},
      ],
      monthFromPicker: [
        {name: 'Jan', number: '01', selected: false},
        {name: 'Feb', number: '02', selected: false},
        {name: 'Mar', number: '03', selected: false},
        {name: 'Apr', number: '04', selected: false},
        {name: 'May', number: '05', selected: false},
        {name: 'Jun', number: '06', selected: false},
        {name: 'Jul', number: '07', selected: false},
        {name: 'Aug', number: '08', selected: false},
        {name: 'Sep', number: '09', selected: false},
        {name: 'Oct', number: '10', selected: false},
        {name: 'Nov', number: '11', selected: false},
        {name: 'Dec', number: '12', selected: false},
      ],
      monthToPicker: [
        {name: 'Jan', number: '01', selected: false},
        {name: 'Feb', number: '02', selected: false},
        {name: 'Mar', number: '03', selected: false},
        {name: 'Apr', number: '04', selected: false},
        {name: 'May', number: '05', selected: false},
        {name: 'Jun', number: '06', selected: false},
        {name: 'Jul', number: '07', selected: false},
        {name: 'Aug', number: '08', selected: false},
        {name: 'Sep', number: '09', selected: false},
        {name: 'Oct', number: '10', selected: false},
        {name: 'Nov', number: '11', selected: false},
        {name: 'Dec', number: '12', selected: false},
      ],
    },
  ]);
  const [ToggleArrowDown, setToggleArrowDown] = useState (true);
  const [ToggleArrowUp, setToggleArrowUp] = useState (true);
  const [DisplayLoader, setDisplayLoader] = useState (false);
  const [ValueFindMeMeOnline, setValueFindMeMeOnline] = useState ('');

  function GetItemFindMeOnline () {
    let value = localStorage.getItem ('Experience');
    value = JSON.parse (value);
    return value;
  }

  function handleInnerHight () {
    let temp = GetItemFindMeOnline ();
    if (temp === null || temp == undefined) {
      temp = array;
    }
    temp.map ((item, index) => {
      temp[index].selected = false;
    });
    setState ([...temp]);
  }

  function HandleCompleteBoarderSelected () {
    setHighLighter (true);
    handleInnerHight ();
  }

  function IsActive (IsActive) {
    if (IsActive) {
      setToggleArrowDown (IsActive);
    } else {
      setToggleArrowDown (IsActive);
    }
  }
  function IsActiveUp (IsActive) {
    if (IsActive) {
      setToggleArrowUp (IsActive);
    } else {
      setToggleArrowUp (IsActive);
    }
  }

  function HandlerAddItemInArray () {
    setHighLighter (false);
    if (array.length <= 4) {
      if (array === [] || array.length === 0) {
        setToggleArrowDown (false);
        setToggleArrowUp (false);
      } else {
        setToggleArrowDown (false);
        setToggleArrowUp (true);
      }
      array.push ({
        selected: false,
        toggleSwitch: [
          {name: 'Show Title', selected: true},
          {name: 'Show CompanyName', selected: true},
          {name: 'Show Description', selected: true},
          {name: 'Show Bullets', selected: true},
          {name: 'Show Location', selected: true},
          {name: 'Show Period', selected: true},
          {name: 'Show Link', selected: true},
        ],
        value: {
          title: '',
          companyName: '',
          timePeriod: '',
          location: '',
          url: '',
          companyDescription: '',
          bullets: '',
        },
        date: {
          monthFrom: '',
          monthOngoing: '',
          yearFrom: '',
          yearOngoing: '',
          selectedSlashFrom: false,
          selectedSlashOngoing: false,
          selectedMinus: false,
          onGoing: false,
        },
        yearFromPicker: [
          {name: '2011', selected: false},
          {name: '2012', selected: false},
          {name: '2013', selected: false},
          {name: '2014', selected: false},
          {name: '2015', selected: false},
          {name: '2016', selected: false},
          {name: '2017', selected: false},
          {name: '2018', selected: false},
          {name: '2019', selected: false},
          {name: '2020', selected: false},
          {name: '2021', selected: false},
          {name: '2022', selected: false},
        ],
        yearToPicker: [
          {name: '2011', selected: false},
          {name: '2012', selected: false},
          {name: '2013', selected: false},
          {name: '2014', selected: false},
          {name: '2015', selected: false},
          {name: '2016', selected: false},
          {name: '2017', selected: false},
          {name: '2018', selected: false},
          {name: '2019', selected: false},
          {name: '2020', selected: false},
          {name: '2021', selected: false},
          {name: '2022', selected: false},
        ],
        monthFromPicker: [
          {name: 'Jan', number: '01', selected: false},
          {name: 'Feb', number: '02', selected: false},
          {name: 'Mar', number: '03', selected: false},
          {name: 'Apr', number: '04', selected: false},
          {name: 'May', number: '05', selected: false},
          {name: 'Jun', number: '06', selected: false},
          {name: 'Jul', number: '07', selected: false},
          {name: 'Aug', number: '08', selected: false},
          {name: 'Sep', number: '09', selected: false},
          {name: 'Oct', number: '10', selected: false},
          {name: 'Nov', number: '11', selected: false},
          {name: 'Dec', number: '12', selected: false},
        ],
        monthToPicker: [
          {name: 'Jan', number: '01', selected: false},
          {name: 'Feb', number: '02', selected: false},
          {name: 'Mar', number: '03', selected: false},
          {name: 'Apr', number: '04', selected: false},
          {name: 'May', number: '05', selected: false},
          {name: 'Jun', number: '06', selected: false},
          {name: 'Jul', number: '07', selected: false},
          {name: 'Aug', number: '08', selected: false},
          {name: 'Sep', number: '09', selected: false},
          {name: 'Oct', number: '10', selected: false},
          {name: 'Nov', number: '11', selected: false},
          {name: 'Dec', number: '12', selected: false},
        ],
      });
      let temp = [];
      temp = array;
      temp.map ((item, index) => {
        item.selected = false;
      });
      let index = temp.length - 1;
      temp[index].selected = true;
      setState ([...temp]);
      localStorage.setItem ('Experience', JSON.stringify (array));
    } else {
      contextData.HandleBackGroundColorOfModal (true);
      contextData.HandleDisplayDropDownAlertMessage (true);
    }
  }

  function DeleteOneItemInArray (index) {
    array.splice (index, 1);
    setState ([...array]);
    localStorage.setItem ('Experience', JSON.stringify (array));
    setDisplayLoader (true);
  }

  useEffect (() => {
    let value = localStorage.getItem ('HeadingValueExperience');
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
    handleInnerHight ();
  }

  useEffect (
    () => {
      if (contextData.BackGroundHighLitter !== 'Experience') {
        setHighLighter (false);
        handleInnerHight ();
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
    if (data.name === 'Experience') {
      setValueFindMeMeOnline (data.value);
    }
    localStorage.setItem (
      'HeadingValueExperience',
      JSON.stringify (data.value)
    );
  }

  useEffect (
    () => {
      if (contextData.AddSectionName === 'ExperienceOuterSection') {
        localStorage.setItem ('Experience', JSON.stringify (array));
        contextData.HandleAddSectionName (null);
      }
    },
    [contextData.AddSectionName]
  );

  return (
    <div>
      <div
        className="outerWrapperCompleteBox"
        style={{backgroundColor: HighLighter ? 'white' : ''}}
        onClick={e => {
          props.setDisplayBackGroundColor (true);
          props.HandleBackGroundColor (e);
          contextData.HandleUpdateBackGroundHighLitter ('Experience');
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center bg-danger"
          style={{position: 'relative'}}
        >
          {HighLighter &&
            <div className="headingOptionBoxRight d-flex CommonCssClassAbsolutePosition">
              <div
                onClick={HandlerAddItemInArray}
                className="d-flex  align-items-center outerWrapperPlusAndNewEntry CommonCssClassCursorPointer"
              >
                <Plus className="newEntryPlusIcon CommonCssClassCursorPointer" />
                <div className="newEntryText">New Entry</div>
              </div>
              <div className="outerWrapperHeaderIcons">
                <Delete
                  onClick={() => {
                    props.HandleRemoveElement ('ExperienceOuterSection');
                    contextData.HandleRemoveElement ('ExperienceOuterSection');
                  }}
                  className="DeleteIcon CommonCssClassCursorPointer"
                />
              </div>
              <div
                className="outerWrapperHeaderIcons"
                style={{border: 'unset'}}
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
            placeHolder={'EXPERIENCE'}
            otherStyle={'SectionHeaderTextHolder'}
            value={ValueFindMeMeOnline}
            index={0}
            name={'Experience'}
            handleInputData={handleInputData}
            useUpperCase={false}
            UpperCaseHeaderInputField={false}
          />
        </div>
        {DisplayLoader
          ? <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: 'rgba(0, 0, 0, 0.712)',
              }}
            >
              <Rings color="white" height={180} width={180} />
            </div>
          : <div>
              {array &&
                array.map ((item, index) => {
                  let display_dashesLine = true;
                  if (array.length - 1 === index) {
                    display_dashesLine = false;
                  }
                  return (
                    <div key={index}>
                      <Experience
                        item={item}
                        IsActive={IsActive}
                        IsActiveUp={IsActiveUp}
                        ToggleArrowDown={ToggleArrowDown}
                        ToggleArrowUp={ToggleArrowUp}
                        index={index}
                        list={array}
                        setList={setState}
                        HandlerAddItemInArray={HandlerAddItemInArray}
                        DeleteOneItemInArray={DeleteOneItemInArray}
                        setHighLighter={setHighLighter}
                        display_dashesLine={display_dashesLine}
                      />
                    </div>
                  );
                })}
            </div>}
      </div>
    </div>
  );
}
