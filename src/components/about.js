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
    return (
      <div className="main-container-about" id="home-about-us">
        <hr />
        <Row justify="center">
          <h1 className="about-heading" style={{ margin: "20px 0px" }}>
            Developers
          </h1>
        </Row>
        <Row style={{ width: "100%" }}>
          <Carousel itemsToShow={3} showArrows={false} pagination={false}>
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
