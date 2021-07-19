import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55],
      labels: ['A', 'B', 'C', 'D', 'E',"f","g"]
    }
   
  }


  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series}  type="donut" width="380" />
      </div>
    );
  }
}

export default ApexChart;
