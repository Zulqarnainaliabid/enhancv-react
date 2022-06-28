import React, {useState} from 'react';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import ForgetPassword from './ForgetPassword';
import Login from './Login';
function LoginAccount (props) {
  const [state, setState] = useState (true);
  return (
    <div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={state}
          addEndListener={(node, done) => {
            node.addEventListener ('transitionend', done, false);
          }}
          classNames="fade"
        >
          <div>
            <div className="btnRusme">
              {state ? <Login setState={setState} /> : <ForgetPassword setState={setState} />}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default LoginAccount;
