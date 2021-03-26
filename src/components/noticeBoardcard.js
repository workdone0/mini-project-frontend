import React, { Component } from "react";
import { Row, Col } from "antd";
import "./styles/noticeBoardCard.css";
import moment from "moment";

class NoticeBoardCard extends Component {
  render() {
    const startTime = new Date(this.props.event.startTime * 60 * 1000);
    const endTime = new Date(this.props.event.endTime * 60 * 1000);
    return (
      <div>
        <hr style={{ color: "#ffffff", margin: "0px" }}></hr>
        <Row
          justify="center"
          align="middle"
          style={{ paddingTop: "1%", paddingBottom: "1%" }}
        >
          <Col span={2}></Col>
          <Col span={7}>
            <h2 className="notice-card-heading">
              {moment(startTime).fromNow().toUpperCase()}
            </h2>
          </Col>
          <Col span={9}>
            <Row>
              <h2 className="notice-card-heading">{this.props.event.title}</h2>
            </Row>
            <Row>
              <h4 className="notice-card-sub-heading">
                by {this.props.event.userId.name}
              </h4>
            </Row>
          </Col>
          <Col className="notice-room-heading" span={4}>
            <h2 className="notice-card-heading">
              {this.props.event.roomId.name}
            </h2>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}

export default NoticeBoardCard;
