import React, {useState, useEffect, useContext} from 'react';
import Chart from 'react-apexcharts';
import {Context} from '../../Context/Context';

export function InputFieldSlice (props) {
  return (
    <div className="d-flex mb-1" style={{position: 'relative'}}>
      <div>
        <p className="outerWrapperName">{props.item.label}</p>
      </div>
      <input
        style={{width: '140px'}}
        value={props.list[props.index].InputFieldActivity}
        className="Lebel"
        type="text"
        placeholder="Activity / Occupation"
        onChange={e => {
          props.handleInputFiled (props.index, e.target.value);
        }}
      />
      <input
        className="Lebel"
        type="number"
        placeholder="%"
        value={props.list[props.index].InputFieldPercentage}
        style={{width: '25px'}}
        onChange={e => {
          let array = props.Temp;
          array[props.index] = e.target.value;

          props.setTemp ([...array]);
          props.HandleSeries (array);
          props.handleInputFiledTypePercentage (props.index, e.target.value);
          localStorage.setItem ('arraySeries', JSON.stringify (array));
        }}
      />
      <div>%</div>
    </div>
  );
}
const {forwardRef} = React;
const ApexChart = forwardRef ((props, ref) => {
  const contextData = useContext (Context);
  const [Temp, setTemp] = useState ([5, 5, 5, 5, 5, 5, 5, 5]);

  let Color = '#686868';
  if (contextData.SelectedColor === 'darkColor') {
    Color = '#686868';
  }
  if (contextData.SelectedColor === 'blueColor') {
    Color = '#008cff';
  }
  if (contextData.SelectedColor === 'greenColor') {
    Color = '#00b400';
  }
  if (contextData.SelectedColor === 'redColor') {
    Color = '#ff0001';
  }

  let options = {
    fill: {
      colors: [Color, Color, Color],
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
    <div style={{width: '100%'}}>
      <div
        className="d-flex align-items-center"
        style={{
          width: '100%',
          justifyContent: contextData.ToggleTemplate
            ? 'start'
            : 'space-between',
        }}
      >
        <div
          style={{
            width: '50%',
            marginLeft: contextData.ToggleTemplate ? '-40px' : '',
          }}
        >
          <Chart
            className={`${contextData.SelectedColor}`}
            options={options}
            series={props.series}
            type="donut"
            width="100%"
            labels={props.labels}
          />
        </div>
        <div className="outerWrapperInputFieldSlice">
          {props.InputFieldChart &&
            props.InputFieldChart.map ((item, index) => {
              return (
                <div key={index}>
                  <InputFieldSlice
                    item={item}
                    list={props.InputFieldChart}
                    index={index}
                    handleInputFiled={props.handleInputFiled}
                    HandleSeries={props.HandleSeries}
                    handleInputFiledTypePercentage={
                      props.handleInputFiledTypePercentage
                    }
                    Temp={Temp}
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
