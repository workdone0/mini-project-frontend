import React, { Component } from "react";
import { Row, Col } from "antd";

import OptionsCard from "./optionsCard";

class Options extends Component {
  render() {
    const titles = [
      "Conference Room Booking",
      "Hospital Appointment",
      "Event Utilities Booking",
      "Register Hostel Complaint",
    ];
    const description = [
        "Do Club meets and Workshops easily!",
        "Get Medical Assistance hassle free on the time when you are Available!",
        "Have an event to Organise? Take no worries as everything you need is here!",
        "Gone are the days of old Complaint Folders!",
      ];
    return (
      <div>
        <h1 className="mx-auto">Our Services</h1>
        <Row>
          {titles.map((title, index) => {
            return (
              <Col span={6}>
                <OptionsCard title={title} description={description[index]}/>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Options;