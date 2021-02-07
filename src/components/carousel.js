import React, { Component } from "react";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";

import "./styles/carousel.css";

class Carousel extends Component {
  render() {
    return (
      <Row className="main-container-carousel">
        <Col span={12} className="carousel-left">
          <h3 className="hello-text-carousel">Hello SMITAN's</h3>
          <h1 className="brand-name-carousel">TakeItEasy</h1>
          <h2 className="typewriter-text">
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
          </h2>
        </Col>
        <Col span={12} className="carousel-right"></Col>
      </Row>
    );
  }
}

export default Carousel;
