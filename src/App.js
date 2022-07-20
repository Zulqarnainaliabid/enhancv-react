import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Components/Context/Context';
import {BrowserRouter} from 'react-router-dom';
import Routing from './Components/Routing';
function App (props) {
  const contextData = useContext (Context);
  const [FontFamily, setFontFamily] = useState ('fontFamilyFaustina');

  useEffect (
    () => {
      let value = localStorage.getItem ('FontFamily');
      value = JSON.parse (value);
      if (value !== null) {
        setFontFamily (value);
      }
    },
    [contextData.UpdateFontFamily]
  );
  return (
    <div className={FontFamily}
    onClick={()=>{
      console.log("hrrrrr--==")
      contextData.handleRemoveBackGround (true);
    }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
