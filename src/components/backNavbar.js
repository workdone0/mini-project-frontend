import React, { Component } from "react";
import { Row, Col } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./styles/sidenav.css";

export class BackNavbar extends Component {
  goBack = () => {};
  render() {
    return (
      <div>
        <Row className="main-container-sidenav">
          <Col xs={1} sm={1} lg={1} md={1} xl={1}></Col>
          <Col
            xs={14}
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
          <Col
            className="sidenav-back-column"
            xs={7}
            sm={10}
            lg={2}
            md={2}
            xl={2}
          >
            <a onClick={this.props.history.goBack} className="sidenav-back">
              Back
            </a>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default withRouter(BackNavbar);
