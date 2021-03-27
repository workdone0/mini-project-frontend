import React, { Component } from "react";
import { Row, Col, Input, Divider, Button } from "antd";

import "./styles/contact.css";
class Contact extends Component {
  render() {
    return (
      <>
        <Row justify="center" align="middle">
          <h1 style={{ margin: "50px 0px" }}>Contact Us</h1>
        </Row>

        <Row justify="center">
          <Col className="contact-left" xs={0} sm={0} md={0} lg={12} xl={12}>
            <h2>Get in Touch</h2>
            <p>
              For every problem that you are facing, you can either contact us
              through our email-id or you can directly contact us through the
              given mobile number:
            </p>
            <div style={{ padding: "0rem 2rem" }}>
              <Row>
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="crimson"
                    className="bi bi-envelope-fill contact-icons"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </Col>
                <Col>
                  <h3>Email-Id</h3>
                  <p>takeeasy@gmail.com</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="crimson"
                    className="bi bi-telephone-outbound-fill contact-icons"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </Col>
                <Col>
                  <h3>Contact Number</h3>
                  <p>+91 1234567890</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            className="contact-right"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <h2 style={{ padding: "0rem 1rem" }}>Your Query Here</h2>
            <Row className="contact-form">
              <Col className="contact-input" span={12}>
                <Input size="large" placeholder="Name" />
              </Col>
              <Col className="contact-input" span={12}>
                <Input size="large" placeholder="Email" />
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
                  backgroundColor: "crimson ",
                  borderRadius: "10px",
                  border: "none",
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
