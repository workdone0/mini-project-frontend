import React, { Component } from "react";
import { Row, Col, Input, Button, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { forgotPwd } from "../api/twofactorauth";

import BackNavbar from "../components/backNavbar";

import forgot from "../assets/forgotP.png";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  onSubmit = async () => {
    const response = await forgotPwd(this.state.email);
    if (response.status == 200) {
      notification.open({
        message: "Message",
        description: "Email sent successfully. Please check your email.",
      });
    } else {
      notification.open({
        message: "Message",
        description: "Something went wrong. Please try again",
      });
    }
  };

  render() {
    return (
      <Row style={{ height: "100vh" }}>
        <Col span={24}>
          <BackNavbar />
        </Col>
        <Col span={12}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={forgot} style={{ objectFit: "cover", height: "80vh" }} />
          </div>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "2%",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            Don't Worry
          </h1>
          <br />
          <p style={{ fontSize: "20px", fontWeight: "500" }}>
            We are here to help you recover your password. Enter the email
            address you used while joining and we will email you the
            instructions to reset your password.
          </p>
          <Input
            size="large"
            placeholder="Enter email"
            prefix={<UserOutlined />}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <Button
            type="primary"
            size="large"
            style={{ marginTop: "5px" }}
            onClick={this.onSubmit}
          >
            Send
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ForgotPassword;
