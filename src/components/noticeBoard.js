import React, { Component } from "react";
import { Row, Col } from "antd";
import NoticeBoardCard from "./noticeBoardcard";
import { getRoomBookingsApi } from "../api/roomBooking";

class NoticeBoard extends Component {
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
  render() {
    return (
      <div id="home-noticeboard">
        <Row justify="center">
          <h1 style={{ margin: "20px 0px" }}>Notice Board</h1>
        </Row>
        <Row>
          {this.state.events.map((event, index) => {
            return (
              <Col span={24} key={index}>
                <NoticeBoardCard event={event} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default NoticeBoard;
