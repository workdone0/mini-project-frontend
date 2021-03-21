import React, { Component } from "react";
import { Row, Col } from "antd";
import "./styles/noticeBoardCard.css";

class NoticeBoardCard extends Component {
  render() {
    return (
      <div id="main-container-noticeboard-card">
        <Row justify="center">
            <Col spna={2}></Col>
            <Col spna={6}><h2 className="notice-card-heading">{this.props.title}</h2></Col>
            <Col spna={2}></Col>
            <Col spna={4}><h2 className="notice-card-heading">{this.props.venue}</h2></Col>
            <Col spna={2}></Col>
            <Col spna={4}><h2 className="notice-card-heading">{this.props.time}</h2></Col>
            <Col spna={2}></Col>
        </Row>
      </div>
    );
  }
}

export default NoticeBoardCard;