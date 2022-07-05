import React, {useContext, useState, useEffect} from 'react';
import OuterWrapperBoxForHeader from './OuterWrapperBoxforHeader';
import InputField from './InputField';
import {
  PhoneHeader,
  LinkHeader,
  LocationHeader,
  SettingHeader,
  CameraHeader,
} from './JasonData';
import {Context} from '../Components/Context/Context';
import UserImage from './UserImage';
import Settings from './Context/Settings';

export function HeaderContent () {
  const contextData = useContext (Context);
  const [ShowTitle, setShowTitle] = useState (true);
  const [ShowPhone, setShowPhone] = useState (true);
  const [ShowLink, setShowLink] = useState (true);
  const [ShowEmail, setShowEmail] = useState (true);
  const [ShowLocation, setShowLocation] = useState (true);
  const [UpperCase, setUpperCase] = useState (true);
  const [ShowPhoto, setShowPhoto] = useState (true);
  const [Color, setColor] = useState ('blueColor');
  const [Name, setName] = useState ('');
  const [Title, setTitle] = useState ('');
  const [Phone, setPhone] = useState ('');
  const [Email, setEmail] = useState ('');
  const [WebLink, setWebLink] = useState ('');
  const [Location, setLocation] = useState ('');
  const [InputData, setInputData] = useState ({
    name: '',
    title: '',
    phone: '',
    email: '',
    webLink: '',
    location: '',
  });
  function GetInputData () {
    let value = localStorage.getItem ('HeaderInputValue');
    value = JSON.parse (value);
    if (value === undefined || value === null) {
      value = {
        name: '',
        title: '',
        phone: '',
        email: '',
        webLink: '',
        location: '',
      };
    }
    setName (value.name);
    setTitle (value.title);
    setPhone (value.phone);
    setEmail (value.email);
    setWebLink (value.webLink);
    setLocation (value.location);
  }

  useEffect (
    () => {
      let value = localStorage.getItem ('HeaderSettingsList');
      value = JSON.parse (value);
      if (value !== null) {
        setShowTitle (value[0].selected);
        setShowPhone (value[1].selected);
        setShowLink (value[2].selected);
        setShowEmail (value[3].selected);
        setShowLocation (value[4].selected);
        setUpperCase (value[5].selected);
        setShowPhoto (value[6].selected);
      }
      GetInputData ();
    },
    [contextData.ToggleSettingsValue]
  );

  function handleInputData (data) {
    let value = localStorage.getItem ('HeaderInputValue');
    value = JSON.parse (value);
    if (value === null) {
      value = {
        email: '',
        location: '',
        name: '',
        phone: '',
        title: '',
        webLink: '',
      };
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    }
    if (data.name === 'HeaderValues_name') {
      setName (data.value);
      InputData.name = data.value;

      value.name = data.value;
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    } else if (data.name === 'HeaderValues_title') {
      setTitle (data.value);
      InputData.title = data.value;

      console.log ('heuu', data);
      value.title = data.value;
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    } else if (data.name === 'HeaderValues_phone') {
      setPhone (data.value);
      InputData.phone = data.value;

      value.phone = data.value;
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    } else if (data.name === 'HeaderValues_email') {
      setEmail (data.value);
      InputData.email = data.value;

      value.email = data.value;
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    } else if (data.name === 'HeaderValues_link') {
      setWebLink (data.value);
      InputData.webLink = data.value;

      value.webLink = data.value;
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    } else if (data.name === 'HeaderValues_location') {
      setLocation (data.value);
      InputData.location = data.value;

      value.location = data.value;
      localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
    }
    // localStorage.setItem ('HeaderInputValue', JSON.stringify (value));
  }
  return (
    <div>
      <div
        className="OuterWrapperInputFieldHeader d-flex justify-content-between"
        onClick={() => {
          contextData.HandleDisplaySettings (false);
        }}
      >
        <div style={{width: '100%'}}>

          <InputField
            UpperCaseHeaderInputField={UpperCase}
            useUpperCase={true}
            placeHolder={'Your Name'}
            otherStyle={'textareaHeaderTitle'}
            name={'HeaderValues_name'}
            value={Name}
            handleInputData={handleInputData}
          />
          {ShowTitle &&
            <InputField
              placeHolder={'Your next desired role?'}
              otherStyle={'textareaHeaderSubTitle'}
              name={'HeaderValues_title'}
              value={Title}
              handleInputData={handleInputData}
              color={contextData.SelectedColor}
              useUpperCase={false}
              UpperCaseHeaderInputField={false}
            />}
          <div className="d-flex align-items-center">
            {ShowPhone &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <PhoneHeader
                  className={`HeaderIcons ${contextData.SelectedColor}`}
                />
                <InputField
                  placeHolder={'phone'}
                  otherStyle={'textareaHeaderLinksTitle'}
                  name={'HeaderValues_phone'}
                  value={Phone}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
              </div>}
            {ShowEmail &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <div className={`HeaderIcons ${contextData.SelectedColor}`}>
                  @
                </div>
                <InputField
                  placeHolder={'Email'}
                  otherStyle={'textareaHeaderLinksTitle'}
                  name={'HeaderValues_email'}
                  value={Email}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
              </div>}
          </div>
          <div className="d-flex align-items-center">
            {ShowLink &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <LinkHeader
                  className={`HeaderIcons ${contextData.SelectedColor}`}
                />
                <InputField
                  placeHolder={'Website/Link'}
                  otherStyle={'textareaHeaderLinksTitle'}
                  value={WebLink}
                  name={'HeaderValues_link'}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
              </div>}
            {ShowLocation &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <LocationHeader
                  className={`HeaderIcons ${contextData.SelectedColor}`}
                />
                <InputField
                  placeHolder={'Location'}
                  otherStyle={'textareaHeaderLinksTitle'}
                  value={Location}
                  name={'HeaderValues_location'}
                  handleInputData={handleInputData}
                  useUpperCase={false}
                  UpperCaseHeaderInputField={false}
                />
              </div>}
          </div>
        </div>
        {ShowPhoto && <div><UserImage /></div>}
      </div>
    </div>
  );
}
function Header (props) {
  const [HighLighter, setHighLighter] = useState (false);
  let Content = <HeaderContent />;
  const contextData = useContext (Context);
  const [HeaderSettingsList, setHeaderSettingsList] = useState ([
    {Label: 'Show Title', selected: false},
    {Label: 'Show Phone', selected: false},
    {Label: 'Show Link', selected: false},
    {Label: 'Show Email', selected: false},
    {Label: 'Show Location', selected: false},
    {Label: 'Uppercase Name', selected: false},
    {Label: 'Show Photo', selected: false},
  ]);

  useEffect (
    () => {
      alertUser ();
    },
    [contextData.UpdateBachGroundHighLitter]
  );

  function alertUser () {
    setHighLighter (false);
  }
  useEffect (
    () => {
      if (contextData.BackGroundHighLitter !== 'header') {
        setHighLighter (false);
      }
    },
    [contextData.BackGroundHighLitter]
  );

  useEffect (() => {
    let userImage = localStorage.getItem ('UserImage');
    userImage = JSON.parse (userImage);
    if (userImage !== null) {
      contextData.HandleUpdateUserImage (userImage);
    }
  }, []);

  return (
    <div>
      {HighLighter &&
        <div className="d-flex SettingContainerInTopOfHeader CommonCssClassAbsolutePosition CommonCssClassCursorPointer">
          <CameraHeader
            className="IconsInTopOfHeader"
            onClick={() => {
              contextData.HandleBackGroundColorOfModal (true);
              contextData.HandleToggleModalCSSClass (
                'outerWrapperModalImagePicker'
              );
              contextData.HandleToggleModal ('ImagePicker');
              contextData.HandleShowModal (true);
            }}
          />
          <SettingHeader
            className="IconsInTopOfHeader"
            onClick={() => {
              contextData.HandleDisplaySettings (!contextData.DisplaySettings);
            }}
          />
          <div style={{position: 'absolute'}}>
            <Settings
              List={HeaderSettingsList}
              ListName={'HeaderSettingsList'}
            />
          </div>
        </div>}
      <OuterWrapperBoxForHeader
        setDisplayBackGroundColor={props.setDisplayBackGroundColor}
        Content={Content}
        function={setHighLighter}
        display={HighLighter}
        HandleBackGroundColor={props.HandleBackGroundColor}
      />
    </div>
  );
}

export default Header;
