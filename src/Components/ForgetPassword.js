import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import Navbar from './Navbar';
import Footer from './Footer';
import {Button} from 'react-bootstrap';
import ClickNHold from 'react-click-n-hold';
import {BsEye} from 'react-icons/bs';
import NetworkStatus from './NetWorkStatus';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Modal from './Modal';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {HandleForgetPassword} from './Services';
import DropDown from './DropDown';
import {confirmAlert} from 'react-confirm-alert';
function ForgetPassword (props) {
  const contextData = useContext (Context);
  let initialValues = {
    Email: '',
  };
  const [values, setValues] = useState (initialValues);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [ToggleDisabledLoginButton, setToggleDisabledLoginButton] = useState (
    true
  );

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValidationEmail (false);
        setErrorMessage (false);
      }, 2000);
      return () => clearTimeout (timer);
    },
    [ValidationEmail, ErrorMessage]
  );

  // useEffect (
  //   () => {
  //     if (CheckMArk) {
  //       const timer = setTimeout (() => {
  //         contextData.HandleBackGroundColorOfModal (false);
  //         contextData.HandleShowModal (false);
  //       }, 3000);
  //       return () => clearTimeout (timer);
  //     }
  //   },
  //   [CheckMArk]
  // );

  useEffect (
    () => {
      if (values.Email === '') {
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

  async function handleSubmit (Email) {
    if (CheckOnline) {
      if (Email !== '') {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test (Email)) {
          contextData.HandleDisplayLoading (true);
          let userData = {
            email: Email,
          };
          let data = await HandleForgetPassword (userData);
          if (data) {
            contextData.HandleDisplayLoading (false);
            if (data === 200) {
              confirmAlert ({
                title: 'Please Check Your Email',
                buttons: [
                  {
                    label: 'OK',
                  },
                ],
              });  
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
      <div className="mb-5 ps-5 pe-5 pb-2 pt-5">
        <div className="HeadingTextHolderSignIn mb-3 mt-3">Forget Password</div>
        <div className="bg-white mb-5 mt-3 ps-5 pb-5 pe-4 pt-2  rounded">
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
              <input
                className="SignUPName BorderRadius"
                style={{borderColor: ValidationEmail ? 'red' : ''}}
                placeholder="Email*"
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
            }}
          >
            <Button
              disabled={ToggleDisabledLoginButton}
              className="SubmitButtons  FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
              onClick={() => {
                handleSubmit (values.Email);
              }}
            >
              SUBMIT
            </Button>
          </div>
        </div>
        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
