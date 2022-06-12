import React, {useContext,useState,useEffect} from 'react';
import {Context} from './Context/Context';
import {Link} from 'react-router-dom';
function NaveBarDropDown (props) {
  const contextData = useContext (Context);
  const [ToggleLoginButton, setToggleLoginButton] = useState (false);
  useEffect (
    () => {
      if (localStorage.getItem ('leLoginSuccess') !== null) {
        let value = localStorage.getItem ('leLoginSuccess');
        value = JSON.parse (value);
        setToggleLoginButton (true);
      } else {
        setToggleLoginButton (false);
      }
    },
    [contextData.UpdateAccountSuccess, contextData.UpdateLoginSuccess]
  );
  return (
    <div>
      <p className="NaveBarDropDown BorderBottomNaveBarDropDown">Plans</p>
      <Link
        onClick={() => {
          window.scrollTo (0, 0);
        }}
        className="text-decoration-none"
        to="/account"
      >
        <p className="NaveBarDropDown BorderBottomNaveBarDropDown">Account</p>
      </Link>

      <p className="NaveBarDropDown BorderBottomNaveBarDropDown">Billing</p>
      {ToggleLoginButton
        ?  <Link
        onClick={() => {
          window.scrollTo (0, 0);
          localStorage.removeItem('leLoginSuccess');
          localStorage.removeItem('Account');
          contextData.UpdateHandleAccountSuccess(!contextData.UpdateAccountSuccess)
          contextData.UpdateHandleLoginSuccess(!contextData.UpdateLoginSuccess)
        }}
        className="text-decoration-none"
        to="/"
      >
        <p  className="NaveBarDropDown">Log out</p>
      </Link> 
        : <p
            className="NaveBarDropDown"
            onClick={() => {
              contextData.HandleBackGroundColorOfModal (true);
              contextData.HandleShowModal (true);
              contextData.HandleToggleModal ('SignIn');
              contextData.handleDisplayBackgroundTransparent (false);
              contextData.HandleDisplayNaveBarDropDown (false);
              contextData.HandleToggleModalCSSClass ('outerWrapperModalSignIn');
            }}
          >
            Log In
          </p>}

    </div>
  );
}

export default NaveBarDropDown;
