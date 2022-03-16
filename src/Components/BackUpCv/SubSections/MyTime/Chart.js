import React, {useState, useEffect,useContext} from 'react';
import Chart from 'react-apexcharts';
import {Context} from '../../Context/Context';

export function InputFieldSlice (props) {
  const [Number, setNumber] = useState ('');
  const [Text, setText] = useState ('');

  useEffect (() => {
    if (localStorage.getItem (props.itme + 'heloitem') !== null) {
      let value = localStorage.getItem (props.itme + 'heloitem');
      value = JSON.parse (value);
      setText (value);
    }
    if (localStorage.getItem (props.itme) !== null) {
      let value = localStorage.getItem (props.itme);
      value = JSON.parse (value);
      value = parseInt (value);
      setNumber (value);
    }
  }, []);
  return (
    <div className="d-flex mb-1" style={{position: 'relative'}}>
      <div>
        <p className="outerWraperName">{props.itme}</p>
      </div>
      <input
       style={{width:"140px"}}
        value={Text}
        className="Lebel"
        type="text"
        placeholder="Activity/inititative"
        onChange={e => {
          setText (e.target.value);
          localStorage.setItem (
            props.itme + 'heloitem',
            JSON.stringify (e.target.value)
          );
        }}
      />
      <input
        className="Lebel"
        type="number"
        placeholder="%"
        value={Number}
        style={{width: '10px'}}
        onChange={e => {
          if (e.target.value > 0 && e.target.value < 101) {
            setNumber (e.target.value);
            let array = props.temp;
            array[props.index] = e.target.value;
            props.setTemp ([...array]);
            props.HandleSeries (array);
            localStorage.setItem (props.itme, JSON.stringify (e.target.value));
            localStorage.setItem ('arraySeries', JSON.stringify (array));
          } else {
            alert ('degit should be less then 30 and greater then 0');
          }
        }}
      />
      <div>%</div>
    </div>
  );
}
const {forwardRef, useRef, useImperativeHandle} = React;
const ApexChart = forwardRef ((props, ref) => {
  const contextData = useContext (Context);
  const [Temp, setTemp] = useState ([5, 5, 5, 5, 5, 5, 5, 5]);
  const [Clor, setClor] = useState ('#00B400');

  let options = {
    fill: {
      colors: [Clor, Clor, Clor],
    },
    labels: props.labels,
    dataLabels: {
      enabled: true,
      formatter: function (val, e) {
        return e.w.config.labels[e.seriesIndex];
      },
    },
    legend: {
      show: false,
    },
  };
  return (
    <div style={{width:"100%"}}>
      <div className="d-flex align-items-center" 
      style={{width:"100%",justifyContent:contextData.ToggleTemplate?"start":"space-between"}}>
        <div style={{width:"50%",marginLeft:contextData.ToggleTemplate?"-40px":""}}>
          <Chart
            className={`${contextData.SelectedColor}`}
            options={options}
            series={props.series}
            type="donut"
            width="100%"
            labels={props.labels}
          />
        </div>
        <div className="outerWraperInputFieldSlice">
          {props.labels &&
            props.labels.map ((item, index) => {
              return (
                <div key={index}>
                  <InputFieldSlice
                    itme={item}
                    setArraysliceinputField={props.setArraysliceinputField}
                    ArraysliceinputField={props.ArraysliceinputField}
                    index={index}
                    HandleSeries={props.HandleSeries}
                    temp={Temp}
                    setTemp={setTemp}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
});

export default ApexChart;
