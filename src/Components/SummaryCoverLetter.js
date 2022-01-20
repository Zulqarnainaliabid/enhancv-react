import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Editor from "react-medium-editor";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "./Redux/actions/indux";
import "react-datepicker/dist/react-datepicker.css";
export default function SummaryCoverLetter(props) {
  const [BackgroundColor, setBackgroundColor] = useState(false);
  const [Border, setBorder] = useState(false);
  const [TitleCoverLetterTextHolder, setTitleCoverLetterTextHolder] =
    useState("");
  const [SummaryCoverLetterTextHolder, setSummaryCoverLetterTextHolder] =
    useState("");
  const Incrementnull = useSelector((state) => state.IncrementNull);
  // const [checkplacehoderBollets, setcheckplacehoderBollets] = useState(true);
  const CounterData = useSelector((state) => state.CounterData);
  const dispatch = useDispatch();
  useEffect(() => {
    setBackgroundColor(false);
    setBorder(false);
  }, [Incrementnull]);
  useEffect(() => {
    setBackgroundColor(false);
    setBorder(false);
  }, [CounterData]);

  useEffect(() => {
    if (localStorage.getItem("CoverLetterSummary") !== null) {
      // setcheckplacehoderBollets(false);
      let value = localStorage.getItem("CoverLetterSummary");
      value = JSON.parse(value);
      setSummaryCoverLetterTextHolder(value);
    }
    if (localStorage.getItem("CoverLetterTitle") !== null) {
      // setcheckplacehoderBollets(false);
      let value = localStorage.getItem("CoverLetterTitle");
      value = JSON.parse(value);
      setTitleCoverLetterTextHolder(value);
    }
  }, []);
  return (
    <>
      <div
        className="outerWraperCompleteBoxCoverLetterSummary"
        onClick={() => {
          setBackgroundColor(true);
          setBorder(true);
          props.button();
          dispatch(INCREMENT());
        }}
        style={{
          backgroundColor: BackgroundColor ? "white" : "",
          border: Border ? "1px solid rgb(96, 213, 186)" : "none",
        }}
      >
        <div className="HeadingNameBoxCoverLetter">
          <input
            value={TitleCoverLetterTextHolder}
            type="text"
            className="TexrHolderexperience"
            placeholder="SUMMARY"
            onChange={(e) => {
              setTitleCoverLetterTextHolder(e.target.value);
              localStorage.setItem(
                "CoverLetterTitle",
                JSON.stringify(e.target.value)
              );
            }}
          />
        </div>
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          ></div>
          <div className="outerWraperBoxCoverLetter">
            <div className="outerWraperInputFieldHaider">
              <div className="EditorText">
                    <div className="cover-letter">
                    <Editor
                      style={{ content: "none" }}
                      text={SummaryCoverLetterTextHolder}
                      onChange={(text) => {
                        setSummaryCoverLetterTextHolder(text);
                        localStorage.setItem(
                          "CoverLetterSummary",
                          JSON.stringify(text)
                        );
                      }}
                      options={{
                        placeholder: {
                          text: "What's the one thing you want someone to remember after reading your resume",
                          hideOnClick: true,
                        },
                      }}
                    />
                    </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
