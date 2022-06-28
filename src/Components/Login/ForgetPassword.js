import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../Context/Context';
import {Button} from 'react-bootstrap'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {HandleForgetPassword} from '../Services';
import {confirmAlert} from 'react-confirm-alert';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import NetworkStatus from '../NetWorkStatus';
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

  const Alert = ({message}) => {
    if (message === 'online') {
      setCheckOnline (true);
    } else {
      setCheckOnline (false);
    }
    return <div />;
  };
  return (
    <div>
      <div style={{position: 'absolute',top:"22px"}}>
        <AiOutlineArrowLeft
          style={{cursor: 'pointer', fontSize: '21px'}}
          onClick={() => {
            props.setState (true);
          }}
        />
      </div>

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

      <div className="HeadingTextHolderSignIn ">Forget Password</div>
      <div className="bg-white">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
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
        <div>
          <Button
            disabled={ToggleDisabledLoginButton}
            className="SubmitButtons w-25 d-flex justify-content-center  FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
            onClick={() => {
              handleSubmit (values.Email);
            }}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
