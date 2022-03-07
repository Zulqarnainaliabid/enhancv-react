import React,{useContext,useState} from 'react';
import Header from './Header';
import {Context} from './Context/Context';
import SummaryCoverLetter from './SummaryCoverLetter'

 const CoverLetterPrint = React.forwardRef ((props, ref) => {
  const contextData = useContext (Context);
  const [displayBackGroundColor, setDisplayBackGroundColor] = useState (false);
  function handleChildClick (e) {
    console.log ('child');
  }
  return (
    <div ref={ref}>
      <div style={{position:"relative"}} className="d-flex mt-2 pb-5 justify-content-center">
        <div
          className="outerContainerResume"
          style={{
            backgroundImage: `url(${contextData.BackImage})`,
            position: 'relative',
          }}
        >
          <div style={{zIndex: '999'}}>
            <div
              className="HoverBackgroundColor CommonCssClassAbsolutePosition LeftRightTopBottomZero"
              style={{
                backgroundColor: 'black',
                opacity: displayBackGroundColor ? '0.8' : '0',
              }}
              onClick={() => {
                setDisplayBackGroundColor (false);
                contextData.handleUpdateBachGroundHighLitter ();
              }}
            />
            <div>
              <Header
                setDisplayBackGroundColor={setDisplayBackGroundColor}
                HandleBackGroundColor={handleChildClick}
              />
            </div>
            <section
              style={{
                width: '100%',
                paddingTop: '12px',
                gap: '20px',
              }}
            />
            <SummaryCoverLetter
              setDisplayBackGroundColor={setDisplayBackGroundColor}
              HandleBackGroundColor={handleChildClick}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between BottomPageCurveCoverLetter">
          <div className="CurveAtTheBottomOfResumeContent RotateLeftSideCurveAtTheBottomOfResumeContent" />
          <div className="CurveAtTheBottomOfResumeContent RotateRightSideCurveAtTheBottomOfResumeContent" />
        </div>
      </div>
    </div>
  );
});

export default CoverLetterPrint
