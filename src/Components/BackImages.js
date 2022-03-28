import React,{useContext,useEffect,useState} from 'react';
import {zoomIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Context} from './Context/Context';
// import txt from "./SectionImages"; // Your file path 
import Axios from 'axios';
function BackImages (props) {
    const contextData = useContext (Context);
    const styles = {
        zoomIn: {
          animation: 'x 2s',
          animationName: Radium.keyframes (zoomIn, 'zoomIn'),
        },
      };

  const [text,setText] = useState("");
  
  useEffect(()=>{
    Axios('./SectionImages').then(res => setText(res.data)); // This will have your text inside data attribute
  },[])

  console.log("file",text)
  return (
    <StyleRoot>
      <div className="OuterWrapperBackGroundImg" style={styles.zoomIn}>
    

        {props.ImgSource.map ((item, index) => {
          return (
            <img
            key={index}
              src={item}
              className="TemplateBackgroundImg BorderRadius CommonCssClassCursorPointer"
              onClick={() => {
                contextData.HandleBackImage (item);
              }}
            />
          );
        })}

      </div>
    </StyleRoot>
  );
}
export default BackImages;