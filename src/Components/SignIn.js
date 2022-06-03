import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {HandleSignInPostRequest} from './Services';
import CheckMarkImage from './Images/CheckMark.gif';
import NetworkStatus from './NetWorkStatus';
import useSound from 'use-sound';
import sound from './Images/forever-alone_1.mp3';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function SignIn (props) {
  const contextData = useContext (Context);
  const [Email, setEmail] = useState ('');
  const [Password, setPassword] = useState ('');
  const [CheckMArk, setCheckMArk] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ValidationPassword, setValidationPassword] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [playOn] = useSound (sound, {volume: 0.25});

  async function handleSubmit (Email, Password) {
    if (CheckOnline) {
      if (Email !== '' && Password !== '') {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test (Email)) {
          contextData.HandleDisplayLoading (true);
          let userData = {
            email: Email,
            password: Password,
          };
          let data = await HandleSignInPostRequest (userData);
          if (data) {
            contextData.HandleDisplayLoading (false);
            if (data === 200) {
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
          <NetworkStatus>
            {({online}) => (
              <Alert
                message={`${online ? 'online' : 'offline'}`}
                theme={online ? 'success' : 'warning'}
              />
            )}
          </NetworkStatus>
        </main>
        <div className="HeadingTextHolderSignIn">
          Login to your account
        </div>
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
        <div
          className="SubmitButtons FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
          onClick={() => {
            handleSubmit (Email, Password);
          }}
        >
          LogIn
        </div>
      </div>
    );
  }
}

export default SignIn;
