import React, { Component } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import SuccessAni from "../assets/animation/success.json";

class Success extends Component {
  render() {
    return (
      <Row justify="center" align="middle">
        <Col span={24}>
          <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={false}
            src={SuccessAni}
            style={{
              window: "auto",
              margin: "auto",
              height: "300px",
            }}
          ></Player>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>{this.props.text}</h2>
        </Col>
      </Row>
    );
  }
}

export default Success;
