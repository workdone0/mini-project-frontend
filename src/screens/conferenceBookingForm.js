import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, DatePicker, Row, Col, TimePicker, Button, Form } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BackNavbar from "../components/backNavbar";
import Success from "./success";
import moment from 'moment';


import CalanderImg from "../assets/calander.png";
import { roomBookingApi, getRoomBookingsApi } from "../api/roomBooking";
import "./styles/conferenceBookingForm.css";

class ConferenceBookingForm extends Component {
  constructor() {
    super();
    this.state = {
      day: "",
      month: "",
      year: "",
      startH: "",
      startM: "",
      endH: "",
      endM: "",
      roomId: "",
      title: "",
      loading: false,
      roomBookingData: [],
      buttonDisabled: true,
      conflict: false,
      submittedSuccessfully: false,
    };
  }

  componentDidMount = async () => {
    const response = await getRoomBookingsApi();
    const bookingData = response.data.data;
    const finBookingData = bookingData.filter((booking) => {
      return booking.roomId === this.props.match.params.roomId;
    });
    this.setState({
      roomBookingData: finBookingData,
      roomId: await this.props.match.params.roomId,
    });
  };

  verifyingConflicts = () => {
    var meetingSTime = new Date(
      this.state.year,
      this.state.month,
      this.state.day,
      this.state.startH,
      this.state.startM
    );
    var meetingETime = new Date(
      this.state.year,
      this.state.month,
      this.state.day,
      this.state.endH,
      this.state.endM
    );
    const startEpoch = meetingSTime / 1000 / 60;
    const endEpoch = meetingETime / 1000 / 60;
    if (this.state.roomBookingData.length > 0) {
      const conflicts = this.state.roomBookingData.filter((booking) => {
        return (
          (startEpoch >= booking.startTime && startEpoch <= booking.endTime) ||
          (endEpoch >= booking.startTime && endEpoch <= booking.endTime)
        );
      });
      if (conflicts.length > 0) {
        this.setState({
          conflict: true,
          buttonDisabled: true,
        });
      } else {
        this.setState({
          conflict: false,
          buttonDisabled: false,
        });
      }
    } else {
      this.setState({
        conflict: false,
        buttonDisabled: false,
      });
    }
  };

  dateSelected = async (e) => {
    if (!e) {
      return null;
    }
    const d = e._d;
    this.setState({
      day: await d.getDate(),
      month: await d.getMonth(),
      year: await d.getFullYear(),
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      this.verifyingConflicts();
    }
  };

  endSelected = async (time) => {
    const d = time._d;
    this.setState({
      endH: await d.getHours(),
      endM: await d.getMinutes(),
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      this.verifyingConflicts();
    }
  };

  startSelected = async (time) => {
    const d = time._d;
    this.setState({
      startH: await d.getHours(),
      startM: await d.getMinutes(),
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      this.verifyingConflicts();
    }
  };

  submitClicked = async () => {
    this.setState({
      loading: true,
    });
    const {
      year,
      day,
      month,
      startH,
      startM,
      endH,
      endM,
      roomId,
      title,
    } = this.state;
    var meetingSTime = new Date(year, month, day, startH, startM);
    var meetingETime = new Date(year, month, day, endH, endM);
    const startEpoch = meetingSTime / 1000 / 60;
    const endEpoch = meetingETime / 1000 / 60;
    const response = await roomBookingApi(
      this.props.currentUser._id,
      roomId,
      startEpoch,
      endEpoch,
      title
    );
    if (response.status == 201) {
      this.setState({
        submittedSuccessfully: true,
      });
    }
    this.setState({
      loading: false,
    });
    console.log(response);
  };

  titleChanged = async (event) => {
    this.setState({
      title: await event.target.value,
    });
  };

  render() {
    const format = "HH:mm";
    function disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().startOf('day');
    }
    return (
      <>
        <BackNavbar />
        <Row style={{ height: "100vh" }}>
          <Col
            xs={0} sm={0} lg={0} md={0} xl={8}
            className="conference-booking-image"
          >
            <img src={CalanderImg}  className="confer-img"/>
          </Col>
          <Col
            xs={24} sm={24} lg={24} md={24} xl={16}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "10%",
              textAlign: "center",
            }}
          >
            {this.state.submittedSuccessfully ? (
              <Success text="Room Booking Successful" />
            ) : (
              <div className="conference-booking-container">
               
                  <h2 style={{ fontSize: "40px", fontWeight: "500" }}>
                    Organizing meetings just got easy.
                </h2>
                
                <Form className="conference-booking-form" layout="vertical" style={{ width: "100%" }}>
                  <Form.Item label="Title">
                    <Input
                      onChange={this.titleChanged}
                      style={{ width: "100%", color: "black" }}
                      placeholder="Title"
                    />
                  </Form.Item>
                  <Form.Item label="Select Date">
                    <DatePicker
                      onChange={this.dateSelected}
                      style={{ width: "100%" }}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>
                  <Row>
                    <Col xs={24} sm={24} lg={24} md={24} xl={12}>
                      <Form.Item label="Select Meeting Start Time">
                        <TimePicker
                          style={{ width: "100%"}}
                          placeholder="Select Meeting Start Time"
                          format={format}
                          onChange={this.startSelected}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} lg={24} md={24} xl={12}>
                      <Form.Item label="Select Meeting End Time">
                        <TimePicker
                          style={{ width: "100%" }}
                          placeholder="Select Meeting End Time"
                          format={format}
                          onChange={this.endSelected}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  {this.state.conflict ? (
                    <p style={{ textAlign: "left", color: "#ea2c62" }}>
                      There seems to be another meeting already secheduled on
                      this date and time. See all meetings{" "}
                      <Link to="/">here</Link>.
                    </p>
                  ) : null}
                </Form>
                <Button
                  shape="round"
                  onClick={this.submitClicked}
                  style={
                    this.state.buttonDisabled
                      ? { width: "40%", height: "50px", marginTop: "30px" }
                      : {
                        width: "40%",
                        backgroundColor: "#ea2c62",
                        color: "#ffffff",
                        height: "50px",
                        marginTop: "30px",
                      }
                  }
                  loading={this.state.loading}
                  disabled={this.state.buttonDisabled}
                >
                  Book Now
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(ConferenceBookingForm));
