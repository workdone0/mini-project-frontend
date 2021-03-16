import React, { Component } from "react";
import { Row, Col } from "antd";
import { Carousel } from "react-responsive-carousel";

import AboutCard from "./aboutCard";

import "./styles/about.css";

class About extends Component {
  render() {
    const names = ["Shubham Kumar", "Aditi Bansal", "Ayushi Sinha"];
    const description = [
      "Lorem Epsum fsftdvd trdvyebdu aGSGDW HUHUHUHC gcyugcyd",
      "bshbc gafstxs fafsta ysafyfa gyusgd aftdfa ydyfw",
      "cdcq yudwy vahfytdw fatfdtyw ftsfdtw yue",
    ];
    return (
      <div className="main-container-about" id="home-about-us">
        <Row justify="center">
          <h1 className="about-heading" style={{ margin: "20px 0px" }}>
            Teams
          </h1>
        </Row>
        <Row>
          <Carousel
            centerMode
            centerSlidePercentage={100}
            showArrows={false}
            autoPlay
            showIndicators={false}
            showStatus={false}
          >
            {names.map((name, index) => {
              return (
                <Col span={24}>
                  <AboutCard name={name} description={description[index]} />
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
