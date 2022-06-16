import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

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
          console.log ('onchange');
        }}
      />
      <input
        className="Lebel"
        type="number"
        placeholder="%"
        value={props.list[props.index].InputFieldPercentage}
        style={{width: '25px'}}
        onChange={e => {
          console.log ('onchange');
        }}
      />
      <div>%</div>
    </div>
  );
}
const {forwardRef} = React;

const ApexChart = forwardRef ((props, ref) => {
  const [Series, setSeries] = useState ([5, 5, 5]);
  useEffect (() => {
    let temp = [];
    var result = props.list.arraySeries.map (function (x) {
      return parseInt (x);
    });
    for (let i = 0; i < result.length; i++) {
      temp[i] = result[i];
    }
    setSeries ([...temp]);
  }, []);

  let Color = '#686868';
  if (props.Colors === 'darkColor') {
    Color = '#686868';
  }
  if (props.Colors === 'blueColor') {
    Color = '#008cff';
  }
  if (props.Colors === 'greenColor') {
    Color = '#00b400';
  }
  if (props.Colors === 'redColor') {
    Color = '#ff0001';
  }

  let options = {
    fill: {
      colors: [Color, Color, Color],
    },
    labels: props.list.arraySlice.labels,
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
      <div className="d-flex align-items-center">
        <div
          style={{
            width: '50%',
          }}
        >
          <Chart
            options={options}
            series={Series}
            type="donut"
            width="100%"
            labels={props.list.arraySlice.labels}
          />
        </div>
        <div className="outerWrapperInputFieldSlice">
          {props.list.InputFieldCartMyTime &&
            props.list.InputFieldCartMyTime.map ((item, index) => {
              return (
                <div key={index}>
                  <InputFieldSlice
                    item={item}
                    list={props.list.InputFieldCartMyTime}
                    index={index}
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
