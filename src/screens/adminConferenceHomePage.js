
import React, { Component } from "react";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import { Row, Col } from "antd";
import Navbar from "../components/navbar";
import AdminConferenceOptions from "../components/adminConferenceOptions";

class AdminConferenceHomePage extends Component {
  render() {
    return (
        <>
        <Navbar />
      
     
        <AdminConferenceOptions />
       
        <FooterIcon />
        <Footers />
      
       
      </>
    );
  }
}

export default AdminConferenceHomePage;
