import React from "react";
import { Row, Col } from "antd";
import moment from "moment";

class ComplaintsAdminCard extends React.Component {
  render() {
    return (
      <Row style={{ backgroundColor: "#F8F8F8", margin: "5 0 5 0" }}>
        <Col xs={6} sm={6} md={6} lg={4} xl={4} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.description}</p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} xl={3} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.hostelNo}</p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} xl={3} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.roomNo}</p>
        </Col>
        <Col xs={0} sm={0} md={0} lg={4} xl={4} style={{ textAlign: "center" }}>
          <p>{`${moment(this.props.complaint.preferredTimeFrom * 1000 * 60)
            .format("hh:mm a")
            .toUpperCase()}-${moment(
            this.props.complaint.preferredTimeTo * 1000 * 60
          )
            .format("hh:mm a")
            .toUpperCase()}`}</p>
        </Col>
        <Col xs={0} sm={0} md={0} lg={3} xl={3} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.type}</p>
        </Col>
        <Col xs={0} sm={0} md={0} lg={3} xl={3} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.userId.name}</p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={4} xl={4} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.status == 0 ? "Pending" : "Resolved"}</p>
        </Col>
      </Row>
    );
  }
}

export default ComplaintsAdminCard;
