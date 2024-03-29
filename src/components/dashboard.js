import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { connect } from "react-redux";
import { getRoomBookingsApi } from "../api/roomBooking";
import { getAppointmentsApi } from "../api/hospitalBooking";
import { getComplaintsApi } from "../api/complaint";
import { getOrders } from "../api/utility";

import Chart from "./chart";

import "./styles/dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      appointments: [],
      complaints: [],
      utility: [],
    };
  }
  async componentDidMount() {
    const response = await getRoomBookingsApi();
    const aRes = await getAppointmentsApi();
    const cRes = await getComplaintsApi();
    const uRes = await getOrders();
    this.setState({
      events: await response.data.data,
      appointments: await aRes.data.data,
      complaints: await cRes.data.data,
      utility: await uRes.data.data,
    });
  }
  render() {
    const toDisplayEvents = this.state.events.filter((event) => {
      return event.userId._id === this.props.currentUser._id;
    });
    const toDisplayAppointments = this.state.appointments.filter((event) => {
      return event.userId._id === this.props.currentUser._id;
    });
    const toDisplayComplaints = this.state.complaints.filter((event) => {
      return event.userId._id === this.props.currentUser._id;
    });
    const toDisplayUtility = this.state.utility.filter((event) => {
      return event.userId._id === this.props.currentUser._id;
    });
    const toDisplayPending = toDisplayEvents.filter((event) => {
      return event.status === 0;
    });
    const toDisplayApproved = toDisplayEvents.filter((event) => {
      return event.status === 1;
    });
    const toDisplayDeclined = toDisplayEvents.filter((event) => {
      return event.status === 2;
    });
    const toDisplayPendingComplaints = toDisplayComplaints.filter((event) => {
      return event.status === 0;
    });
    const toDisplayApprovedComplaints = toDisplayComplaints.filter((event) => {
      return event.status === 1;
    });
    return (
      <div>
        <Row>
          <Col xl={6} md={12} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Services Requested"
                className="dashboard-cards"
                bordered={false}
                style={{
                  borderRadius: "15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  backgroundImage: "linear-gradient(130deg, #05d3fc, #0f8299)",
                }}
              >
                <Row>
                  <Col span={12}>
                    <h1>
                      {toDisplayEvents.length +
                        toDisplayAppointments.length +
                        toDisplayComplaints.length +
                        toDisplayUtility.length}
                    </h1>
                  </Col>
                  <Col span={10}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="white"
                      className="bi bi-folder-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                    </svg>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
          <Col xl={6} md={12} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                className="dashboard-cards"
                title="Pending"
                bordered={false}
                style={{
                  borderRadius: "15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  backgroundImage: "linear-gradient(130deg, #ffdb0f, #bda20b)",
                }}
              >
                <Row>
                  <Col span={12}>
                    <h1>
                      {toDisplayPending.length +
                        toDisplayPendingComplaints.length}
                    </h1>
                  </Col>
                  <Col span={10}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="white"
                      className="bi bi-bag-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                    </svg>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
          <Col xl={6} md={12} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Approved"
                bordered={false}
                className="dashboard-cards"
                style={{
                  borderRadius: "15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  backgroundImage: "linear-gradient(130deg, #17e00b, #1dab15)",
                }}
              >
                <Row>
                  <Col span={12}>
                    <h1>
                      {toDisplayApproved.length +
                        toDisplayAppointments.length +
                        toDisplayUtility.length +
                        toDisplayApprovedComplaints.length}
                    </h1>
                  </Col>
                  <Col span={10}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="white"
                      className="bi bi-check-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                    </svg>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
          <Col xl={6} md={12} xs={24}>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Declined"
                className="dashboard-cards"
                bordered={false}
                style={{
                  borderRadius: "15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  backgroundImage: "linear-gradient(130deg, #eb1349, #b5143d)",
                }}
              >
                <Row>
                  <Col span={12}>
                    <h1>{toDisplayDeclined.length}</h1>
                  </Col>
                  <Col span={10}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="white"
                      className="bi bi-emoji-frown-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                    </svg>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
          <Col span={24}>
            <Chart
              approved={
                toDisplayApproved.length +
                toDisplayAppointments.length +
                toDisplayUtility.length +
                toDisplayApprovedComplaints.length
              }
              declined={toDisplayDeclined.length}
              pending={
                toDisplayPending.length + toDisplayPendingComplaints.length
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Dashboard);
