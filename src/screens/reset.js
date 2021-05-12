import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Row, Col, Input, Button, notification } from "antd";
import { updatePwd } from "../api/register";

class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      confirmPassword: "",
      disable: true,
      redirect: false,
    };
  }
  updatePwd = async (event) => {
    this.setState({
      password: await event.target.value,
    });
    if (
      this.state.password == this.state.confirmPassword &&
      this.state.password != ""
    ) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  };
  confirmPwd = async (event) => {
    this.setState({
      confirmPassword: await event.target.value,
    });
    if (
      this.state.password == this.state.confirmPassword &&
      this.state.password != ""
    ) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  };
  submit = async () => {
    const response = await updatePwd(
      this.props.location.state.token,
      this.state.password
    );
    if (response.status == 200) {
      notification.open({
        message: "Message",
        description: "Password updated successfully. Please proceed to login",
      });
      this.setState({
        password: "",
        confirmPassword: "",
        redirect: true,
      });
    } else {
      notification.open({
        message: "Message",
        description: "Something went wrong. Please try again",
      });
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    if (!this.props.location.state.value) {
      return (
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <h1>Invalid Link.</h1>
          </Col>
        </Row>
      );
    }
    return (
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 15%",
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
            Reset Password
          </h1>
          <Input.Password
            size="large"
            placeholder="Enter Password"
            style={{ marginBottom: "2%", borderRadius: "15px" }}
            onChange={this.updatePwd}
          />

          <Input.Password
            size="large"
            placeholder="Confirm Password"
            onChange={this.confirmPwd}
            style={{ borderRadius: "15px", marginBottom: "4%" }}
          />

          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ width: "50%" }}
            disabled={this.state.disable}
            onClick={this.submit}
          >
            Submit
          </Button>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Reset);
