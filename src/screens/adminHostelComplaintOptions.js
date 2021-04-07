import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import Navbar from "../components/adminNavbar";

class AdminHostelComplaintOptions extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Row>
          <Col span={12}>
            <h1>
              <Link to="/pendingcomplaints">Pending Complaints</Link>
            </h1>
          </Col>
          <Col span={12}>
            <h1>
              <Link to="resolvedcomplaints">Resolved Complaints</Link>
            </h1>
          </Col>
        </Row>
      </>
    );
  }
}

export default AdminHostelComplaintOptions;
