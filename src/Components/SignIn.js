import React from 'react';

function SignIn (props) {
  return (
    <div>
      <div className="HeadingTextHolderSignIn">
        Sign in to your account
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
        <input className="SignUPName BorderRadius" placeholder="Your Email" />
        <input className="SignUPName BorderRadius" placeholder="Password" />
      </div>
      <div className="SubmitButtons FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer">SIGN IN</div>
    </div>
  );
}

export default SignIn;
