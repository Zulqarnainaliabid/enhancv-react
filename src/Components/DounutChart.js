import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from 'react-chartjs-2';
export function InputFieldSlice(props) {
  const [Number, setNumber] = useState('');
  const [Text, setText] = useState("");
  const [TempArray, setTempArray] = useState({ name: "", number: null });

  useEffect(() => {
    if (localStorage.getItem(props.itme.label) !== null) {
      let value = localStorage.getItem(props.itme.label);
      value = JSON.parse(value);
      setText(value.name);
    }
    if (localStorage.getItem(props.itme.number) !== null) {
      let value = localStorage.getItem(props.itme.number);
      value = JSON.parse(value);
      console.log("ii",value)
      setNumber(parseInt(value.number));
    }
  }, []);

  return (
    <div className="outerWraperLAbel">
      <div className="outerWraperName">{props.itme.label}</div>
      <input
        value={Text}
        className="Lebel"
        type="text"
        placeholder="Activity/inititative"
        onChange={(e) => {
          let tempobj = TempArray
          tempobj.name = e.target.value;
          setText(e.target.value);
          localStorage.setItem(props.itme.label, JSON.stringify(tempobj));
        }}
      />
      <input
        className="Lebel"
        type="number"
        placeholder="%"
        value={Number}
        style={{ width: "40px" }}
        onChange={(e) => {
          if(e.target.value > 0 && e.target.value < 101){
            let temoobj = TempArray
            temoobj.number = e.target.value;
            setNumber(e.target.value);
            localStorage.setItem(props.itme.number, JSON.stringify(temoobj));
            if (localStorage.getItem("slice") !== null) {
              let value = localStorage.getItem("slice");
              value = JSON.parse(value);
              if(value===4){
                props.HandleNumberOfslice3(props.itme.number, e.target.value)
              }else if(value===6){
                props.HandleNumberOfslice6(props.itme.number, e.target.value)
              }else if(value===8){
                props.HandleNumberOfslice9(props.itme.number, e.target.value)
              }
            }
          }else{
           alert("degit should be less then 30 and greater then 0")
          }
        }}
      />
    </div>
  );
}
const { forwardRef, useRef, useImperativeHandle } = React;
const data = {
  //labels: ["Red", "Blue", "Yellow", "g"],
  datasets: [
    {
      // label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const ApexChart = forwardRef((props, ref) => {
  const ref2 = useRef();
  const [Count, setCount] = useState(data);
  const [SizeOFSlice, setSizeOFSlice] = useState({A1:5,A2:5,A3:5,A4:5,A5:5,A6:5,A7:5,A7:5,A8:5});
  useEffect(() => {
    if (localStorage.getItem("number") !== null) {
      let value = localStorage.getItem("number");
      value = JSON.parse(value);
      setSizeOFSlice(value);
    }
  },[]);
  useImperativeHandle(ref, () => ({
    getAlert(number,name,value) {
      localStorage.setItem("slice", JSON.stringify(number));
      if(name==="A1"){
        let temp=SizeOFSlice
        temp.A1=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A2"){
        let temp=SizeOFSlice
        temp.A2=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A3"){
        let temp=SizeOFSlice
        temp.A3=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A4"){
        let temp=SizeOFSlice
        temp.A4=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A5"){
        let temp=SizeOFSlice
        temp.A5=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A6"){
        let temp=SizeOFSlice
        temp.A6=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A7"){
        let temp=SizeOFSlice
        temp.A7=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }else if(name==="A8"){
        let temp=SizeOFSlice
        temp.A8=value
        setSizeOFSlice(temp)
        localStorage.setItem("number", JSON.stringify(temp));
      }
      if (number === 4) {
        setCount({
          // labels: ["Red", "Blue", "Yellow", "g"],
          datasets: [
            {
              // label: "# of Votes",
              data: [SizeOFSlice.A1, SizeOFSlice.A2, SizeOFSlice.A3, SizeOFSlice.A4],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      } else if (number === 6) {
        setCount({
          // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              // label: "# of Votes",
              data: [SizeOFSlice.A1, SizeOFSlice.A2, SizeOFSlice.A3, , SizeOFSlice.A4, SizeOFSlice.A5, SizeOFSlice.A6],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      } else if (number === 8) {
        setCount({
          // labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
          datasets: [
            {
              // label: "# of Votes",
              data: [SizeOFSlice.A1, SizeOFSlice.A2, SizeOFSlice.A3, , SizeOFSlice.A4, SizeOFSlice.A5, SizeOFSlice.A6,SizeOFSlice.A7,SizeOFSlice.A8],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      }
    },
  }));
  
  var options = {
    type: 'Doughnut',
    data: {
      
    },
    options: {
      plugins: {
        datalabels: {
          anchor: function(context) {
            var value = context.dataset.data[context.dataIndex];
            return value.v < 50 ? 'end' : 'center';
          },
          align: function(context) {
            var value = context.dataset.data[context.dataIndex];
            return value.v < 50 ? 'end' : 'center';
          },
          color: function(context) {
            var value = context.dataset.data[context.dataIndex];
            return value.v < 50 ? context.dataset.backgroundColor : 'white';
          },
          font: {
            weight: 'bold'
          },
          formatter: function(value) {
            return Math.round(value.v);
          },
          offset: 2,
          padding: 0
        }
      },
  
      // Core options
      aspectRatio: 5 / 3,
      layout: {
        padding: 16
      },
      elements: {
        point: {
          radius: function(context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 100;
            return (size / 24) * base;
          }
        }
      },
    }
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="OuterWraperDoughnutchart">
          <Doughnut data={Count} ref={ref2} options={options} 
          />
        </div>
        <div
          style={{ border: "1px solid" }}
          className="outerWraperInputFieldSlice"
        >
          {props.ArraysliceinputField.map((item, index) => {
            return (
              <div key={index}>
                <InputFieldSlice
                  itme={item}
                  setArraysliceinputField={props.setArraysliceinputField}
                  ArraysliceinputField={props.ArraysliceinputField}
                  index={index}
                  NumberOfSlice={props.NumberOfSlice}
                  HandleNumberOfslice3={props.HandleNumberOfslice3}
                  HandleNumberOfslice6={props.HandleNumberOfslice6}
                  HandleNumberOfslice9={props.HandleNumberOfslice9}
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
