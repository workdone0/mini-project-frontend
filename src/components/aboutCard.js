import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/aboutCard.css";

class AboutCard extends Component {
  render() {
    return (
      <div className="about-card">
        <div className="about-card-body">
          <Row justify="center">
            <h2 style={{ color: "#ea2c62" }}>{this.props.name}</h2>
          </Row>
          <Row justify="center">
            <p>{this.props.description}</p>
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutCard;
