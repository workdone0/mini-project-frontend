import React, { Component } from "react";
import { Input, DatePicker, Row, Col, TimePicker, Button } from "antd";
import moment from "moment";

import CalanderImg from "../assets/calander.png";

class ConferenceBookingForm extends Component {
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
          }}
        >
          <h2 style={{ fontSize: "40px", fontWeight: "500" }}>
            Organizing meetings just got easy.
          </h2>
          <DatePicker style={{ margin: "20px", width: "100%" }} />
          <TimePicker
            style={{ margin: "20px", width: "100%" }}
            defaultValue={moment("12:08", format)}
            format={format}
          />
          <Input style={{ margin: "20px" }} placeholder="Description" />
          <Button
            shape="round"
            style={{
              width: "40%",
              margin: "20px",
              backgroundColor: "#ea2c62",
              color: "#ffffff",
              height: "50px",
            }}
          >
            Book Now
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ConferenceBookingForm;
