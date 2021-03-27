import React, { Component } from "react";
import Sidenav from "../components/sidenav";
import BackNavbar from "../components/backNavbar";
import { withRouter } from "react-router-dom";

export class Profile extends Component {
  token = localStorage.getItem("token");
  render() {
    return (
      <div>
        <BackNavbar />
        <Sidenav type={Number(this.props.match.params.typeId)} />
      </div>
    );
  }
}

export default withRouter(Profile);
