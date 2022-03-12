import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {HandleSignUpPostRequest} from './Services';
import CheckMarkImage from './Images/CheckMark.gif';
import NetworkStatus from './NetWorkStatus';
import useSound from 'use-sound';
import sound from './Images/forever-alone_1.mp3';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function LoginIn (props) {
  const contextData = useContext (Context);
  const [FistName, setFistName] = useState ('');
  const [LastName, setLastName] = useState ('');
  const [Email, setEmail] = useState ('');
  const [Password, setPassword] = useState ('');
  const [CheckMArk, setCheckMArk] = useState (false);
  const [ValidationFName, setValidationFName] = useState (false);
  const [ValidationLName, setValidationLName] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ValidationPassword, setValidationPassword] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [playOn] = useSound (sound, {volume: 0.25});

  async function handleSubmit (fName, lName, Email, Password) {
    if (CheckOnline) {
      if (fName !== '' && lName !== '' && Email !== '' && Password !== '') {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test (Email)) {
          let userData = {
            email: Email,
            firstName: fName,
            lastName: lName,
            password: Password,
          };
          let data = await HandleSignUpPostRequest (userData);
          if (data) {
            if (data === 201) {
              setCheckMArk (true);
            } else {
              setErrorMessage (data);
              if (data.includes (Email)) {
                setValidationEmail (true);
                setValidationPassword (false);
              } else {
                setValidationPassword (true);
                setValidationEmail (false);
              }
            }
          }
        } else {
          setErrorMessage ('invalid Email');
          setValidationEmail (true);
        }
      } else {
        if (fName === '') {
          setValidationFName (true);
        } else {
          setValidationFName (false);
        }
        if (lName === '') {
          setValidationLName (true);
        } else {
          setValidationLName (false);
        }
        if (Email === '') {
          setValidationEmail (true);
        } else {
          setValidationEmail (false);
        }
        if (Password === '') {
          setValidationPassword (true);
        } else {
          setValidationPassword (false);
        }
      }
    } else {
      playOn ();
      confirmAlert ({ 
        title: 'Your Are Currently Off Line',
        buttons: [
          {
            label: 'OK',
          },
        ],
      });
    }
  }

  const Alert = ({message}) => {
    if (message === 'online') {
      setCheckOnline (true);
    } else {
      setCheckOnline (false);
    }
    return <div />;
  };

  useEffect (
    () => {
      if (CheckMArk) {
        const timer = setTimeout (() => {
          contextData.HandleBackGroundColorOfModal (false);
          contextData.HandleShowModal (false);
        }, 2000);
        return () => clearTimeout (timer);
      }
    },
    [CheckMArk]
  );

  if (CheckMArk) {
    return (
      <div>
        <img src={CheckMarkImage} alt="loading..." width={370} height={400} />
      </div>
    );
  } else {
    return (
      <div>
        <main className="wrapper">

          <main className="wrapper">
            <NetworkStatus>
              {({online}) => (
                <Alert
                  message={`${online ? 'online' : 'offline'}`}
                  theme={online ? 'success' : 'warning'}
                />
              )}
            </NetworkStatus>
          </main>

        </main>
        <div className="HeadingTextHolderSignIn">Create your account</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <input
            className="SignUPName BorderRadius"
            placeholder="First Name*"
            style={{borderColor: ValidationFName ? 'red' : ''}}
            value={FistName}
            onChange={e => {
              setFistName (e.target.value);
              setValidationFName (false);
            }}
          />
          <input
            className="SignUPName BorderRadius"
            placeholder="Last Name*"
            style={{borderColor: ValidationLName ? 'red' : ''}}
            value={LastName}
            onChange={e => {
              setLastName (e.target.value);
              setValidationLName (false);
            }}
          />
          <input
            className="SignUPName BorderRadius"
            placeholder="Email*"
            style={{borderColor: ValidationEmail ? 'red' : ''}}
            value={Email}
            onChange={e => {
              setEmail (e.target.value);
              setValidationEmail (false);
              setErrorMessage ('');
            }}
          />
          <input
            className="SignUPName BorderRadius"
            placeholder="Password*"
            style={{borderColor: ValidationPassword ? 'red' : ''}}
            value={Password}
            onChange={e => {
              setPassword (e.target.value);
              setValidationPassword (false);
              setErrorMessage ('');
            }}
          />
          {ErrorMessage && <div>{ErrorMessage}</div>}
        </div>
        <div className="d-flex flex-column align-items-start">
          <div style={{display: 'flex'}}>
            <input
              className="CheckBox CommonCssClassCursorPointer BorderRadius"
              type="checkbox"
            />
            <div className="InnerTextCheckBox d-flex ">
              I agree to
              <div
                style={{
                  cursor: 'pointer',
                  color: 'rgba(101,105,109,.8)',
                  fontWeight: '700',
                }}
                //   onClick={GotoTerm}
              >
                Terms of Service
              </div>
              and
              <div
                style={{
                  cursor: 'pointer',
                  color: 'rgba(101,105,109,.8)',
                  fontWeight: '700',
                }}
                //   onClick={Privacy}
              >
                Privacy policy *
              </div>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <input
              className="CheckBox CommonCssClassCursorPointer BorderRadius"
              type="checkbox"
            />
            <div style={{color: 'black', color: '#576064'}}>
              Send me resume examples and updates
            </div>
          </div>
        </div>
        <div
          className="SubmitButtons FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
          onClick={() => {
            handleSubmit (FistName, LastName, Email, Password);
          }}
        >
          CREATE AN ACCOUNT
        </div>
      </div>
    );
  }
}
