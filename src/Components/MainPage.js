import React, { useState } from "react";
import "./HomePage.css";
import { TOGGLEPAGES } from "./Redux/actions/indux";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useHistory } from "react-router-dom";
import SimpleSlider from "./Carasole";
export default function Main() {
  const [SignIn, setSignIn] = useState(false);
  const [SignUp, setSignUp] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  function goToCV() {
    dispatch(TOGGLEPAGES(true));
    localStorage.setItem("TogglePAge", JSON.stringify(true));
    history.push("/super_cv");
  }
  function goToCoverLetter() {
    dispatch(TOGGLEPAGES(false));
    localStorage.setItem("TogglePAge", JSON.stringify(false));
    history.push("/cover_letter");
  }
  function GotoTerm() {
    history.push("/term_and_condation");
  }
  function Privacy() {
    history.push("/privacy_policy");
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {SignUp && (
        <>
          <div
            className="OuterWraperSign"
            onClick={() => {
              setSignUp(false);
            }}
          ></div>
          <div className="OuterContainerSign" style={{left:"36%"}}>
            <div className="outerWraperSigInForm">
              <div className="HeadingTextHolderSignIn">Create your account</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "40px",
                }}
              >
                <input className="SignUPName" placeholder="Name*" />
                <input className="SignUPName" placeholder="Email*" />
                <input className="SignUPName" placeholder="Password*" />
              </div>
              <div className="OuterWraperCheckBox">
                <div style={{ display: "flex" }}>
                  <input className="CheckBox" type="checkbox" />
                  <div className="TextHolferTermAndCondition">
                    I agree to
                    <div style={{ cursor: "pointer" ,color:"rgba(101,105,109,.8)",
                    fontWeight:"700"}} onClick={GotoTerm}>
                      Terms of Service
                    </div>
                    and
                    <div style={{ cursor: "pointer",color:"rgba(101,105,109,.8)",
                    fontWeight:"700" }} onClick={Privacy}>
                      Privacy policy *
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <input className="CheckBox" type="checkbox" />
                  <div style={{color:"black",color:"#576064"}}>
                    Send me resume examples and updates
                  </div>
                </div>
              </div>
              <div className="SubmitButtons">CREATE AN ACCOUNT</div>
            </div>
          </div>
        </>
      )}
      {SignIn && (
        <>
          <div
            className="OuterWraperSign"
            onClick={() => {
              setSignIn(false);
            }}
          ></div>
          <div className="OuterContainerSign">
            <div className="outerWraperSigInForm">
              <div className="HeadingTextHolderSignIn">
                Sign in to your account
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "40px",
                }}
              >
                <input className="SignUPName" placeholder="Your Email" />
                <input className="SignUPName" placeholder="Password" />
              </div>

              <div className="SubmitButtons">SIGN IN</div>
            </div>
          </div>
        </>
      )}
      <div className="OuterContainer">
        <div className="outerWraperLoginButtons">
          <div className="HeadingTextHolder">
            Wellcome To Our Super CV Builder
          </div>
          <div
            className="button1"
            onClick={() => {
              setSignUp(true);
            }}
          >
            Sign Up
          </div>
          <div
            className="button2"
            onClick={() => {
              setSignIn(true);
            }}
          >
            Sign In
          </div>
        </div>
        <div className="OuterWraperCVButtons">
          <div className="TextHolder">
            You Want Job ?<br />
            Create!
          </div>
          <div className="OuterWraperButtons">
            <div
              className="button1"
              onClick={goToCV}
              style={{ backgroundColor: "#2DC08D" }}
            >
              CV
            </div>
            <div
              className="button1"
              onClick={goToCoverLetter}
              style={{ backgroundColor: "#2D3E50" }}
            >
              Cover Letter
            </div>
          </div>
        </div>
        <div className="OuterWraperSlider">
          <SimpleSlider 
          />
        </div>
      </div>
    </>
  );
}
