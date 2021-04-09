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
        <Row style={{ paddingTop: "5%", height: "70vh" }}>
          <Col span={12}>
            <AdminConferenceOptionCard
              title="Pending Complaints"
              description="Get a list of all the pending complaints here."
              path="/pendingcomplaints"
            />
          </Col>
          <Col span={12}>
            <AdminConferenceOptionCard
              title="Resolved Complaints"
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
