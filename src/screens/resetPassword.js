import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { verifyForgotLink } from "../api/verify";
import LoadingAnimation from "./loadingAnimation";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      value: false,
    };
  }

  componentDidMount = async () => {
    const response = await verifyForgotLink(this.props.match.params.token);
    if (response.status == 200) {
      this.setState({
        redirect: true,
        value: true,
      });
    } else {
      this.setState({
        value: false,
        redirect: true,
      });
    }
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/reset",
            state: {
              value: this.state.value,
              token: this.props.match.params.token,
            },
          }}
        />
      );
    }
    return <LoadingAnimation />;
  }
}

export default withRouter(ResetPassword);
