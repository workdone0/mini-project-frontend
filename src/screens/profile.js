import React, { Component } from "react";
import Sidenav from "../components/sidenav";
import BackNavbar from "../components/backNavbar";
import { withRouter } from "react-router-dom";

export class Profile extends Component {
  token = localStorage.getItem("token");
  render() {
    const isDashboard = this.props.location.state.isDashboard;
    return (
      <div>
        <BackNavbar />
        <Sidenav isDashboard={isDashboard} />
      </div>
    );
  }
}

export default withRouter(Profile);
