import React, {useContext, useState, useEffect, useRef} from 'react';
import {Context} from './Context/Context';
import Editor from 'react-medium-editor';
import {GiHeavyBullets} from 'react-icons/gi';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');

function SummaryCoverLetter (props) {
  const [HighLighter, setHighLighter] = useState (false);
  const contextData = useContext (Context);
  const [Value, setValue] = useState ('');
  const [Bullets, setBullets] = useState (false);

  function HandleCompleteBoarderSelected () {
    setHighLighter (true);
  }
  useEffect (
    () => {
      alertUser ();
    },
    [contextData.UpdateBachGroundHighLitter]
  );
  useEffect (
    () => {
      if (contextData.BackGroundHighLitter !== 'Summary') {
        setHighLighter (false);
      }
    },
    [contextData.BackGroundHighLitter]
  );

  function alertUser () {
    setHighLighter (false);
  }

  function handleInputData (InputValue) {
    setValue (InputValue);
  }

  return (
    <div
      className="outerWrapperCompleteBox"
      style={{backgroundColor: HighLighter ? 'white' : ''}}
      onClick={e => {
        props.setDisplayBackGroundColor (true);
        props.HandleBackGroundColor (e);
        contextData.HandleUpdateBackGroundHighLitter ('Summary');
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center bg-danger"
        style={{position: 'relative'}}
      >
        {HighLighter &&
          <div
            className="headingOptionBoxRight d-flex CommonCssClassAbsolutePosition"
            style={{top: '-30px', cursor: 'pointer'}}
          >

            <div className="outerWrapperHeaderIcons" style={{border: 'unset'}}>
              <GiHeavyBullets
                className="BulletsCoverSections"
                onClick={() => {
                  setBullets (!Bullets);
                }}
              />
            </div>
          </div>}
      </div>
      <div
        style={{backgroundColor: HighLighter ? 'white' : '', width: '100%'}}
        className=" HeadingNameBox BorderRadius HeightCoverLetter"
        onClick={HandleCompleteBoarderSelected}
      >
        <div className={`${Bullets ? 'summary' : ''}`}>
          <Editor
            options={{
              placeholder: {
                text: 'Write Summary',
                hideOnClick: true,
              },
            }}
            text={Value}
            onChange={ev => {
              handleInputData (ev);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SummaryCoverLetter;
