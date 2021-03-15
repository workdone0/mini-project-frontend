import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/serviceCard.css";

class AboutCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
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
