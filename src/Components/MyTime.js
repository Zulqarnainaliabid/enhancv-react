import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import "react-datepicker/dist/react-datepicker.css";
import ApexChart from "./DounutChart";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, INCREMENTBACKGROUNDCOLOMYTIME , MYTIMEYES } from "./Redux/actions/indux";
export default function MyTime(props) {
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [UnderBoxcolor, setUnderBoxcolor] = useState(false);
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  const nullBackgroundcolorPassion = useSelector((state) => state.IncrementBackgroundColorPassion);
  const nullBackgroundcolorTraining = useSelector((state) => state.IncrementBackgroundColorTraining);
  const nullBackgroundcolorExperience = useSelector((state) => state.IncrementBackgroundColorExperience);
  const nullBackgroundcolorAchievement = useSelector((state) => state.IncrementBackgroundColorAchievement);
  const nullBackgroundcolorSkill = useSelector((state) => state.IncrementBackgroundColorSkill);
  const nullBackgroundcolorProject = useSelector((state) => state.IncrementBackgroundColorProject);
  const nullBackgroundcolorLanguage = useSelector((state) => state.IncrementBackgroundColorLanguage);
  const nullBackgroundcolorFindMeOnline = useSelector((state) => state.IncrementBackgroundColorFindMeOnline);
  const nullBackgroundcolorSummary = useSelector((state) => state.IncrementBackgroundColorSummary);
  const nullBackgroundcolorStrength = useSelector((state) => state.IncrementBackgroundColorStrength);
  const nullBackgroundcolorVolunteering = useSelector((state) => state.IncrementBackgroundColorVolunteering);
  const nullBackgroundcolorEducation = useSelector((state) => state.IncrementBackgroundColorEducation);
  const nullBackgroundcolorIndustryExperience = useSelector((state) => state.IncrementBackgroundColorIndusteryExperience);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  function HandleCompleteBoarderSelected() {
    dispatch(INCREMENTBACKGROUNDCOLOMYTIME());
    props.button();
    setbackgroundColor("white");
    setShowHeaderButton("flex");
    setborderBottm("1px dashed rgba(0, 0, 0, 0.548)");
  }
  function sethandleBackgroundcolor() {
    props.button();
    dispatch(INCREMENTBACKGROUNDCOLOMYTIME());
    setUnderBoxcolor("white");
  }

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorPassion]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorTraining]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorExperience]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorAchievement]);

  useEffect(() => {
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
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorLanguage]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorFindMeOnline]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorSummary]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorStrength]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorVolunteering]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorEducation]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor("unset");
  }, [nullBackgroundcolorIndustryExperience]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor(false);
  }, [Incrementnull]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [CounterData]);

 function HandleRemoveSection(){
dispatch(MYTIMEYES(true));
 }

  return (
    <>
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
            <RiDeleteBin6Line className="DeleteIcon" onClick={HandleRemoveSection} />
            <CgArrangeFront className="ArrangeIcon" />
          </div>
        </div>
        <div
          className="outerWraperBox"
          onClick={sethandleBackgroundcolor}
          style={{ backgroundColor: UnderBoxcolor}}
        >
          <ApexChart />
        </div>
      </div>
    </>
  );
}
