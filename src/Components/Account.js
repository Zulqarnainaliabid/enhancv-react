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
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {HandleSignUpPostRequest} from './Services';
import DropDown from './DropDown';
function Account (props) {
  const contextData = useContext (Context);

  const [ValidationFName, setValidationFName] = useState (false);
  const [ValidationLName, setValidationLName] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [CheckMArk, setCheckMArk] = useState (false);
  const [ToggleDisabledLoginButton, setToggleDisabledLoginButton] = useState (
    true
  );

  let initialValues = {
    FistName: '',
    LastName: '',
    Email: '',
  };

  if (localStorage.getItem ('Users') !== null) {
    let value = localStorage.getItem ('Users');

    value = JSON.parse (value);
    initialValues.FistName = value.user.firstName;
    initialValues.LastName = value.user.lastName;
    initialValues.Email = value.user.email;
  }
  const [values, setValues] = useState (initialValues);

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValidationEmail (false);
        setValidationLName (false);
        setValidationFName (false);
      }, 2000);
      return () => clearTimeout (timer);
    },
    [ValidationEmail, ValidationLName, ValidationFName]
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
        values.FistName === '' &&
        values.LastName === '' &&
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

  async function handleSubmit (fName, lName, Email) {
    if (CheckOnline) {
      if (fName !== '' && lName !== '' && Email !== '') {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test (Email)) {
          contextData.HandleDisplayLoading (true);
          let userData = {
            email: Email,
            firstName: fName,
            lastName: lName,
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
                  userEmail: Email,
                })
              );
            } else {
              setErrorMessage (data);
              if (data.includes (Email)) {
                setValidationEmail (true);
              } else {
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
          <div className="HeadingTextHolderSignIn">Edit your account</div>
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
              <div className="mb-3">
                <label
                  htmlFor="fname"
                  className="text-left"
                  style={{fontSize: '18px', fontWeight: '500'}}
                >
                  First Name:
                </label>
                <input
                  className="SignUPName BorderRadius"
                  placeholder="First Name*"
                  style={{borderColor: ValidationFName ? 'red' : ''}}
                  value={values.FistName}
                  name="FistName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="fname"
                  className="text-left"
                  style={{fontSize: '18px', fontWeight: '500'}}
                >
                  Last Name:
                </label>
                <input
                  className="SignUPName BorderRadius"
                  placeholder="Last Name*"
                  style={{borderColor: ValidationLName ? 'red' : ''}}
                  value={values.LastName}
                  name="LastName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="fname"
                  className="text-left"
                  style={{fontSize: '18px', fontWeight: '500'}}
                >
                  Email:
                </label>
                <input
                  className="SignUPName BorderRadius"
                  placeholder="Email*"
                  style={{borderColor: ValidationEmail ? 'red' : ''}}
                  value={values.Email}
                  name="Email"
                  onChange={handleInputChange}
                />
              </div>
              {ErrorMessage && <div style={{color: 'red'}}>{ErrorMessage}</div>}
            </div>
            <div
              style={{
                paddingLeft: '40px',
                // paddingRight:"40px"
              }}
            >
              <Button
                disabled={ToggleDisabledLoginButton}
                className="SubmitButtons  FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
                onClick={() => {
                  handleSubmit (
                    values.FistName,
                    values.LastName,
                    values.Email,
                  );
                }}
              >
                SAVE CHANGING
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Account;
