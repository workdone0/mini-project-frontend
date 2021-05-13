import React, { Component } from "react";
import { Row, Col } from "antd";
import Carousel from "react-elastic-carousel";
import AboutCard from "./aboutCard";

import "./styles/about.css";

import conference from "../assets/shubham.jpeg";
import complaint from "../assets/aditi.jpeg";
import hospital from "../assets/ayushi.jpg";

class About extends Component {
  render() {
    const names = ["Shubham Kumar", "Aditi Bansal", "Ayushi Sinha"];
    const fields = [
      "Full Stack Developer",
      "Frontend Developer",
      "Frontend Developer",
    ];
    const year = ["Third Year", "Third Year", "Third Year"];
    const dept = [
      "Computer Science and Engineering Department",
      "Computer Science and Engineering Department",
      "Computer Science and Engineering Department",
    ];
    const anchor = [
      "https://github.com/workdone0",
      "https://www.linkedin.com/in/aditi-bansal-02a265178/",
      "https://www.linkedin.com/in/ayushi-sinha-2509",
    ];
    const images = [conference, complaint, hospital];
    const breakPoints = [
      {
        width: 576,
        itemsToShow: 1,
        pagination: false,
        showArrows: true,
        enableAutoPlay: true,
        autoPlaySpeed: 3000,
      },
      {
        width: 768,
        itemsToShow: 2,
        pagination: false,
        showArrows: true,
        enableAutoPlay: true,
        autoPlaySpeed: 3000,
      },
      {
        width: 992,
        itemsToShow: 3,
        pagination: false,
        showArrows: false,
      },
      {
        width: 1200,
        itemsToShow: 3,
        pagination: false,
        showArrows: false,
      },
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
                    fields={fields[index]}
                    year={year[index]}
                    dept={dept[index]}
                    link={anchor[index]}
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
