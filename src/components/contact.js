import React, { Component } from "react";
import { Row, Col, Input } from "antd";

import "./styles/contact.css";
class Contact extends Component {
  render() {
    return (
      <>
        <Row style={{ textAlign: "center" }}>
          <Col span={24}>Contact Us</Col>
        </Row>
        <Row>
          <Col span={12}>
            <h2>Get in Touch</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos harum corporis fuga corrupti. Doloribus quis soluta
              nesciunt veritatis vitae nobis?
            </p>
          </Col>
          <Col span={12}>
            <h2>Your Query Here</h2>
            <Row>
              <Col span={12}>
                <Input placeholder="name" />
              </Col>
              <Col span={12}>
                <Input placeholder="email" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Input placeholder="Subject" />
              </Col>
              <Col span={24}>
                <Input placeholder="Message" />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
