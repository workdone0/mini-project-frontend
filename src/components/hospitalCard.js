import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/hospitalCard.css";

class HospitalCard extends Component {
  render() {
    return (
      <Col span={20}>
        <div className="card-about" >
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
            <Row justify="center">
              <p style={{ color: "white" }}>Phone No : {this.props.phone}</p>
            </Row>
            <Row justify="center">
              <p style={{ color: "white" }}>Timing : {this.props.shift}</p>
            </Row>
          </div>
        </div>
      </Col>
    );
  }
}

export default HospitalCard;
