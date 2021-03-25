import React, { Component } from "react";
import { Row, Col } from "antd";
import NoticeBoardCard from "./noticeBoardcard";
import { getRoomBookingsApi } from "../api/roomBooking";
import "./styles/noticeBoard.css";

class NoticeBoard extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    const response = await getRoomBookingsApi();
    const now = Date.now() / 1000 / 60;
    const futureEvents = response.data.data.filter((event) => {
      return event.startTime >= now;
    });
    this.setState({
      events: await futureEvents,
    });
  }

  handleColor = (i) => {
    if (i % 2 == 0) {
      return "main-container-noticeboard-card color1";
    } else {
      return "main-container-noticeboard-card color2";
    }
  };
  render() {
    return (
      <div
        id="home-noticeboard"
        style={{
          background: "#ffffff",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Row justify="center">
          <h1 className="notice-board-heading">Notice Board</h1>
        </Row>
        <Row className="notice-table">
          {this.state.events.map((event, index) => {
            return (
              <Col span={24} key={index}>
                <NoticeBoardCard
                  event={event}
                  color={this.handleColor(index)}
                />
              </Col>
            );
          })}
        </Row>
        <hr style={{ color: "#ffffff", margin: 0 }}></hr>
      </div>
    );
  }
}

export default NoticeBoard;
