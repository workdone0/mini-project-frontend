import React, { Component } from "react";
import { VictoryPie } from "victory";

class Chart extends Component {
  render() {
    const approved = this.props.approved;
    const declined = this.props.declined;
    const pending = this.props.pending;
    return (
      <VictoryPie
        colorScale={["navy", "tomato", "yellow"]}
        cornerRadius={3}
        innerRadius={15}
        padAngle={2}
        style={{
          labels: {
            fontSize: "8px",
            fill: "#000000",
          },
        }}
        height={200}
        data={
          pending != 0
            ? [
                { x: "Approved", y: approved },
                { x: "Declined", y: declined },
                { x: "Pending", y: pending },
              ]
            : [
                { x: "Approved", y: approved },
                { x: "Declined", y: declined },
              ]
        }
        animate={{
          duration: 2000,
        }}
      />
    );
  }
}

export default Chart;
