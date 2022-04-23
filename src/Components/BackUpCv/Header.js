import React, {useState, useEffect} from 'react';
import {PhoneHeader, LinkHeader, LocationHeader} from '../JasonData';
function Header (props) {
  const [Shape, setShape] = useState (true);
  useEffect (() => {
    if (props.ImageShape === 2) {
      setShape (true);
    } else {
      setShape (false);
    }
  }, []);

  return (
    <div>
      <div className="OuterWrapperInputFieldHeader d-flex justify-content-between">
        <div>
          <div className="d-flex flex-column">
            <input
              style={{
                width: '270px',
                textTransform: props.HeaderSettingsList[5].selected ? '' : '',
              }}
              placeholder="Your Name"
              value={props.HeaderInputValue.name}
              onChange={() => {
                console.log ('onchange');
              }}
            />
            {props.HeaderSettingsList[0].selected &&
              <input
                className={`${props.Colors}`}
                style={{width: '270px', fontSize: '11px'}}
                placeholder={'Your next desired role?'}
                value={props.HeaderInputValue.title}
                onChange={() => {
                  console.log ('onchange');
                }}
              />}
          </div>
          <div className="d-flex align-items-center">
            {props.HeaderSettingsList[1].selected &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <PhoneHeader className={`HeaderIcons ${props.Colors}`} />
                <input
                  style={{width: '110px', fontSize: '11px'}}
                  placeholder={'phone'}
                  value={props.HeaderInputValue.phone}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>}
            {props.HeaderSettingsList[3].selected &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <div className={`HeaderIcons ${props.Colors}`}>
                  @
                </div>
                <input
                  style={{width: '100px', fontSize: '11px'}}
                  placeholder={'Email'}
                  value={props.HeaderInputValue.email}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>}
          </div>
          <div className="d-flex align-items-center">
            {props.HeaderSettingsList[2].selected &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <LinkHeader className={`HeaderIcons ${props.Colors}`} />
                <input
                  style={{width: '110px', fontSize: '11px'}}
                  placeholder={'Website/Link'}
                  value={props.HeaderInputValue.webLink}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>}
            {props.HeaderSettingsList[4].selected &&
              <div
                className="d-flex align-items-center mb-2"
                style={{gap: '12px', width: '50%'}}
              >
                <LocationHeader className={`HeaderIcons ${props.Colors}`} />
                <input
                  style={{width: '100px', fontSize: '11px'}}
                  placeholder={'Location'}
                  value={props.HeaderInputValue.location}
                  onChange={() => {
                    console.log ('onchange');
                  }}
                />
              </div>}
          </div>
        </div>
        {props.HeaderSettingsList[6].selected &&
          <div>
            <img
              style={{
                borderRadius: Shape ? '50%' : '',
                height: '90px',
                width: '90px',
              }}
              className="UserImg CommonCssClassCursorPointer BorderRadius"
              id="intro"
              alt={'intro'}
              src={props.image}
            />
          </div>}
      </div>
    </div>
  );
}

export default Header;
