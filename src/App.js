import Home from "./Components/HomePage";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import React from 'react'
import AlertTemplate from "react-alert-template-basic";
import { useSelector, useDispatch } from "react-redux";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import ReactToPdf from "react-to-pdf";
import { INCREMENT, INCREMENTDATA } from "./Components/Redux/actions/indux";
import { useRef } from "react";
function App() {
  const counter = useSelector((state) => state.counter);
  const CounterData = useSelector((state) => state.CounterData);
  const dispatch = useDispatch();
  const ref = React.createRef();
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.SCALE,
  };
  const types = {
    ERROR: "error",
  };
  const optionsxyz = {
    orientation: 'portrait',
    unit: 'in',
    format: [8,8]
};

  return (
    <>
      <AlertProvider template={AlertTemplate} {...types} {...options} >
        <div ref={ref}>
          <Home />
        </div>
        <button onClick={() => dispatch(INCREMENT())}>+</button>
        <button onClick={() => dispatch(INCREMENTDATA())}>+datahelo</button>
        <div>counter = {counter}</div>
        <div>Helo Pdf</div>
        <div>counter = {CounterData}</div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf"  options={optionsxyz} scale={.58}>
          {({ toPdf }) => (
            <>
              <button onClick={toPdf}>Generate pdf</button>
            </>
          )}
        </ReactToPdf>
      </AlertProvider>
    </>
  );
}

export default App;
