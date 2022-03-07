import React from 'react';

export default function LoginIn (props) {
  return (
    <div>
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
        <input className="SignUPName BorderRadius" placeholder="Name*" />
        <input className="SignUPName BorderRadius" placeholder="Email*" />
        <input className="SignUPName BorderRadius" placeholder="Password*" />
      </div>
      <div className="OuterWrapperCheckBox d-flex flex-column align-items-start">
        <div style={{display: 'flex'}}>
          <input className="CheckBox CommonCssClassCursorPointer BorderRadius" type="checkbox" />
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
          <input className="CheckBox CommonCssClassCursorPointer BorderRadius" type="checkbox" />
          <div style={{color: 'black', color: '#576064'}}>
            Send me resume examples and updates
          </div>
        </div>
      </div>
      <div className="SubmitButtons FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer">CREATE AN ACCOUNT</div>
    </div>
  );
}
