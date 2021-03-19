import React, { Component } from "react";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";
import page1 from "../assets/page1.png";

import "./styles/carousel.css";

class Carousel extends Component {
  render() {
    return (
      <Row className="main-container-carousel">
        <Col xl={10} lg={10} md={24} sm={24} xs={24} className="carousel-left">
          <Row>
            <div className="hello-text-carousel">Welcome SMITIAN's at</div>
          </Row>
          <Row>
            <div className="brand-name-carousel">
              Take<span>Easy</span>
            </div>
          </Row>
          <Row>
            <div className="typewriter-text">
              It's&nbsp;&nbsp;
              <span>
                <Typewriter
                  options={{
                    strings: ["Approachable", "Fast", "Handy", "Secure"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </Row>
        </Col>
        <Col xl={14} lg={14} md={0} sm={0} xs={0} className="carousel-right">
          <img className="landing-page-carousel-image" src={page1}></img>
        </Col>
      </Row>
    );
  }
}

export default Carousel;
