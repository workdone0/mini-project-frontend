import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/aboutCard.css";

class AboutCard extends Component {
  render() {
    return (
      <Col span={20}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
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
                <h3 style={{ color: "white" }}>{this.props.fields}</h3>
              </Row>
              <Row justify="center">
                <Col xs={0} sm={0} lg={24} md={24} xl={24}>
                  <p style={{ color: "white" }}>{this.props.year}</p>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={0} sm={0} lg={24} md={24} xl={24}>
                  <p style={{ color: "white" }}>{this.props.dept}</p>
                </Col>
              </Row>
            </div>
          </div>
        </a>
      </Col>
    );
  }
}

export default AboutCard;
