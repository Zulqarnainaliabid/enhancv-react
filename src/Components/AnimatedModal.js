import React from "react";
import { fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Img1 from "../Components/Backgroundimg/img1.jpg";
import Img2 from "../Components/Backgroundimg/img2.jpg";
import { useDispatch, useSelector } from "react-redux";
import {SINGLECOLUMN,DOUBLECOLUMN} from './Redux/actions/indux'

const styles = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
};

function Modal() {
    const dispatch = useDispatch();
  return (
    <StyleRoot>
      <div className="testModal" style={styles.fadeInRight}>
        <div className="TextHolderTemplate" style={{fontSize:"19px",fontWeight:"bold"}}>Select Template</div>
        <div onClick={()=>{
        dispatch(SINGLECOLUMN(true));
      localStorage.setItem("Singlecolumn", JSON.stringify(true));
        }}>
          <img src={Img1} className="TamplateImg1" />
          <div className="TextHolderTemplate">Single Column</div>
        </div>
        <div onClick={()=>{
        dispatch(SINGLECOLUMN(false));
        localStorage.setItem("Singlecolumn", JSON.stringify(false));
        }}>
          <img src={Img2} className="TamplateImg1" />
          <div className="TextHolderTemplate">Double Column</div>
        </div>
      </div>
    </StyleRoot>
  );
}
export default Modal;
