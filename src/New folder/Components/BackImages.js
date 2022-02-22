import React,{useContext} from 'react';
import {zoomIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Context} from './Context/Context';
function BackImages (props) {
    const contextData = useContext (Context);
    const styles = {
        zoomIn: {
          animation: 'x 2s',
          animationName: Radium.keyframes (zoomIn, 'zoomIn'),
        },
      };
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