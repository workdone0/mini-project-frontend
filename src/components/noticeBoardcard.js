import React, { Component } from "react";
import { Row, Col } from "antd";
import "./styles/noticeBoardCard.css";

class NoticeBoardCard extends Component {
  render() {
    const startTime = new Date(this.props.event.startTime * 60 * 1000);
    const endTime = new Date(this.props.event.endTime * 60 * 1000);
    return (
      <div id="main-container-noticeboard-card">
        <Row justify="center">
          <Col spna={2}></Col>
          <Col spna={6}>
            <h2 className="notice-card-heading">{this.props.event.title}</h2>
          </Col>
          <Col spna={2}></Col>
          <Col spna={4}>
            <h2 className="notice-card-heading">
              {this.props.event.roomId.name}
            </h2>
          </Col>
          <Col spna={2}></Col>
          <Col spna={4}>
            <h2 className="notice-card-heading">{`${startTime.getHours()}:${startTime.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}`}</h2>
          </Col>
          <Col spna={2}></Col>
        </Row>
      </div>
    );
  }
}

export default NoticeBoardCard;
