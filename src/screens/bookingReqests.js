import React from "react";
import { Row, Col } from "antd";

import "./styles/bookingRequests.css";

class BookingRequests extends React.Component {
  render() {
    return (
      <div style={{ padding: "2%" }}>
        <h1>Room Booking Requests</h1>
        <Row style={{ backgroundColor: "#F8F8F8" }} align="middle">
          <Col className="booking-requests-table-header" span={4}>
            <p className="booking-requests-table-header-text">Title</p>
          </Col>
          <Col className="booking-requests-table-header" span={3}>
            <p className="booking-requests-table-header-text">Room No.</p>
          </Col>
          <Col className="booking-requests-table-header" span={3}>
            <p className="booking-requests-table-header-text">Date</p>
          </Col>
          <Col className="booking-requests-table-header" span={3}>
            <p className="booking-requests-table-header-text">Start Time</p>
          </Col>
          <Col className="booking-requests-table-header" span={3}>
            <p className="booking-requests-table-header-text">End Time</p>
          </Col>
          <Col className="booking-requests-table-header" span={3}>
            <p className="booking-requests-table-header-text">User</p>
          </Col>
          <Col className="booking-requests-table-header" span={5}>
            <p className="booking-requests-table-header-text">Actions</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BookingRequests;
