import React, { Component } from "react";
import { Row, Col } from "antd";
import "./styles/noticeBoardCard.css";

class ConferenceDashboardCard extends Component {
  render() {
    const startTime = new Date(this.props.event.startTime * 60 * 1000);
    const endTime = new Date(this.props.event.endTime * 60 * 1000);
    return (
      <div className={this.props.color}>
        <Row justify="center">
          <Col span={1}></Col>
          <Col span={6}>
            <h2 className="notice-card-heading">{this.props.event.title}</h2>
          </Col>
          <Col span={1}></Col>
          <Col span={3}>
            <h2 className="notice-card-heading">
              {this.props.event.roomId.name}
            </h2>
          </Col>
          <Col span={1}></Col>
          <Col span={3}>
            <h2 className="notice-card-heading">
              -
            </h2>
          </Col>
          <Col span={1}></Col>
          <Col span={3}>
          <h2 className="notice-card-heading">{`${startTime.getHours()}:${startTime.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}`}</h2>
          </Col>
          <Col span={1}></Col>
          <Col span={3}>
            -
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    );
  }
}

export default ConferenceDashboardCard;