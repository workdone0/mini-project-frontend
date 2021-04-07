import React from "react";
import { Row, Col } from "antd";
import ComplaintsAdminCard from "../components/complaintsAdminCard";

import { getComplaintsApi } from "../api/complaint";
import { BackNavbar } from "../components/backNavbar";
class AdminResolvedComplaints extends React.Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
    };
  }
  componentDidMount = async () => {
    const response = await getComplaintsApi();
    const resolvedComplaints = await response.data.data.filter((complaint) => {
      return complaint.status == 1;
    });
    this.setState({
      complaints: resolvedComplaints,
    });
  };
  render() {
    return (
      <>
        <BackNavbar/>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <h1  style={{ textAlign: "center", margin: "20px 0 20px 0" }}>Resolved Complaints</h1>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#F1F2F5", fontWeight:"500" }}>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <p>Description</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            style={{ textAlign: "center" }}
          >
            <p>Hostel No</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            style={{ textAlign: "center" }}
          >
            <p>Room No</p>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <p>Preferred Time</p>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            style={{ textAlign: "center" }}
          >
            <p>Type</p>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            style={{ textAlign: "center" }}
          >
            <p>User</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <p>Status</p>
          </Col>
        </Row>
        <Row>
          {this.state.complaints.length > 0
            ? this.state.complaints.map((complaint) => {
                return (
                  <Col key={complaint._id} span={24}>
                    <ComplaintsAdminCard complaint={complaint} />
                  </Col>
                );
              })
            : "Nothing to Display"}
        </Row>
      </>
    );
  }
}

export default AdminResolvedComplaints;
