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
    this.setState({
      events: await response.data.data,
    });
  }

  handleColor = (i) =>{
    if(i%2==0){
      return "main-container-noticeboard-card color1";
    }
    else{
      return "main-container-noticeboard-card color2";
    }
  }
  render() {
    return (
      <div id="home-noticeboard">
        <Row justify="center">
          <h1 style={{ margin: "20px 0px" }}>Notice Board</h1>
        </Row>
        <Row justify="center" className="notice-table-heading">
          <Col span={2}></Col>
          <Col span={7}>
            <h2 className="notice-heading">Title</h2>
          </Col>
          <Col span={3}></Col>
          <Col span={4}>
            <h2 className="notice-heading">
              Venue
            </h2>
          </Col>
          <Col span={3}></Col>
          <Col span={4}>
            <h2 className="notice-heading">Timing</h2>
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row className="notice-table">
          {this.state.events.map((event, index) => {
            return (
              <Col span={24} key={index}>
                <NoticeBoardCard event={event} color={this.handleColor(index)}/>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default NoticeBoard;
