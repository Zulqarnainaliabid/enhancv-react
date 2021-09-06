import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import "react-datepicker/dist/react-datepicker.css";
import ApexChart from "./DounutChart";
import { RiSettings5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT,
  INCREMENTBACKGROUNDCOLOMYTIME,
  MYTIMEYES,
  TOGGLEREARRANGEBUTTONS,
} from "./Redux/actions/indux";
export default function MyTime(props) {
  const inputref = useRef(null);
  const childRef = useRef();
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [UnderBoxcolor, setUnderBoxcolor] = useState(false);
  const [SliceButton, setSliceButton] = useState(false);
  const [NumberOfSlice3, setNumberOfSlice3] = useState("#00c091");
  const [NumberOfSlice6, setNumberOfSlice6] = useState("#ccc");
  const [NumberOfSlice9, setNumberOfSlice9] = useState("#ccc");
  const [NumberOfSlice, setNumberOfSlice] = useState(3);
  const [ArraysliceinputField, setArraysliceinputField] = useState([
    { label: "A",number:"A1", },
    { label: "B",number:"B1", },
    { label: "C",number:"C1", },
    { label: "D",number:"D1", },
  ]);
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  const nullBackgroundcolorPassion = useSelector(
    (state) => state.IncrementBackgroundColorPassion
  );
  const nullBackgroundcolorTraining = useSelector(
    (state) => state.IncrementBackgroundColorTraining
  );
  const nullBackgroundcolorExperience = useSelector(
    (state) => state.IncrementBackgroundColorExperience
  );
  const nullBackgroundcolorAchievement = useSelector(
    (state) => state.IncrementBackgroundColorAchievement
  );
  const nullBackgroundcolorSkill = useSelector(
    (state) => state.IncrementBackgroundColorSkill
  );
  const nullBackgroundcolorProject = useSelector(
    (state) => state.IncrementBackgroundColorProject
  );
  const nullBackgroundcolorLanguage = useSelector(
    (state) => state.IncrementBackgroundColorLanguage
  );
  const nullBackgroundcolorFindMeOnline = useSelector(
    (state) => state.IncrementBackgroundColorFindMeOnline
  );
  const nullBackgroundcolorSummary = useSelector(
    (state) => state.IncrementBackgroundColorSummary
  );
  const nullBackgroundcolorStrength = useSelector(
    (state) => state.IncrementBackgroundColorStrength
  );
  const nullBackgroundcolorVolunteering = useSelector(
    (state) => state.IncrementBackgroundColorVolunteering
  );
  const nullBackgroundcolorEducation = useSelector(
    (state) => state.IncrementBackgroundColorEducation
  );
  const nullBackgroundcolorIndustryExperience = useSelector(
    (state) => state.IncrementBackgroundColorIndusteryExperience
  );
  const Incrementnull = useSelector((state) => state.IncrementNull);
  let UpdateNumberSlice = useSelector((state) => state.UpdateNumberSlice);
  function HandleCompleteBoarderSelected() {
    dispatch(INCREMENTBACKGROUNDCOLOMYTIME());
    props.button();
    setbackgroundColor("white");
    setShowHeaderButton("flex");
    setborderBottm("1px dashed rgba(0, 0, 0, 0.548)");
  }
  function sethandleBackgroundcolor() {
    setToggleButtons(true);
    props.button();
    dispatch(INCREMENTBACKGROUNDCOLOMYTIME());
    setUnderBoxcolor("white");
  }

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorPassion]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorTraining]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorExperience]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorAchievement]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorSkill]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorProject]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorLanguage]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorFindMeOnline]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorSummary]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorStrength]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorVolunteering]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorEducation]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorIndustryExperience]);

  useEffect(() => {
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor(false);
  }, [Incrementnull]);

  useEffect(() => {
    setToggleButtons(false);
    setToggleButtons(false);
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [CounterData]);

  useEffect(() => {
    inputref.current.focus();
  }, [CounterData]);

  useEffect(() => {
    localStorage.setItem("slice", JSON.stringify(4));
  }, []);
  
  function HandleRemoveSection() {
    dispatch(MYTIMEYES(true));
  }
  function HandleNumberOfslice3(name,value) {
    setNumberOfSlice6("#ccc");
    setNumberOfSlice3("#00c091");
    setNumberOfSlice9("#ccc");
    setNumberOfSlice(3)
    let temp = [];
    temp = ArraysliceinputField;
    temp = [
      { label: "A",number:"A1",},
      { label: "B",number:"A2",},
      { label: "C",number:"A3",},
      { label: "D",number:"A4",},
    ];
    setArraysliceinputField([...temp]);
    childRef.current.getAlert(4,name,value);
  }
  function HandleNumberOfslice6(name,value) {
    setNumberOfSlice6("#00c091");
    setNumberOfSlice3("#ccc");
    setNumberOfSlice9("#ccc");
    setNumberOfSlice(6)
    let temp = [];
    temp = ArraysliceinputField;
    temp = [
      { label: "A",number:"A1",},
      { label: "B",number:"A2",},
      { label: "C",number:"A3",},
      { label: "D",number:"A4",},
      { label: "E",number:"A5",},
      { label: "F",number:"A6",},
    ];
    setArraysliceinputField([...temp]);
    childRef.current.getAlert(6,name,value);
  }
  function HandleNumberOfslice9(name,value) {
    setNumberOfSlice6("#ccc");
    setNumberOfSlice3("#ccc");
    setNumberOfSlice9("#00c091");
    setNumberOfSlice(8);
    setNumberOfSlice(9)
    let temp = [];
    temp = ArraysliceinputField;
    temp = [
      { label: "A",number:"A1", },
      { label: "B",number:"A2", },
      { label: "C",number:"A3", },
      { label: "D",number:"A4", },
      { label: "E",number:"A5", },
      { label: "F",number:"A6", },
      { label: "H",number:"A7", },
      { label: "I",number:"A8", },
    ];
    setArraysliceinputField([...temp]);
    childRef.current.getAlert(8,name,value);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{ display: ToggleButtons ? "flex" : "none", top: "15px" }}
          className="headingOptionUnderBox"
        >
          <RiSettings5Fill
            onClick={() => {
              setSliceButton(!SliceButton);
            }}
            className="ArrangeIcon"
          />
          {SliceButton && (
            <div className="InnerWraperToggleButtonsSlice">
              <div className="ToggleButtonsLabelSlice">Number of slice</div>
              <div
                className="RadioButtonsToggleButtons"
                style={{ backgroundColor: NumberOfSlice3 }}
                onClick={HandleNumberOfslice3}
              ></div>
              <div
                className="RadioButtonsToggleButtons"
                style={{ backgroundColor: NumberOfSlice6 }}
                onClick={HandleNumberOfslice6}
              ></div>
              <div
                className="RadioButtonsToggleButtons"
                style={{ backgroundColor: NumberOfSlice9 }}
                onClick={HandleNumberOfslice9}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div
        className="outerWraperCompleteBox"
        style={{ backgroundColor: backgroundColor }}
      >
        <div
          style={{ backgroundColor: backgroundColor }}
          className="HeadingNameBox"
          onClick={HandleCompleteBoarderSelected}
        >
          <input
            ref={inputref}
            type="text"
            className="TexrHolderexperience"
            style={{ borderBottom: "4px solid" }}
            placeholder="MY TIME"
            onClick={() => {
              setUpdateState(UpdateState + 1);
              dispatch(INCREMENT());
            }}
          />
          <div
            style={{ display: ShowHeaderButton }}
            className="headingOptionBoxEducation"
          >
            <RiDeleteBin6Line
              className="DeleteIcon"
              onClick={HandleRemoveSection}
            />
            <CgArrangeFront
              className="ArrangeIcon"
              onClick={() => {
                dispatch(TOGGLEREARRANGEBUTTONS(true));
              }}
            />
          </div>
        </div>
        <div
          className="outerWraperBox"
          onClick={sethandleBackgroundcolor}
          style={{ backgroundColor: UnderBoxcolor }}
        >
          <ApexChart
            ref={childRef}
            UpdateNumberSlice={UpdateNumberSlice}
            ArraysliceinputField={ArraysliceinputField}
            setArraysliceinputField={setArraysliceinputField}
            ArraysliceinputField={ArraysliceinputField}
            HandleNumberOfslice3={HandleNumberOfslice3}
            HandleNumberOfslice6={HandleNumberOfslice6}
            HandleNumberOfslice9={HandleNumberOfslice9}
          />
        </div>
      </div>
    </>
  );
}
