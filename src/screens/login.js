import React from "react";
import { Row, Col, Input, Button, Card } from "antd";
import { Redirect } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { connect } from "react-redux";

import { loginApi } from "../api/login";
import { setCurrentUser } from "../redux/user/user.actions";
import { Link } from "react-router-dom";
import namaste from "../assets/namaste.png";
import "./styles/login.css";

class Login extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      loginStatus: false,
    };
  }
  onLoginPressed = async () => {
    this.setState({
      loading: true,
    });
    const response = await loginApi(this.state.email, this.state.password);
    if (response.status == 200) {
      const { cookies } = this.props;
      cookies.set("token", response.data.token, {
        path: "/",
        secure: true,
        maxAge: 7 * 24 * 60 * 60,
      });
      console.log(this.props);
      this.props.setCurrentUser(response.data.user);
      this.setState({
        loading: false,
        loginStatus: true, //later to be made true to redirect properly
      });
    } else {
      console.log("Login Failed");
      this.setState({
        loading: false,
      });
    }
  };
  render() {
    if (this.state.loginStatus) {
      return <Redirect to="/" />;
    }
    return (
      <Row align="middle" justify="center" className="login-main-container">
        <Col xl={10} lg={10} md={0} sm={0} xs={0}>
          <img className="image-login" src={namaste} />
        </Col>
        <Col
          xl={14}
          lg={14}
          md={24}
          sm={24}
          xs={24}
          className="login-form-column"
        >
          <h2 className="brand-name-login-page">
            Take<span>Easy</span>
          </h2>
          <Input
            onChange={(event) => this.setState({ email: event.target.value })}
            placeholder="Email"
            className="login-input"
          />
          <Input.Password
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            className="login-input"
            placeholder="Password"
          />
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
                onClick={this.onLoginPressed}
                className="login-button-login-page"
                type="primary"
                loading={this.state.loading}
              >
                <h2 className="login-btn-text">Login</h2>
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
              <p className="bottom-link-login">
                Need an account ? <Link to="/register">Sign Up</Link>
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
              <p className="bottom-link-login">
                <a>Forgot Password?</a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Login));
