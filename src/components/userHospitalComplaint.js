import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { getAppointmentsApi } from "../api/hospitalBooking";
import UserHospitalComplaintCard from "./userHospitalComplaintCard";

class UserHospitalComplaint extends React.Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
    };
  }
  componentDidMount = async () => {
    const response = await getAppointmentsApi();
    const allComplaints = response.data.data;
    const complaints = allComplaints.filter((complaint) => {
      return complaint.userId._id === this.props.currentUser._id;
    });
    this.setState({
      complaints: await complaints,
    });
  };

  render() {
    return (
      <>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center" }}>
            <h1>Hospital Appointments</h1>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={8} style={{ textAlign: "center" }}>
            <p>Time</p>
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <p>Status</p>
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <p>Description</p>
          </Col>
        </Row>
        <Row>
          {this.state.complaints.map((complaint) => {
            return (
              <Col key={complaint._id} span={24}>
                <UserHospitalComplaintCard complaint={complaint} />
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

export default connect(mapStateToProps, null)(UserHospitalComplaint);
