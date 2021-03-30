import React, { Component } from "react";
import { Row, Col } from "antd";
import moment from "moment";

import "./styles/conferenceDashboardCard.css";

class ConferenceDashboardCard extends Component {
  render() {
    const startTime = this.props.event.startTime * 60 * 1000;
    const endTime = this.props.event.endTime * 60 * 1000;
    return (
      <div className={this.props.color}>
        <Row justify="center">
          <Col className="dashboard-card-column" span={6}>
            <h2 className="dashboard-card-heading">{this.props.event.title}</h2>
          </Col>
          <Col className="dashboard-card-column" span={3}>
            <h2 className="dashboard-card-heading">
              {this.props.event.roomId.name}
            </h2>
          </Col>
          <Col className="dashboard-card-column" span={6}>
            <h2 className="dashboard-card-heading">
              {moment(startTime).format("MMMM Do YYYY")}
            </h2>
          </Col>
          <Col className="dashboard-card-column" span={6}>
            <h2 className="dashboard-card-heading">{`${moment(startTime)
              .format("hh:mm a")
              .toUpperCase()} to ${moment(endTime)
              .format("hh:mm a")
              .toUpperCase()}`}</h2>
          </Col>
          <Col className="dashboard-card-column" span={3}>
            {this.props.event.status == 0
              ? "PENDING"
              : this.props.event.status == 1
              ? "APPROVED"
              : "DECLINED"}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConferenceDashboardCard;
