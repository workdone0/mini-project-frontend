import React from "react";
import { Row, Col, Input, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { registerApi } from "../api/register";
import "./styles/register.css";
import Success from "./success";
import namaste from "../assets/namaste.png";

const { Option } = Select;

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      clg_id: "",
      type: "",
      email: "",
      password: "",
      loading: false,
      registerSuccessful: false,
    };
  }
  onRegisterPressed = async () => {
    this.setState({
      loading: true,
    });
    const response = await registerApi(
      this.state.name,
      this.state.phone,
      this.state.email,
      this.state.password,
      this.state.clg_id,
      this.state.type.toUpperCase()
    );
    if (response.status == 201) {
      this.setState({
        registerSuccessful: true,
      });
    } else {
      console.log("Registration Failed");
    }
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <Row align="middle" justify="center" className="register-main-container">
        <Col xl={10} lg={10} md={0} sm={0} xs={0}>
          <img className="image-register" src={namaste} />
        </Col>
        <Col
          xl={14}
          lg={14}
          md={24}
          sm={24}
          xs={24}
          className="register-form-column"
        >
          {this.state.registerSuccessful ? (
            <Success text="Account created successfully." />
          ) : (
            <>
              <h2 className="brand-name-register-page">
                Take<span>Easy</span>
              </h2>
              <Input
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
                className="input-register"
                placeholder="Name"
              />
              <Row>
                <Col span={11}>
                  <Input
                    onChange={(event) =>
                      this.setState({ phone: event.target.value })
                    }
                    className="input-register"
                    placeholder="Contact No"
                  />
                </Col>
                <Col span={2} />
                <Col span={11}>
                  <Input
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                    className="input-register"
                    placeholder="Email Id"
                  />
                </Col>
              </Row>
              <Input.Password
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                className="input-register"
                placeholder="Password"
              />
              <Row>
                <Col span={11}>
                  <Input
                    onChange={(event) =>
                      this.setState({ clg_id: event.target.value })
                    }
                    className="input-register"
                    placeholder=" College Id"
                  />
                </Col>
                <Col span={2} />
                <Col span={11}>
                  <Select
                    onChange={(value) => this.setState({ type: value })}
                    dropdownClassName="register-dropdown"
                    className="input-register-dropdown"
                    placeholder="Account Type"
                    dropdownMatchSelectWidth
                    bordered={false}
                  >
                    <Option value="1">Professor </Option>
                    <Option value="0">Student</Option>
                    <Option value="2">Non Teaching Staff</Option>
                  </Select>
                </Col>
              </Row>

              <Row>
                <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "4%",
                  }}
                >
                  <Button
                    onClick={this.onRegisterPressed}
                    className="register-button-register-page"
                    type="primary"
                    loading={this.state.loading}
                  >
                    <h2 className="register-btn-text">Register</h2>
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "8%" }}>
                <Col
                  xl={15}
                  lg={15}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ textAlign: "center" }}
                >
                  <p className="bottom-link-register">
                    Already a User? <Link to="/login">Login</Link>
                  </p>
                </Col>
                <Col
                  xl={9}
                  lg={9}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ textAlign: "center" }}
                >
                  <p className="bottom-link-register">
                    <a>Forgot Password?</a>
                  </p>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    );
  }
}

export default Register;
