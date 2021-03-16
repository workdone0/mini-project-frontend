import React, { Component } from "react";
import { Row, Col } from "antd";
import Carousel from "react-elastic-carousel";
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
      <div className="main-container-about">
        <Row justify="center">
          <h1 className="about-heading" style={{ margin: "20px 0px" }}>
            Developers
          </h1>
        </Row>
        <Row style={{ width: "100%" }}>
          <Carousel itemsToShow={1} showArrows={false} pagination={false}>
            {names.map((name, index) => {
              return (
                <Col
                  span={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
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
