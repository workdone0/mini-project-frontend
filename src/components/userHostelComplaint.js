import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { getComplaintsApi } from "../api/complaint";
import UserHostelComplaintCard from "./userHostelComplaintCard";

class UserHostelComplaint extends React.Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
    };
  }
  componentDidMount = async () => {
    const response = await getComplaintsApi();
    const allComplaints = response.data.data;
    const complaints = allComplaints.filter((complaint) => {
      return complaint.userId._id === this.props.currentUser._id;
    });
    this.setState({
      complaints: await complaints,
    });
  };

  updateComplaints = async () => {
    const response = await getComplaintsApi();
    const allComplaints = response.data.data;
    const complaints = allComplaints.filter((complaint) => {
      return complaint.userId._id === this.props.currentUser._id;
    });
    this.setState({
      complaints: await complaints,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center" }}>
            <h1>Hostel Complaints</h1>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Title</p>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Type</p>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Status</p>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Actions</p>
          </Col>
        </Row>
        <Row>
          {this.state.complaints.map((complaint) => {
            return (
              <Col key={complaint._id} span={24}>
                <UserHostelComplaintCard
                  complaint={complaint}
                  updateComplaints={this.updateComplaints}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(UserHostelComplaint);
