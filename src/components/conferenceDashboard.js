import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import { getRoomBookingsApi } from "../api/roomBooking";

import "./styles/conferenceDashboard.css";
import ConferenceDashboardCard from "./conferenceDashboardCard";

class ConferenceDashboard extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    const response = await getRoomBookingsApi();
    this.setState({
      events: await response.data.data,
    });
  }

  handleColor = (i) => {
    if (i % 2 == 0) {
      return "main-container-dashboard-card color1";
    } else {
      return "main-container-dashboard-card color2";
    }
  };
  render() {
    const toDisplayEvents = this.state.events.filter((event) => {
      return event.userId._id === this.props.currentUser._id;
    });
    return (
      <div id="conference-dashboard">
        <Row justify="center">
          <h1 style={{ margin: "20px 0px" }}>Conference Requests</h1>
        </Row>
        <Row justify="center" className="conference-table-heading">
  
          <Col className="conference-table-heading-column"    xl={4}
            lg={5}
            md={6}
            sm={10}
            xs={10}>
            <h2 className="conference-heading">Title</h2>
          </Col>
          <Col className="conference-table-heading-column"   xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
            <h2 className="conference-heading">Venue</h2>
          </Col>
          <Col className="conference-table-heading-column"  xl={4}
            lg={4}
            md={5}
            sm={5}
            xs={5}>
            <h2 className="conference-heading">Date</h2>
          </Col>
          <Col className="conference-table-heading-column"  xl={4}
            lg={4}
            md={5}
            sm={0}
            xs={0}>
            <h2 className="conference-heading">Time</h2>
          </Col>
          <Col className="conference-table-heading-column"    xl={4}
            lg={4}
            md={4}
            sm={5}
            xs={5}>
            <h2 className="conference-heading">Status</h2>
          </Col>
        </Row>
        <Row className="conference-table">
          {toDisplayEvents.map((event, index) => {
            return (
              <Col span={24} key={index}>
                <ConferenceDashboardCard
                  event={event}
                  color={this.handleColor(index)}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(ConferenceDashboard);
