import React from "react";
import { Row, Col, Input, Button,Card } from "antd";
import { Redirect } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { connect } from "react-redux";


import { loginApi } from "../api/login";
import { setCurrentUser } from "../redux/user/user.actions";
import { Link } from "react-router-dom";
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
      <Row className="login-main-container">
       
        <Col span={10} className="login-form-column">
        <div className="login-container">
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
          <Row>
           <Col span={15}>
         <p style={{color:"white", margin:"10px"}}> Need an account ? <Link to="/register">Sign Up</Link></p>
         </Col> 
         <Col span={9}>
          <p style={{paddingTop:"10px"}}> <a >Forgot Password?</a></p>
         </Col>
         </Row>
          </div>
         
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
