import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import Navbar from './Navbar';
import Footer from './Footer';
import {Button} from 'react-bootstrap';
import ClickNHold from 'react-click-n-hold';
import {BsEye} from 'react-icons/bs';
import CheckMarkImage from './Images/CheckMark.gif';
import NetworkStatus from './NetWorkStatus';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Modal from './Modal';
import {CSSTransition} from 'react-transition-group';
import DropDown from './DropDown';
import {HandleResetPassword} from './Services';
import {useLocation} from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
function ResetPassword (props) {
  const contextData = useContext (Context);

  let initialValues = {
    Password: '',
    ConfirmPassword: '',
    Email: '',
  };

  const [values, setValues] = useState (initialValues);
  const [ValidationConfirmPassword, setValidationConfirmPassword] = useState (
    false
  );
  const [ValidationPassword, setValidationPassword] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [PasswordType, setPasswordType] = useState ('password');
  const [ConfirmPasswordType, setConfirmPasswordType] = useState ('password');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [CheckMArk, setCheckMArk] = useState (false);
  const [Loading, setLoading] = useState (false);
  const [ToggleDisabledLoginButton, setToggleDisabledLoginButton] = useState (
    true
  );
  const search = useLocation ().search;
  const id = new URLSearchParams (search).get ('token');
  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValidationPassword (false);
        setValidationConfirmPassword (false);
        setValidationEmail (false);
        setErrorMessage (false);
      }, 2000);
      return () => clearTimeout (timer);
    },
    [
      ValidationPassword,
      ValidationConfirmPassword,
      ErrorMessage,
      ValidationEmail,
    ]
  );

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

  useEffect (
    () => {
      if (
        values.ConfirmPassword === '' &&
        values.Password === '' &&
        values.Email === ''
      ) {
        setToggleDisabledLoginButton (true);
      } else {
        setToggleDisabledLoginButton (false);
      }
    },
    [values]
  );

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues ({
      ...values,
      [name]: value,
    });
  };

  const Alert = ({message}) => {
    if (message === 'online') {
      setCheckOnline (true);
    } else {
      setCheckOnline (false);
    }
    return <div />;
  };

  function startConfirmPassword (e) {
    console.log ('START');
    setConfirmPasswordType ('text');
  }

  function endConfirmPassword (e, enough) {
    console.log ('END');
    setConfirmPasswordType ('password');
    console.log (
      enough ? 'Click released after enough time' : 'Click released too soon'
    );
  }

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

  async function handleSubmit (Password, ConfirmPassword, Email) {
    if (CheckOnline) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (ConfirmPassword !== '' && Password !== '' && Email !== '') {
        if (ConfirmPassword !== Password) {
          setErrorMessage ('Password don not match.');
        } else {
          if (re.test (Email)) {
            contextData.HandleDisplayLoading (true);
            setLoading (true);
            let data = await HandleResetPassword (Password, id, Email);
            if (data) {
              contextData.HandleDisplayLoading (false);
              if (data === 201) {
                setCheckMArk (true);
                setLoading (false);
              } else {
                setErrorMessage (data);
                setLoading (false);
                setValidationPassword (true);
                setValidationConfirmPassword (false);
              }
            }
          } else {
            setErrorMessage ('invalid Email');
            setValidationEmail (true);
          }
        }
      } else {
        if (ConfirmPassword === '') {
          setValidationConfirmPassword (true);
        } else {
          setValidationConfirmPassword (false);
        }
        if (Password === '') {
          setValidationPassword (true);
        } else {
          setValidationPassword (false);
        }
        if (Email === '') {
          setValidationEmail (true);
        } else {
          setValidationEmail (false);
        }
      }
    } else {
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

  function BackColor () {
    if (
      contextData.DisplayBackImageModal ||
      contextData.DisplayColorsDropDown ||
      contextData.ShowModal
    ) {
      return (
        <div
          className="backGroundOfModal CommonCssClassAbsolutePosition"
          style={{
            backgroundColor: contextData.Transparent ? 'transparent' : 'black',
            opacity: '0.8',
            zIndex: '7',
          }}
          onClick={() => {
            contextData.HandleBackGroundColorOfModal (false);
            contextData.HandleShowModal (false);
            contextData.HandleDisplayDropDownAlertMessage (false);
            contextData.handleDisplayTemplateModal (false);
            contextData.handleDisplayBackImageModal (false);
            contextData.handleDisplayColorsDropDown (false);
            contextData.HandleDisplayNaveBarDropDown (false);
          }}
        />
      );
    } else {
      return <div />;
    }
  }

  if (CheckMArk) {
    return (
      <div>
        <img src={CheckMarkImage} alt="loading..." width={370} height={400} />
      </div>
    );
  } else {
    return (
      <div style={{position: 'relative'}}>
        {BackColor ()}
        <Navbar />
        <div style={{position: 'relative'}}>
          {contextData.DisplayNaveBarDropDown &&
            <div
              className="CommonCssClassAbsolutePosition OuterWrapperDropDownNaveBar"
              style={{top: '18%'}}
            >
              <DropDown ContentDisplay={false} />
            </div>}
        </div>
        <div className="OuterContainer d-flex flex-column align-items-center">
          <CSSTransition
            in={contextData.ShowModal}
            timeout={500}
            classNames="alert"
            unmountOnExit
          >
            <div className="d-flex justify-content-center align-items-center">
              <Modal
                contentDisplay={contextData.ToggleModal}
                otherClass={contextData.ToggleModalCssClass}
              />
            </div>
          </CSSTransition>
        </div>
        <CSSTransition
          in={contextData.BackgroundColorOfModal}
          timeout={500}
          classNames="alert"
          unmountOnExit
        >
          <div
            className="backGroundOfModal CommonCssClassAbsolutePosition"
            onClick={() => {
              contextData.HandleBackGroundColorOfModal (false);
              contextData.HandleShowModal (false);
              contextData.HandleDisplayNaveBarDropDown (false);
            }}
          />
        </CSSTransition>
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
        <div className="mb-5 ps-5 pe-5 pb-2 mt-2">
          <div className="HeadingTextHolderSignIn mb-3 mt-3">
            Reset Password
          </div>
          <div className="bg-white mb-5 mt-3 ps-5 pe-5 pt-2 pb-4 rounded">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: '20px',
                paddingLeft: '40px',
                paddingRight: '40px',
              }}
            >
              <div>
                <label
                  htmlFor="fname"
                  className="text-left mb-2"
                  style={{fontSize: '18px', fontWeight: '500'}}
                >
                  Email:
                </label>
                <div
                  className="SignUPName BorderRadius  justify-content-between d-flex align-items-center"
                  style={{borderColor: ValidationEmail ? 'red' : ''}}
                >
                  <input
                    className="w-100"
                    placeholder="Email*"
                    value={values.Email}
                    type="text"
                    name="Email"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="fname"
                  className="text-left mb-2"
                  style={{fontSize: '18px', fontWeight: '500'}}
                >
                  New Password:
                </label>
                <div
                  className="SignUPName BorderRadius  justify-content-between d-flex align-items-center"
                  style={{borderColor: ValidationPassword ? 'red' : ''}}
                >
                  <input
                    className="w-100"
                    placeholder="New Password*"
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
              </div>
              <div>
                <label
                  htmlFor="fname"
                  className="text-left mb-2"
                  style={{fontSize: '18px', fontWeight: '500'}}
                >
                  Confirm Password:
                </label>
                <div
                  className="SignUPName BorderRadius  justify-content-between d-flex align-items-center"
                  style={{
                    borderColor: ValidationConfirmPassword ? 'red' : '',
                  }}
                >
                  <input
                    className="w-100"
                    placeholder="Confirm Password*"
                    value={values.ConfirmPassword}
                    type={ConfirmPasswordType}
                    name="ConfirmPassword"
                    onChange={handleInputChange}
                  />
                  <ClickNHold
                    time={2} // Time to keep pressing. Default is 2
                    onStart={startConfirmPassword} // Start callback
                    onClickNHold={clickNHold} //Timeout callback
                    onEnd={endConfirmPassword}
                  >
                    <BsEye />
                  </ClickNHold>
                </div>
              </div>
              {ErrorMessage && <div style={{color: 'red'}}>{ErrorMessage}</div>}
            </div>
            <div
              style={{
                paddingLeft: '40px',
              }}
            >
              <Button
                disabled={ToggleDisabledLoginButton}
                className="SubmitButtons  FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
                onClick={() => {
                  handleSubmit (
                    values.Password,
                    values.ConfirmPassword,
                    values.Email
                  );
                }}
              >
                {Loading ? <BeatLoader loading={Loading} /> : <p>SUBMIT</p>}
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default ResetPassword;
