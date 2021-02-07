import React, { Component } from "react";
import { Row, Col } from "antd";

import ServiceCard from "./serviceCard";
import "./styles/service.css";

class Service extends Component {
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
                <ServiceCard title={title} color="#ffffff" />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Service;
