import React,{useEffect,useState} from 'react';
import {BallTriangle} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
function CoverLetter (props) {
  const [displayPreLoader, setdisplayPreLoader] = useState (true);
  useEffect (() => {
    const timer = setTimeout (() => {
      console.log ('This will run after 1 second!');
      setdisplayPreLoader (false);
    }, 1000);
    return () => clearTimeout (timer);
  }, []);
  if (displayPreLoader) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '550px',
          flexDirection: 'column',
        }}
      >
        <BallTriangle
          heigth="100"
          width="100"
          color="#00C091"
          ariaLabel="loading"
        />
        <p>
          Pay special attention to your career objective and cover letter, which play an even more important role when you lack work experience.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        overLetter
      </div>
    );
  }
}

export default CoverLetter;
