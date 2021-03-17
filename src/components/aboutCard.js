import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/aboutCard.css";
import page1 from "../assets/page1.png";

class AboutCard extends Component {
  render() {
    return (
      <Col span={20}>
        <div className="card-about">
          <div className="card-body-about">
            <img
              className="about-card-image"
              src={this.props.images}
              alt=""
            ></img>
            <Row justify="center">
              <h2 style={{ color: "white" }}>{this.props.name}</h2>
            </Row>
            <Row justify="center">
              <p style={{ color: "white" }}>{this.props.description}</p>
            </Row>
          </div>
        </div>
      </Col>
    );
  }
}

export default AboutCard;
