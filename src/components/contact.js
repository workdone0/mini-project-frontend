import React, { Component } from "react";
import { Row, Col, Input, Divider, Button } from "antd";

import "./styles/contact.css";
class Contact extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <h1 style={{ margin: "20px 0px 0px" }}>Contact Us</h1>
        </Row>
        <Row justify="center">
          <div className="contact-divider">
            <Divider style={{ borderTopColor: "black", color: "#ea2c62" }}>
              get in touch
            </Divider>
          </div>
        </Row>
        <Row justify="center">
          <Col className="contact-left" span={12}>
            <h2>Get in Touch</h2>
            <p>
              For every problem that you are facing, you can either contact us
              through our email-id or you can directly contact us through the
              given mobile number:
            </p>
            <div style={{ padding: "0rem 2rem" }}>
              <h3>Email-Id</h3>
              <p>takeeasy@gmail.com</p>
              <h3>Contact Number</h3>
              <p>+91 1234567890</p>
            </div>
          </Col>
          <Col className="contact-right" span={12}>
            <h2 style={{ padding: "0rem 1rem" }}>Your Query Here</h2>
            <Row className="contact-form">
              <Col className="contact-input" span={12}>
                <Input size="large" placeholder="name" />
              </Col>
              <Col className="contact-input" span={12}>
                <Input size="large" placeholder="email" />
              </Col>
              <Col className="contact-input" span={24}>
                <Input size="large" placeholder="Subject" />
              </Col>
              <Col className="contact-input" span={24}>
                <Input size="large" placeholder="Message" />
              </Col>
            </Row>
            <Row justify="center" className="contact-input">
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundImage: "linear-gradient(130deg, #f54295, #f58442)",
                  borderColor: "white",
                }}
              >
                Send Message
              </Button>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
