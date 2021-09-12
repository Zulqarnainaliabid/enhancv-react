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
  const [series, setseries] = useState([5, 5, 5, 5]);
  const [labels, setlabels] = useState(["A", "B", "C", "D"]);
  const [SliceNumber, setSliceNumber] = useState(3);

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
    dispatch(INCREMENT());
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
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor(false);
  }, [CounterData]);

  useEffect(() => {
    if (localStorage.getItem("arraySeries") !== null) {
      let value = localStorage.getItem("arraySeries");
      value = JSON.parse(value);
      var result = value.map(function (x) {
        return parseInt(x);
      });
      HandleSeries(result);
    }
    inputref.current.focus();
  }, []);

  function HandleRemoveSection() {
    dispatch(MYTIMEYES(true));
  }
  function HandleSeries(array) {
    var result = array.map(function (x) {
      return parseInt(x);
    });
    let temp4 = [];
    if (SliceNumber === 3) {
      for (let i = 0; i < 4; i++) {
        temp4[i] = result[i];
      }
    } else if (SliceNumber === 6) {
      for (let i = 0; i < 6; i++) {
        temp4[i] = result[i];
      }
    } else if (SliceNumber === 9) {
      for (let i = 0; i < result.length; i++) {
        temp4[i] = result[i];
      }
    }
    setseries([...temp4]);
  }
  function HandleNumberOfslice3() {
    setNumberOfSlice6("#ccc");
    setNumberOfSlice3("#00c091");
    setNumberOfSlice9("#ccc");

    if (localStorage.getItem("arraySeries") !== null) {
      let value = localStorage.getItem("arraySeries");
      let temp = [];
      value = JSON.parse(value);
      var result = value.map(function (x) {
        return parseInt(x);
      });
      for (let i = 0; i < 4; i++) {
        temp[i] = result[i];
      }
      setseries(temp);
    } else {
      setseries([5, 5, 5, 5]);
    }
    setlabels(["A", "B", "C", "D"]);
    setSliceNumber(3);
    const slice = {
      NumberOfSlice6: "#ccc",
      NumberOfSlice3: "#00c091",
      NumberOfSlice9: "#ccc",
      series: [5, 5, 5, 5],
      labels: ["A", "B", "C", "D"],
    };
    localStorage.setItem("arraySlice", JSON.stringify(slice));
  }
  function HandleNumberOfslice6() {
    setNumberOfSlice6("#00c091");
    setNumberOfSlice3("#ccc");
    setNumberOfSlice9("#ccc");
    setSliceNumber(6);
    if (localStorage.getItem("arraySeries") !== null) {
      let value = localStorage.getItem("arraySeries");
      let temp = [];
      value = JSON.parse(value);
      var result = value.map(function (x) {
        return parseInt(x);
      });
      for (let i = 0; i < 6; i++) {
        temp[i] = result[i];
      }
      setseries(temp);
    } else {
      setseries([5, 5, 5, 5, 5, 5]);
    }
    setlabels(["A", "B", "C", "D", "E", "F"]);
    const slice = {
      NumberOfSlice6: "#00c091",
      NumberOfSlice3: "#ccc",
      NumberOfSlice9: "#ccc",
      series: [5, 5, 5, 5, 5, 5],
      labels: ["A", "B", "C", "D", "E", "F"],
    };
    localStorage.setItem("arraySlice", JSON.stringify(slice));
  }
  function HandleNumberOfslice9() {
    setNumberOfSlice6("#ccc");
    setNumberOfSlice3("#ccc");
    setNumberOfSlice9("#00c091");
    if (localStorage.getItem("arraySeries") !== null) {
      let value = localStorage.getItem("arraySeries");
      let temp = [];
      value = JSON.parse(value);
      var result = value.map(function (x) {
        return parseInt(x);
      });
      for (let i = 0; i < result.length; i++) {
        temp[i] = result[i];
      }
      setseries(temp);
    }else{
      setseries([5, 5, 5, 5, 5, 5, 5, 5]);
    }
    setlabels(["A", "B", "C", "D", "E", "F", "G", "H"]);
    setSliceNumber(9);
    const slice = {
      NumberOfSlice6: "#ccc",
      NumberOfSlice3: "#ccc",
      NumberOfSlice9: "#00c091",
      series: [5, 5, 5, 5, 5, 5, 5, 5],
      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
    };
    localStorage.setItem("arraySlice", JSON.stringify(slice));
  }

  useEffect(() => {
    if (localStorage.getItem("arraySlice") !== null) {
      let value = localStorage.getItem("arraySlice");
      value = JSON.parse(value);
      setNumberOfSlice6(value.NumberOfSlice6);
      setNumberOfSlice3(value.NumberOfSlice3);
      setNumberOfSlice9(value.NumberOfSlice9);
      setlabels(value.labels);
    }
  }, []);
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
            series={series}
            labels={labels}
            SliceNumber={SliceNumber}
            HandleSeries={HandleSeries}
          />
        </div>
      </div>
    </>
  );
}
