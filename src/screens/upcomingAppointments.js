import React from "react";
import { Row, Col } from "antd";
import AppointmentAdminCard from "../components/appointmentAdminCard";
import BackNavbar from "../components/backNavbar";

import { getAppointmentsApi } from "../api/hospitalBooking";

class UpcomingAppointments extends React.Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
    };
  }
  componentDidMount = async () => {
    const response = await getAppointmentsApi();
    const today = new Date();
    const todayEpoch = Math.floor(today / 1000 / 60);
    const filteredResponse = response.data.data.filter((appointment) => {
      return appointment.time >= todayEpoch && appointment.status == 0;
    });
    this.setState({
      appointments: await filteredResponse,
    });
  };
  updateAppointmentsUpcoming = async () => {
    const response = await getAppointmentsApi();
    const today = new Date();
    const todayEpoch = Math.floor(today / 1000 / 60);
    const filteredResponse = response.data.data.filter((appointment) => {
      return appointment.time >= todayEpoch && appointment.status == 0;
    });
    this.setState({
      appointments: await filteredResponse,
    });
  };
  updateAppointments = async () => {
    const response = await getAppointmentsApi();
    this.setState({
      appointments: await response.data.data,
    });
  };
  render() {
    return (
      <>
        <BackNavbar />
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <h1 style={{ textAlign: "center", margin: "20px 0 20px 0" }}>
              Upcoming Appointments
            </h1>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#F1F2F5", fontWeight: "500" }}>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>Patient</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>Date</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>Status</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>Actions</p>
          </Col>
        </Row>
        <Row>
          {this.state.appointments.length > 0
            ? this.state.appointments.map((appointment) => {
                return (
                  <Col key={appointment._id} span={24}>
                    <AppointmentAdminCard
                      appointment={appointment}
                      updateAppointments={this.updateAppointmentsUpcoming}
                    />
                  </Col>
                );
              })
            : "Nothing to Display"}
        </Row>
      </>
    );
  }
}

export default UpcomingAppointments;
