import React, { Component } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./styles/sidenav.css";

export class BackNavbar extends Component {
  render() {
    return (
      <div>
        <Row className="main-container-sidenav">
          <Col xs={1} sm={1} lg={1} md={1} xl={1}></Col>
          <Col
            xs={12}
            sm={12}
            lg={10}
            md={10}
            xl={10}
            className="sidenav-brand-container"
          >
            <div className="sidenav-brand-name">
              Take<span>Easy</span>
            </div>
          </Col>
          <Col xs={0} sm={0} lg={10} md={10} xl={10}></Col>
          <Col xs={10} sm={10} lg={2} md={2} xl={2}>
            <Link to="/" className="sidenav-back">
              Back
            </Link>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default BackNavbar;
