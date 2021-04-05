import React, { Component } from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";

import { MenuOutlined } from "@ant-design/icons";

import "./styles/sidenav.css";

export class BackNavbarProfile extends Component {
  render() {
    return (
      <Row className="main-container-sidenav">
        {this.props.needHam ? (
          <Col
            xl={0}
            lg={0}
            md={2}
            sm={2}
            xs={2}
            style={{ textAlign: "center", paddingTop: "15px" }}
          >
            <MenuOutlined
              onClick={this.props.toggleDrawer}
              style={{ color: "#ffffff", fontSize: "20px" }}
            />
          </Col>
        ) : (
          <Col xl={0} lg={0} md={2} sm={2} xs={2} />
        )}
        <Col xl={2} lg={2} md={0} sm={0} xs={0} />
        <Col
          xl={16}
          lg={16}
          md={16}
          sm={16}
          xs={16}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="sidenav-brand-name">
            Take<span>Easy</span>
          </div>
        </Col>
        <Col
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a onClick={this.props.history.goBack} className="sidenav-back">
            Back
          </a>
        </Col>
      </Row>
    );
  }
}

export default withRouter(BackNavbarProfile);
