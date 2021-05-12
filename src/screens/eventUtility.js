import React, { Component } from "react";
import { Row, Col, Button, Input, TimePicker, Form, DatePicker } from "antd";
import { Redirect } from "react-router-dom";
import Navbar from "../components/navbar";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import eventutility from "../assets/eventutility.png";
import "./styles/eventUtility.css";

class EventUtility extends Component {
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
      to: "",
      from: "",
      description: "",
      redirect: false,
    };
  }
  descriptionSelected = async (event) => {
    this.setState({
      description: await event.target.value,
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      var eventETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.endH,
        this.state.endM
      );
      var startETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.startH,
        this.state.startM
      );
      var startEpoch = startETime / 1000 / 60;
      var endEpoch = eventETime / 1000 / 60;
      this.setState({
        to: endEpoch,
        from: startEpoch,
      });
      console.log(this.state);
    }
  };
  dateSelected = async (event) => {
    const date = event._d;
    this.setState({
      day: await date.getDate(),
      month: await date.getMonth(),
      year: await date.getFullYear(),
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      var eventETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.endH,
        this.state.endM
      );
      var startETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.startH,
        this.state.startM
      );
      var startEpoch = startETime / 1000 / 60;
      var endEpoch = eventETime / 1000 / 60;
      this.setState({
        to: endEpoch,
        from: startEpoch,
      });
    }
  };
  startSelected = async (event) => {
    const date = event._d;
    this.setState({
      startH: await date.getHours(),
      startM: await date.getMinutes(),
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      var eventETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.endH,
        this.state.endM
      );
      var startETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.startH,
        this.state.startM
      );
      var startEpoch = startETime / 1000 / 60;
      var endEpoch = eventETime / 1000 / 60;
      this.setState({
        to: endEpoch,
        from: startEpoch,
      });
    }
  };
  endSelected = async (event) => {
    const date = event._d;
    this.setState({
      endH: await date.getHours(),
      endM: await date.getMinutes(),
    });
    if (
      this.state.day != "" &&
      this.state.startH != "" &&
      this.state.endH != ""
    ) {
      var eventETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.endH,
        this.state.endM
      );
      var startETime = new Date(
        this.state.year,
        this.state.month,
        this.state.day,
        this.state.startH,
        this.state.startM
      );
      var startEpoch = startETime / 1000 / 60;
      var endEpoch = eventETime / 1000 / 60;
      this.setState({
        to: endEpoch,
        from: startEpoch,
      });
    }
  };

  submitClicked = async () => {
    this.setState({
      redirect: true,
    });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/EventUtilityList",
            state: {
              data: {
                description: this.state.description,
                to: this.state.to,
                from: this.state.from,
              },
            },
          }}
        />
      );
    }
    const format = "HH:mm";
    return (
      <div>
        <>
          <Navbar />
          <Row>
            <Col span={10}>
              <Row justify="center" align="middle">
                <img className="eventutility-img" src={eventutility} />
              </Row>
            </Col>
            <Col span={14}>
              <Row justify="center">
                <h1 className="eventutility-heading">
                  To Proceed We Need Some Info!
                </h1>
              </Row>
              <Row justify="center">
                <Form
                  className="eventutility-form"
                  layout="vertical"
                  style={{ width: "100%" }}
                >
                  <Form.Item label="Event Details">
                    <Input
                      onChange={this.descriptionSelected}
                      style={{ width: "100%", color: "black" }}
                      placeholder="Event Details"
                    />
                  </Form.Item>
                  <Form.Item label="Select Date">
                    <DatePicker
                      onChange={this.dateSelected}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Row>
                    <Col xs={24} sm={24} lg={24} md={24} xl={12}>
                      <Form.Item label="Select Event Start Time">
                        <TimePicker
                          style={{ width: "100%" }}
                          placeholder="Select Event Start Time"
                          format={format}
                          onChange={this.startSelected}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} lg={24} md={24} xl={12}>
                      <Form.Item label="Select Event End Time">
                        <TimePicker
                          style={{ width: "100%" }}
                          placeholder="Select Event End Time"
                          format={format}
                          onChange={this.endSelected}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Row>
              <Row justify="center">
                <Button
                  shape="round"
                  onClick={this.submitClicked}
                  disabled={
                    this.state.description != "" &&
                    this.state.to != "" &&
                    this.state.from != ""
                      ? false
                      : true
                  }
                  style={{
                    width: "40%",
                    backgroundColor: "#ea2c62",
                    color: "#ffffff",
                    height: "50px",
                    marginTop: "30px",
                    marginBottom: "10%",
                  }}
                >
                  Book Now
                </Button>
              </Row>
            </Col>
          </Row>
          <FooterIcon />
          <Footers />
        </>
      </div>
    );
  }
}

export default EventUtility;
