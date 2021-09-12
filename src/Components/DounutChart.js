import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";

export function InputFieldSlice(props) {
  const [Number, setNumber] = useState("");
  const [Text, setText] = useState("");

  useEffect(() => {
    if (localStorage.getItem(props.itme + "heloitem") !== null) {
      let value = localStorage.getItem(props.itme + "heloitem");
      value = JSON.parse(value);
      setText(value);
    }
    if (localStorage.getItem(props.itme) !== null) {
      let value = localStorage.getItem(props.itme);
      value = JSON.parse(value);
      value = parseInt(value);
      setNumber(value);
    }
  }, []);
  return (
    <div className="outerWraperLAbel" style={{ position: "relative" }}>
      <div className="outerWraperName">{props.itme}</div>
      <input
        value={Text}
        className="Lebel"
        type="text"
        placeholder="Activity/inititative"
        onChange={(e) => {
          setText(e.target.value);
          localStorage.setItem(
            props.itme + "heloitem",
            JSON.stringify(e.target.value)
          );
        }}
      />
      <input
        className="Lebel"
        type="number"
        placeholder="%"
        value={Number}
        style={{ width: "40px" }}
        onChange={(e) => {
          if (e.target.value > 0 && e.target.value < 101) {
            setNumber(e.target.value);
            let array = props.temp;
            array[props.index] = e.target.value;
            props.setTemp([...array]);
            props.HandleSeries(array);
            localStorage.setItem(props.itme, JSON.stringify(e.target.value));
            localStorage.setItem("arraySeries", JSON.stringify(array));
          } else {
            alert("degit should be less then 30 and greater then 0");
          }
        }}
      />
      <div className="outerWraperPercentage">
        <div>%</div>
      </div>
    </div>
  );
}
const { forwardRef, useRef, useImperativeHandle } = React;
const ApexChart = forwardRef((props, ref) => {
  const [Temp, setTemp] = useState([5, 5, 5, 5, 5, 5, 5, 5]);
  const [Clor, setClor] = useState("#00B400");
  const UpdateColor = useSelector((state) => state.UpdateColor);
  useEffect(() => {
    if(UpdateColor){
      setClor("#008CFF")
    }else{
      setClor("#00B400")
    }
  },
   [UpdateColor]);
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
    <>
      <div style={{ display: "flex" }}>
        <div className="OuterWraperDoughnutchart">
          <Chart
            options={options}
            series={props.series}
            type="donut"
            width="380"
            labels={props.labels}
          />
        </div>
        <div className="outerWraperInputFieldSlice">
          {props.labels &&
            props.labels.map((item, index) => {
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
    </>
  );
});

export default ApexChart;
