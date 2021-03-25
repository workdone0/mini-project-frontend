import React, { Component } from "react";
import { Row, Col } from "antd";
import "./styles/noticeBoardCard.css";
import moment from "moment";

class NoticeBoardCard extends Component {
  formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
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
          <Col span={4}></Col>
          <Col span={8}>
            <h2 className="notice-card-heading">
              {moment(startTime).fromNow().toUpperCase()}
            </h2>
          </Col>
          <Col span={8}>
            <Row>
              <h2 className="notice-card-heading">{this.props.event.title}</h2>
            </Row>
            <Row>
              <h4 className="notice-card-sub-heading">
                by {this.props.event.userId.name}
              </h4>
            </Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    );
  }
}

export default NoticeBoardCard;
