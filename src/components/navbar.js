import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Row className="main-container-nav">
        <Col span={8} className="brand-container">
          <div className="brand-name">
            Take<span>Easy</span>
          </div>
        </Col>
        <Col span={16}>
          <Row align="middle">
            <Col span={3} />
            <Col span={3} className="nav-link">
              <div className="nav-link-text">Home</div>
            </Col>
            <Col span={3} className="nav-link">
              <div className="nav-link-text">Notice Board</div>
            </Col>
            <Col span={3} className="nav-link">
              <div className="nav-link-text">Services</div>
            </Col>
            <Col span={3} className="nav-link">
              <div className="nav-link-text">About US</div>
            </Col>
            <Col span={3} className="nav-link">
              <div className="nav-link-text">Contact</div>
            </Col>
            <Col span={3} className="nav-link">
              <div className="nav-link-text">Login/Signup</div>
            </Col>
            <Col span={3} />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
