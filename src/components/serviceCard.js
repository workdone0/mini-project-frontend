import React, { Component } from "react";
import { Row, Col } from "antd";
import "./styles/serviceCard.css";

export default class ServiceCard extends Component {
  render() {
    return (
      <div className="service-card">
        <div className="service-card-body">
          <Row justify="center">
            <Col xs={24} sm={24} lg={24} md={24} xl={24}>
              <h2 style={{ color: "#ea2c62" }}>{this.props.title}</h2>
            </Col>
            <Col xs={0} sm={0} lg={24} md={24} xl={24}>
              <p>{this.props.description}</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
