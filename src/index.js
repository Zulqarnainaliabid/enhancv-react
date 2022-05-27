import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.scss';
import reportWebVitals from './reportWebVitals';
import {ContextProvider} from './Components/Context/Context';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render (
  <ContextProvider>
      <App />
  </ContextProvider>,
  document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
