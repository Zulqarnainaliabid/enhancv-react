import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

export function InputFieldSlice (props) {
  return (
    <div className="d-flex mb-1" style={{position: 'relative'}}>
      <div>
        <p className="outerWrapperName">{props.item.label}</p>
      </div>
      <input
        style={{width:props.HandleEditorWidth()?'140px':"96px"}}
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
  const [Labels, setLabels] = useState (['A', 'B', 'C']);
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
    labels: Labels,
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

  function HandleEditorWidth () {
    console.log ('block', props.Template);
    if (!props.Template) {
      return true;
    } else {
      if (props.Sections !== null) {
        for (let i = 0; i < props.Sections.Left.length; i++) {
          if (props.Sections.Left[i] === 'MyTime') {
            return true;
          }
        }
        for (let i = 0; i < props.Sections.Right.length; i++) {
          if (props.Sections.Right[i] === 'MyTime') {
            console.log ('block222');
            return false;
          }
        }
      }
    }
  }

  useEffect (() => {
    let temp = [];
    var result = props.list.arraySeries.map (function (x) {
      return parseInt (x);
    });
    for (let i = 0; i < result.length; i++) {
      temp[i] = result[i];
    }
    setLabels (props.list.arraySlice.labels);
    setSeries ([...temp]);
  }, []);
  return (
    <div style={{width: '100%'}}>
      <div
        className={`${HandleEditorWidth () ? 'd-flex' : 'd-block'} align-items-center`}
      >
        <div
          style={{
            width: HandleEditorWidth () ? '50%' : '100%',
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
                    HandleEditorWidth={HandleEditorWidth}
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
