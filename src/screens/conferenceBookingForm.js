import React, { Component } from "react";
import { Input, DatePicker, Row, Col, TimePicker, Button, Form } from "antd";
import { connect } from "react-redux";
import moment from "moment";

import CalanderImg from "../assets/calander.png";
import { roomBookingApi } from "../api/roomBooking";

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
      roomNo: "A 103",
      description: "",
      loading: false,
    };
  }

  dateSelected = async (e) => {
    const d = e._d;
    this.setState({
      day: await d.getDate(),
      month: await d.getMonth(),
      year: await d.getFullYear(),
    });
  };

  endSelected = async (time) => {
    const d = time._d;
    this.setState({
      endH: await d.getHours(),
      endM: await d.getMinutes(),
    });
  };

  startSelected = async (time) => {
    const d = time._d;
    this.setState({
      startH: await d.getHours(),
      startM: await d.getMinutes(),
    });
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
      roomNo,
      description,
    } = this.state;
    var meetingSTime = new Date(year, month, day, startH, startM);
    var meetingETime = new Date(year, month, day, endH, endM);
    const startEpoch = meetingSTime / 1000 / 60;
    const endEpoch = meetingETime / 1000 / 60;
    const response = await roomBookingApi(
      this.props.currentUser._id,
      roomNo,
      startEpoch,
      endEpoch,
      description
    );
    this.setState({
      loading: false,
    });
    console.log(response);
  };

  descriptionChanged = async (event) => {
    this.setState({
      description: await event.target.value,
    });
  };
  render() {
    const format = "HH:mm";
    return (
      <Row style={{ height: "100vh" }}>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={CalanderImg} style={{ height: "60%", width: "auto" }} />
        </Col>
        <Col
          span={16}
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
          <h2 style={{ fontSize: "40px", fontWeight: "500" }}>
            Organizing meetings just got easy.
          </h2>
          <Form layout="vertical" style={{ width: "100%" }}>
            <Form.Item label="Select Date">
              <DatePicker
                onChange={this.dateSelected}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Row>
              <Col span={12}>
                <Form.Item label="Select Meeting Start Time">
                  <TimePicker
                    style={{ width: "100%" }}
                    placeholder="Select Meeting Start Time"
                    format={format}
                    onChange={this.startSelected}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
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
            <Form.Item label="Meeting Description">
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                style={{ width: "100%" }}
                placeholder="Description"
                onChange={this.descriptionChanged}
              />
            </Form.Item>
          </Form>
          <Button
            shape="round"
            onClick={this.submitClicked}
            style={{
              width: "40%",
              backgroundColor: "#ea2c62",
              color: "#ffffff",
              height: "50px",
              marginTop: "30px",
            }}
            loading={this.state.loading}
          >
            Book Now
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(ConferenceBookingForm);
