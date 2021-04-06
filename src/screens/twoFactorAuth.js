import React from "react";
import { Row, Col, Input, Button } from "antd";
import { connect } from "react-redux";
import { sendOtp, verifyOtp } from "../api/twofactorauth";
import { Redirect } from "react-router";

import Police from "../assets/police-duty.png";

import { setCurrentUser } from "../redux/user/user.actions";

class TwoFactorAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      inputOtp: "",
      redirect: false,
      loading: false,
    };
  }
  async componentDidMount() {
    const response = await sendOtp(this.props.currentUser.email);
    if (response.status == 200) {
      this.setState({
        otp: await response.data.OTP,
      });
    }
  }
  submitClicked = async () => {
    this.setState({
      loading: true,
    });
    const otp = this.state.otp;
    const inputOtp = this.state.inputOtp;
    if (otp != "") {
      if (otp == inputOtp) {
        const response = await verifyOtp(this.props.currentUser._id);
        if (response.status == 200) {
          console.log("User Verified");
          this.props.setCurrentUser(response.data.user);
        } else {
          console.log("Network Error");
        }
      } else {
        console.log("Invalid OTP");
      }
    } else {
      console.log("Slow Internet");
    }
    this.setState({
      loading: false,
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Row>
        <Col xl={12} lg={12} md={12} sm={0} xs={0}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img src={Police} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
        </Col>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "10%",
          }}
        >
          <h1 style={{ fontWeight: "700" }}>Verify your email address</h1>
          <h3>
            An email has been sent to you with the OTP. If you have not recieved
            the email check your spam folder.
          </h3>
          <Input
            placeholder="Enter one-time password"
            style={{ margin: "35px 0", borderRadius: "15px", height: "50px" }}
            onChange={(event) => {
              this.setState({
                inputOtp: event.target.value,
              });
            }}
          />
          <Button
            type="primary"
            style={{ borderRadius: "15px", height: "40px" }}
            onClick={this.submitClicked}
            loading={this.state.loading}
          >
            Verify
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TwoFactorAuth);
