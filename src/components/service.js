import React, { Component } from "react";
import { Row, Col } from "antd";
import { Carousel } from "react-responsive-carousel";

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
    return (
      <div className="main-container-service" id="home-services">
        <Row justify="center">
          <h1 className="service-heading" style={{ margin: "20px 0px" }}>
            Our Services
          </h1>
        </Row>
        <Row>
          <Carousel
            centerMode
            centerSlidePercentage={35}
            showIndicators={false}
            showStatus={false}
          >
            {titles.map((title, index) => {
              return (
                <Col span={24}>
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
