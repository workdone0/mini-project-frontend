import React, { Component } from "react";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import { Row, Col } from "antd";
import AdminNavbar from "../components/adminNavbar";

class UtilityRequests extends Component {
  render() {
    return (
        <>
        <AdminNavbar/>
        <FooterIcon />
        <Footers />
      </>
    );
  }
}

export default UtilityRequests;