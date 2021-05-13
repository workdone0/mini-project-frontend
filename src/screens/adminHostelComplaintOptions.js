import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import AdminConferenceOptionCard from "../components/adminConferenceOptionCard";
import Navbar from "../components/adminNavbar";
import FooterIcons from "../components/footerIcons";
import Footers from "../components/footer";
class AdminHostelComplaintOptions extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Row style={{ paddingTop: "5%", height: "100vh" }}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} >
            <AdminConferenceOptionCard
              title="Pending Complains"
              description="Get a list of all the pending complaints here."
              path="/pendingcomplaints"
            />
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <AdminConferenceOptionCard
              title="Solved Complains"
              description="Get a list of all the Resolved complaints here."
              path="/resolvedcomplaints"
            />
          </Col>
        </Row>
        <FooterIcons />
        <Footers />
      </>
    );
  }
}

export default AdminHostelComplaintOptions;
