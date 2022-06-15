import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {HandleSignUpPostRequest} from './Services';
import CheckMarkImage from './Images/CheckMark.gif';
import NetworkStatus from './NetWorkStatus';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from 'react-bootstrap';
import ExampleInputField from './Example/ExampleInputField';
import ClickNHold from 'react-click-n-hold';
import {BsEye} from 'react-icons/bs';

const initialValues = {
  FistName: '',
  LastName: '',
  Email: '',
  Password: '',
};

export default function LoginIn (props) {
  const contextData = useContext (Context);
  const [values, setValues] = useState (initialValues);
  const [CheckMArk, setCheckMArk] = useState (false);
  const [ValidationFName, setValidationFName] = useState (false);
  const [ValidationLName, setValidationLName] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ValidationPassword, setValidationPassword] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [PasswordType, setPasswordType] = useState ('password');
  const [ToggleDisabledLoginButton, setToggleDisabledLoginButton] = useState (
    true
  );
  async function handleSubmit (fName, lName, Email, Password) {
    if (CheckOnline) {
      if (fName !== '' && lName !== '' && Email !== '' && Password !== '') {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test (Email)) {
          contextData.HandleDisplayLoading (true);
          let userData = {
            email: Email,
            firstName: fName,
            lastName: lName,
            password: Password,
          };
          let data = await HandleSignUpPostRequest (userData);
          if (data) {
            contextData.HandleDisplayLoading (false);
            if (data === 201) {
              setCheckMArk (true);
              localStorage.setItem (
                'Account',
                JSON.stringify ({
                  userFname: values.FistName,
                  userLname: values.LastName,
                  userEmail: values.Email,
                  userPassword:values.Password
                })
                
              );
              contextData.UpdateHandleAccountSuccess(!contextData.UpdateAccountSuccess)
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
      // playOn ();
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
  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValidationPassword (false);
        setValidationEmail (false);
        setValidationLName (false);
        setValidationFName (false);
        setErrorMessage ('');
      }, 2000);
      return () => clearTimeout (timer);
    },
    [
      ValidationPassword,
      ValidationEmail,
      ValidationLName,
      ValidationFName,
      ErrorMessage,
    ]
  );
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
        }, 3000);
        return () => clearTimeout (timer);
      }
    },
    [CheckMArk]
  );

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues ({
      ...values,
      [name]: value,
    });
  };

  useEffect (
    () => {
      if (
        values.FistName === '' &&
        values.LastName === '' &&
        values.Email === '' &&
        values.Password === ''
      ) {
        setToggleDisabledLoginButton (true);
        console.log ('calling');
      } else {
        setToggleDisabledLoginButton (false);
      }
    },
    [values]
  );

  function start (e) {
    console.log ('START');
    setPasswordType ('text');
  }

  function end (e, enough) {
    console.log ('END');
    setPasswordType ('password');
    console.log (
      enough ? 'Click released after enough time' : 'Click released too soon'
    );
  }

  function clickNHold (e) {
    console.log ('CLICK AND HOLD');
  }

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
        {/* <ExampleInputField/> */}
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
            value={values.FistName}
            name="FistName"
            onChange={handleInputChange}
          />
          <input
            className="SignUPName BorderRadius"
            placeholder="Last Name*"
            style={{borderColor: ValidationLName ? 'red' : ''}}
            value={values.LastName}
            name="LastName"
            onChange={handleInputChange}
          />
          <input
            className="SignUPName BorderRadius"
            placeholder="Email*"
            style={{borderColor: ValidationEmail ? 'red' : ''}}
            value={values.Email}
            name="Email"
            onChange={handleInputChange}
          />
          <div className="SignUPName BorderRadius justify-content-between d-flex align-items-center">
            <input
              className="w-100"
              placeholder="Password*"
              style={{borderColor: ValidationPassword ? 'red' : ''}}
              value={values.Password}
              type={PasswordType}
              name="Password"
              onChange={handleInputChange}
            />
            <ClickNHold
              time={2} // Time to keep pressing. Default is 2
              onStart={start} // Start callback
              onClickNHold={clickNHold} //Timeout callback
              onEnd={end}
            >
              <BsEye />
            </ClickNHold>
          </div>

          {ErrorMessage && <div style={{color: 'red'}}>{ErrorMessage}</div>}
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
        <Button
          disabled={ToggleDisabledLoginButton}
          className="SubmitButtons w-100 FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
          onClick={() => {
            handleSubmit (
              values.FistName,
              values.LastName,
              values.Email,
              values.Password
            );
          }}
        >
          CREATE AN ACCOUNT
        </Button>
      </div>
    );
  }
}
