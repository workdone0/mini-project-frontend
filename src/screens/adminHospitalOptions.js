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
        <Row style={{ paddingTop: "5%", height: "70vh" }}>
          <Col span={12}>
            <AdminConferenceOptionCard
              title="Upcoming Appointments"
              description="Get a list of all the appointments here."
              path="/upcomingappointments"
            />
          </Col>
          <Col span={12}>
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
