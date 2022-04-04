import React, {useContext} from 'react';
import {Context} from './Context/Context';
import {zoomIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import SingleColumn from './Images/SingleColumn.jpg';
import DoubleColumn from './Images/DoubleColumn.jpg';

function TemplatesImages (props) {
  const contextData = useContext (Context);
  const styles = {
    zoomIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes (zoomIn, 'zoomIn'),
    },
  };
  return (
    <StyleRoot>
      <div className="OuterWrapperBackGroundImg " style={styles.zoomIn}>
        <div
          onClick={() => {
            contextData.HandleToggleTemplate (false);
          }}
        >
          <img src={SingleColumn} className="TemplateImg CommonCssClassCursorPointer" />
          <div className="TextHolderTemplate FontWeight">
            Single Column
          </div>
        </div>
        <div
          onClick={() => {
            contextData.HandleToggleTemplate (true);
          }}
        >
          <img src={DoubleColumn} className="TemplateImg CommonCssClassCursorPointer" />
          <div className="TextHolderTemplate FontWeight">
            Double Column
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
export default TemplatesImages;
