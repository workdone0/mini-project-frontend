import React, { Component, useImperativeHandle } from "react";
import { Row, Col } from "antd";

import ConferenceOptionsCard from "./conferenceOptionsCard";

class ConferenceOptions extends Component {
  render() {
    const titles = [
      "A-101",
      "A-102",
      "A-103",
      "Multipurpose Hall",
      "A-107",
      "A-109",
      "A-110",
      "Multipurpose Hall",
    ];
    const description = [
      "Capacity:50  Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",
      "Capacity:50 Air-Conditioned:No Projector:Yes",

    ];
   
    return (
      <div>
        <Row justify="center"><h1 style={{margin: "20px 0px"}}>Book Conference Room Here!</h1></Row>
        <Row>
          {titles.map((title, index) => {
            return (
              <Col span={6}>
                <ConferenceOptionsCard title={title} description={description[index]}  />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default ConferenceOptions;
