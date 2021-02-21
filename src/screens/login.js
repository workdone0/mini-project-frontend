import React from "react";
import { Row, Col, Input, Button } from "antd";

import { loginApi } from "../api/login";
import "./styles/login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }
  onLoginPressed = async () => {
    this.setState({
      loading: true,
    });
    const response = await loginApi(this.state.email, this.state.password);
    if (response.status == 200) {
      console.log("Login Successful");
      this.setState({
        loading: false,
      });
    } else {
      console.log("Login Failed");
      this.setState({
        loading: false,
      });
    }
  };
  render() {
    return (
      <Row className="login-main-container">
        <Col span={8}></Col>
        <Col span={8} className="login-form-column">
          <h2 className="brand-name-login-page">
            Take<span>Easy</span>
          </h2>
          <Input
            onChange={(event) => this.setState({ email: event.target.value })}
            className="email-input-form"
            placeholder="Email"
          />
          <Input.Password
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            className="password-input-form"
            placeholder="Password"
          />
          <Button
            onClick={this.onLoginPressed}
            className="login-button-login-page"
            type="primary"
            loading={this.state.loading}
          >
            Login
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    );
  }
}

export default Login;
