import React from "react";
import { Row, Col, Button, Tooltip } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import moment from "moment";
import {
  confirmRoomBookingApi,
  declineRoomBookingApi,
} from "../api/roomBooking";

import "./styles/bookingRequestCard.css";

class BookingRequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: this.props.request,
    };
  }
  confirmClicked = async () => {
    const response = await confirmRoomBookingApi(this.props.request._id);
    if (response.status == 200) {
      this.props.updateStatus(this.state.request._id, 1);
    }
  };
  declineClicked = async () => {
    const response = await declineRoomBookingApi(this.props.request._id);
    if (response.status == 200) {
      this.props.updateStatus(this.state.request._id, 2);
    }
  };
  render() {
    const request = this.state.request;
    const startTime = this.state.request.startTime * 60 * 1000;
    const endTime = this.state.request.endTime * 60 * 1000;
    return (
      <Row style={{ backgroundColor: "#F8F8F8", margin: "0 0" }} align="middle">
        <Col
          className="booking-request-card-data-col"
          xl={4}
          lg={4}
          md={4}
          sm={6}
          xs={6}
        >
          <p className="booking-request-card-data-text">
            {request.title.toUpperCase()}
          </p>
        </Col>
        <Col
          className="booking-request-card-data-col"
          xl={3}
          lg={3}
          md={3}
          sm={5}
          xs={5}
        >
          <p className="booking-request-card-data-text">
            {request.roomId.name}
          </p>
        </Col>
        <Col
          className="booking-request-card-data-col"
          xl={3}
          lg={3}
          md={3}
          sm={5}
          xs={5}
        >
          <p className="booking-request-card-data-text">
            {moment(startTime).format("Do MMMM, YYYY")}
          </p>
        </Col>
        <Col
          className="booking-request-card-data-col"
          xl={3}
          lg={3}
          md={3}
          sm={0}
          xs={0}
        >
          <p className="booking-request-card-data-text">
            {moment(startTime).format("hh:mm a").toUpperCase()}
          </p>
        </Col>
        <Col
          className="booking-request-card-data-col"
          xl={3}
          lg={3}
          md={3}
          sm={0}
          xs={0}
        >
          <p className="booking-request-card-data-text">
            {moment(endTime).format("hh:mm a").toUpperCase()}
          </p>
        </Col>
        <Col
          className="booking-request-card-data-col"
          xl={3}
          lg={3}
          md={3}
          sm={0}
          xs={0}
        >
          <p className="booking-request-card-data-text">
            {request.userId.name}
          </p>
        </Col>
        <Col
          className="booking-request-card-data-col-actions"
          xl={5}
          lg={5}
          md={5}
          sm={5}
          xs={5}
        >
          <Tooltip title="Confirm">
            <CheckCircleTwoTone
              onClick={this.confirmClicked}
              className="booking-request-card-action-icon"
              twoToneColor="#52c41a"
            />
          </Tooltip>
          <Tooltip title="Decline">
            <CloseCircleTwoTone
              onClick={this.declineClicked}
              className="booking-request-card-action-icon"
              twoToneColor="#eb2f96"
            />
          </Tooltip>
        </Col>
      </Row>
    );
  }
}

export default BookingRequestCard;
