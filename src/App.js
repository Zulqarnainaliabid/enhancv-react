import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Components/Context/Context';
import {BrowserRouter} from 'react-router-dom';
import Routing from './Components/Routing';
function App (props) {
  const contextData = useContext (Context);
  const [FontFamily, setFontFamily] = useState ('fontFamilyFaustina');

  useEffect (
    () => {
      console.log ('calling');
      let value = localStorage.getItem ('FontFamily');
      value = JSON.parse (value);
      if (value !== null) {
        setFontFamily (value);
      }
    },
    [contextData.UpdateFontFamily]
  );
  {
    /* <div
        contentEditable={true}
        type="text"
        placeholder="hello"
        onSelect={(e) => {
          console.log ('hello,,',e);
        }}
      >

        kkkk
      </div> */
  }
  return (
    <div className={FontFamily}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
