import React, { Component } from "react";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";
import page1 from "../assets/page1.png";

import "./styles/carousel.css";

class Carousel extends Component {
  render() {
    return (
      <Row className="main-container-carousel">
        <Col span={10} className="carousel-left">
          <Row><div className="hello-text-carousel"><span>W</span>elcome&nbsp; SMITIAN's&nbsp; at</div></Row>
          <Row><div className="brand-name-carousel">Take<span>Easy</span></div></Row>
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
        <Col span={14} className="carousel-right"><img className="landing-page-carousel-image"src={page1} ></img></Col>
        
      </Row>
    );
  }
}

export default Carousel;
