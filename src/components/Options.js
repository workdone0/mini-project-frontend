import React, { Component, useImperativeHandle } from "react";
import { Row, Col } from "antd";

import OptionsCard from "./optionsCard";
import conference from "../assets/conference.png";
import complaint from "../assets/complaint.png";
import hospital from "../assets/hospital.png";
import event from "../assets/event.png";

class Options extends Component {
  render() {
    const titles = [
      "Conference Room Booking",
      "Hospital Appointment",
      "Event Utilities Booking",
      "Register Hostel Complaint",
    ];
    const description = [
      "Do Club meets and organise Workshops easily!",
      "Get Medical Assistance hassle free on the time when you are Available!",
      "Have an event to Organise? Take no worries as everything you need is here!",
      "Gone are the days of old Complaint Folders!",
    ];
    const image = [conference, hospital, event, complaint];
    return (
      <div>
        <Row justify="center">
          <h1 style={{ margin: "20px 0px" }}>Our Services</h1>
        </Row>
        <Row>
          {titles.map((title, index) => {
            return (
              <Col span={6}>
                <OptionsCard
                  title={title}
                  description={description[index]}
                  image={image[index]}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Options;
