import React, { Component } from "react";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import AdminConferenceOptionCard from "../components/adminConferenceOptionCard";
import AdminNavbar from "../components/adminNavbar";
import { Row, Col } from "antd";

class AdminUtilityHomePage extends Component {
  render() {
    return (
        <>
        <AdminNavbar/>
        
        <Row style={{paddingTop:"5%",height:"100vh"}}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} >
            <AdminConferenceOptionCard
              title="Manage Requests"
              description= "Approve or Decline Requests sent by the user"
              path="/utilityrequests"
            />
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <AdminConferenceOptionCard
              title="Manage Utilities"
              description= "Add or Delete Utilities as per Availability"
              path="/manageutilities"
            />
          </Col>
        </Row>
        
        <FooterIcon />
        <Footers />
      </>
    );
  }
}

export default AdminUtilityHomePage;