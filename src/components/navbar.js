import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Row className="main-container-nav">
        <Col span={8} className="brand-container">
          <h3 className="brand-name">
            Take<span>Easy</span>
          </h3>
        </Col>
        <Col span={16}>
          <Row>
            <Col span={3} />
            <Col span={3} className="nav-link">
              <p className="nav-link-text">Home</p>
            </Col>
            <Col span={3} className="nav-link">
              <p className="nav-link-text">Notice Board</p>
            </Col>
            <Col span={3} className="nav-link">
              <p className="nav-link-text">Services</p>
            </Col>
            <Col span={3} className="nav-link">
              <p className="nav-link-text">About US</p>
            </Col>
            <Col span={3} className="nav-link">
              <p className="nav-link-text">Contact</p>
            </Col>
            <Col span={3} className="nav-link">
              <p className="nav-link-text">Login/Signup</p>
            </Col>
            <Col span={3} />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
