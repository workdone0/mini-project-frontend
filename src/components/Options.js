import React, { Component } from "react";
import { Row, Col } from "antd";

import ServiceCard from "./OptionsCard";
import "./styles/service.css";

class Options extends Component {
  render() {
    const titles = [
      "Conference Room Booking",
      "Clinic Appointment",
      "Utility Booking",
      "Hostel Complaint",
    ];
    return (
      <div className="main-container-service">
        <h1 className="service-heading">Our Services</h1>
        <Row>
          {titles.map((title) => {
            return (
              <Col span={6}>
                <OptionsCard title={title} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Options;