import React from "react";
import { Row, Col } from "antd";
import moment from "moment";
class UserHospitalComplaintCard extends React.Component {
  render() {
    return (
      <Row justify="center" align="middle">
        <Col span={8} style={{ textAlign: "center" }}>
          <p>
            {moment(this.props.complaint.time * 60 * 1000).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </p>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.status == 0 ? "Pending" : "Visited"}</p>
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.description}</p>
        </Col>
      </Row>
    );
  }
}

export default UserHospitalComplaintCard;
