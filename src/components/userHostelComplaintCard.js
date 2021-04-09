import React from "react";
import { Row, Col } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

import { resolveComplaintApi } from "../api/complaint";

class UserHostelComplaintCard extends React.Component {
  resolveComplaint = async () => {
    const response = await resolveComplaintApi(this.props.complaint._id);
    await this.props.updateComplaints();
  };
  render() {
    return (
      <Row justify="center" align="middle">
        <Col span={6} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.description}</p>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.type}</p>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <p>{this.props.complaint.status == 0 ? "Pending" : "Resolved"}</p>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <CheckCircleTwoTone
            onClick={this.resolveComplaint}
            twoToneColor="#52c41a"
          />
        </Col>
      </Row>
    );
  }
}

export default UserHostelComplaintCard;
