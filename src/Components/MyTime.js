import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import "react-datepicker/dist/react-datepicker.css";
import ApexChart from "./DounutChart";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "./Redux/actions/indux";
export default function MyTime(props) {
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [UnderBoxcolor, setUnderBoxcolor] = useState(false);
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  function HandleCompleteBoarderSelected() {
    props.button();
    setbackgroundColor("white");
    setShowHeaderButton("flex");
    setborderBottm("1px dashed rgba(0, 0, 0, 0.548)");
  }
  function sethandleBackgroundcolor() {
    props.button();
    setUnderBoxcolor(true);
  }
  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    setUnderBoxcolor(false);
    console.log("click me");
  }, [props.data]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    console.log("click me2");
  }, [CounterData]);

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
            <RiDeleteBin6Line className="DeleteIcon" />
            <CgArrangeFront className="ArrangeIcon" />
          </div>
        </div>
        <div
          className="outerWraperBox"
          onClick={sethandleBackgroundcolor}
          style={{ backgroundColor: UnderBoxcolor ? "white" : "none" }}
        >
          <ApexChart />
        </div>
      </div>
    </>
  );
}
