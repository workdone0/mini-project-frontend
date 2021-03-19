import React, { Component } from "react";
import { Row, Col } from "antd";
import Carousel from "react-elastic-carousel";

import ServiceCard from "./serviceCard";
import "./styles/service.css";

class Service extends Component {
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
    const breakPoints = [
      { width: 576, itemsToShow: 1, pagination: false },
      { width: 768, itemsToShow: 1, pagination: false },
      { width: 992, itemsToShow: 2, pagination: false },
      { width: 1200, itemsToShow: 2, pagination: false },
    ];
    return (
      <div className="main-container-service" id="home-services">
        <Row justify="center">
          <h1 className="service-heading">Our Services</h1>
        </Row>
        <Row>
          <Carousel breakPoints={breakPoints}>
            {titles.map((title, index) => {
              return (
                <Col
                  key={index}
                  span={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ServiceCard title={title} description={description[index]} />
                </Col>
              );
            })}
          </Carousel>
        </Row>
      </div>
    );
  }
}

export default Service;
