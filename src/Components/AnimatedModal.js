import React, { useEffect, useState } from "react";
import { fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Img1 from "../Components/Backgroundimg/img1.jpg";
import Img2 from "../Components/Backgroundimg/img2.jpg";
import BackImg1 from "./Backgroundimg/BackImg1.png";
import BackImg2 from "./Backgroundimg/BackImg2.png";
import BackImg3 from "./Backgroundimg/backimg3.png";
import BackImg4 from "./Backgroundimg/BackImg4.png";
import BackImg5 from "./Backgroundimg/BackImg5.png";
import BackImg6 from "./Backgroundimg/Backimg6.png";
import BackImg7 from "./Backgroundimg/BackImg7.png";
import BackImg8 from "./Backgroundimg/BackImg8.png";
import BackImg9 from "./Backgroundimg/BackImg9.png";
import BackImg10 from "./Backgroundimg/BackImg10.png";
import BackImg11 from "./Backgroundimg/BackImg11.png";
import {UPDATEBACKGROUNDIMAGE} from './Redux/actions/indux'
import { useDispatch, useSelector } from "react-redux";
import { SINGLECOLUMN, DOUBLECOLUMN } from "./Redux/actions/indux";

const styles = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
};

function Modal(props) {

  const [ImgSource, setImgSource] = useState([
    BackImg1,
    BackImg2,
    BackImg3,
    BackImg4,
    BackImg5,
    BackImg6,
    BackImg7,
    BackImg8,
    BackImg9,
    BackImg10,
    BackImg11,
  ]);
  const dispatch = useDispatch();
  useEffect(() => {}, [props.CheckToggleImage]);

 async function SetData(toggle){
  await localStorage.setItem("ToggleWidth", JSON.stringify(toggle));
  }

  if (props.CheckToggleImage) {
    return (
      <>
        <StyleRoot>
          <div className="testModalBackGroundImg" style={styles.fadeInRight}>
            <div
              className="TextHolderTemplate"
              style={{ fontSize: "19px", fontWeight: "bold" }}
            >
              Select BackGroundImage
            </div>
            <div className="OuterWraperBackGroundImg">
            {ImgSource.map((item, index) => {
              return <img src={item} onClick={()=>{
                dispatch(UPDATEBACKGROUNDIMAGE(item));
                localStorage.setItem("BackGroundImage", JSON.stringify(item));
              }} className="TamplateBackgroundImg1" />;
            })}
            </div>
          </div>
        </StyleRoot>
      </>
    );
  } else {
    return (
      <StyleRoot>
        <div className="testModal" style={styles.fadeInRight}>
          <div
            className="TextHolderTemplate"
            style={{ fontSize: "19px", fontWeight: "bold"}}
          >
            Select Template
          </div>
          <div
            onClick={() => {
              console.log("selected = true")
              SetData(true)
              dispatch(SINGLECOLUMN(true));
              localStorage.setItem("Singlecolumn", JSON.stringify(true));
            }}
          >
            <img src={Img1} className="TamplateImg1" />
            <div className="TextHolderTemplate">Single Column</div>
          </div>
          <div
            onClick={() => {
              console.log("selected = false")
              SetData(false)
              dispatch(SINGLECOLUMN(false));
              localStorage.setItem("Singlecolumn", JSON.stringify(false));
            }}
          >
            <img src={Img2} className="TamplateImg1" />
            <div className="TextHolderTemplate">Double Column</div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
export default Modal;
