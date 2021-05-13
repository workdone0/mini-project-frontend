import React from "react";
import { Row, Col } from "antd";
import AdminConferenceOptionCard from "../components/adminConferenceOptionCard";
import Navbar from "../components/adminNavbar";
import FooterIcons from "../components/footerIcons";
import Footers from "../components/footer";

class AdminHospitalOptions extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Row style={{ paddingTop: "5%", height: "100vh" }}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} >
            <AdminConferenceOptionCard
              title="New Appointments"
              description="Get a list of upcoming the appointments here."
              path="/upcomingappointments"
            />
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} >
            <AdminConferenceOptionCard
              title="All Appointments"
              description="Get a list of all the appointments here."
              path="/allappointments"
            />
          </Col>
        </Row>
        <FooterIcons />
        <Footers />
      </>
    );
  }
}

export default AdminHospitalOptions;
