import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routing from './Components/Routing';
function App (props) {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;