import React from "react";
import { Row, Col, message } from "antd";

import { getRoomBookingsApi } from "../api/roomBooking";
import BackNavbar from "../components/backNavbar";
import "./styles/bookingRequests.css";
import BookingRequestCard from "../components/bookingRequestCard";

class BookingRequests extends React.Component {
  constructor() {
    super();
    this.state = {
      bookingRequests: [],
    };
  }
  async componentDidMount() {
    if (window.innerWidth <= 720) {
      this.info();
    }
    const response = await getRoomBookingsApi();
    if (response.status == 200) {
      this.setState({
        bookingRequests: await response.data.data,
      });
    }
  }

  info = () => {
    message.info("Best viewed on larger screens.");
  };

  updateStatus = (id, status) => {
    var requests = this.state.bookingRequests.filter((request) => {
      return request._id != id;
    });
    var request = this.state.bookingRequests.filter((request) => {
      return request._id === id;
    });
    request[0].status = status;
    requests.push(request[0]);
    this.setState({
      bookingRequests: requests,
    });
  };

  render() {
    const toDisplayRequest = this.state.bookingRequests.filter((request) => {
      return request.status == 0;
    });
    if (toDisplayRequest.length == 0) {
      return (
        <>
          <BackNavbar />
          <Row style={{ height: "100vh" }}>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Nothing to Display</h1>
            </Col>
          </Row>
        </>
      );
    }
    return (
      <>
        <BackNavbar />
        <>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Room Booking Requests
          </h1>
          <Row style={{ backgroundColor: "#F8F8F8" }}>
            <Col
              className="booking-requests-table-header"
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={6}
            >
              <p className="booking-requests-table-header-text">Title</p>
            </Col>
            <Col
              className="booking-requests-table-header"
              xl={3}
              lg={3}
              md={3}
              sm={5}
              xs={5}
            >
              <p className="booking-requests-table-header-text">Room No.</p>
            </Col>
            <Col
              className="booking-requests-table-header"
              xl={3}
              lg={3}
              md={3}
              sm={5}
              xs={5}
            >
              <p className="booking-requests-table-header-text">Date</p>
            </Col>
            <Col
              className="booking-requests-table-header"
              xl={3}
              lg={3}
              md={3}
              sm={0}
              xs={0}
            >
              <p className="booking-requests-table-header-text">Start Time</p>
            </Col>
            <Col
              className="booking-requests-table-header"
              xl={3}
              lg={3}
              md={3}
              sm={0}
              xs={0}
            >
              <p className="booking-requests-table-header-text">End Time</p>
            </Col>
            <Col
              className="booking-requests-table-header"
              xl={3}
              lg={3}
              md={3}
              sm={0}
              xs={0}
            >
              <p className="booking-requests-table-header-text">User</p>
            </Col>
            <Col
              className="booking-requests-table-header"
              xl={5}
              lg={5}
              md={5}
              sm={5}
              xs={5}
            >
              <p className="booking-requests-table-header-text">Actions</p>
            </Col>
          </Row>
          {toDisplayRequest.length > 0
            ? toDisplayRequest.map((request) => {
                return (
                  <BookingRequestCard
                    key={request._id}
                    request={request}
                    updateStatus={this.updateStatus}
                  />
                );
              })
            : null}
        </>
      </>
    );
  }
}

export default BookingRequests;
