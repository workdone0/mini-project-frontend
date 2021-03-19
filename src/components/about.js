import React, { Component } from "react";
import { Row, Col } from "antd";
import Carousel from "react-elastic-carousel";
import AboutCard from "./aboutCard";

import "./styles/about.css";

import conference from "../assets/conference.png";
import complaint from "../assets/complaint.png";
import hospital from "../assets/hospital.png";

class About extends Component {
  render() {
    const names = ["Shubham Kumar", "Aditi Bansal", "Ayushi Sinha"];
    const description = [
      "Backend Developer,Third Year ,Computer Science and Engineering Student.",
      "Frontend Developer,Third Year ,Computer Science and Engineering Student.",
      "Frontend Developer,Third Year ,Computer Science and Engineering Student.",
    ];
    const images = [conference, complaint, hospital];
    const breakPoints = [
      {
        width: 576,
        itemsToShow: 1,
        pagination: false,
        showArrows: true,
        enableAutoPlay: true,
        autoPlaySpeed: 300,
      },
      {
        width: 768,
        itemsToShow: 2,
        pagination: false,
        showArrows: true,
        enableAutoPlay: true,
        autoPlaySpeed: 300,
      },
      { width: 992, itemsToShow: 3, pagination: false, showArrows: false },
      { width: 1200, itemsToShow: 3, pagination: false, showArrows: false },
    ];
    return (
      <div className="main-container-about" id="home-about-us">
        <hr />
        <Row justify="center">
          <h1 className="about-heading" style={{ margin: "50px 0px" }}>
            Developers
          </h1>
        </Row>
        <Row style={{ width: "100%" }}>
          <Carousel breakPoints={breakPoints}>
            {names.map((name, index) => {
              return (
                <Col
                  key={index}
                  span={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <AboutCard
                    images={images[index]}
                    name={name}
                    description={description[index]}
                  />
                </Col>
              );
            })}
          </Carousel>
        </Row>
      </div>
    );
  }
}

export default About;
