import React from "react";
import { Row, Col } from "antd";
import moment from "moment";
class UserUtilityRequestCard extends React.Component {
  render() {
    return (
      <Row justify="center" align="middle">
        <Col span={6} style={{ textAlign: "center" }}>
          <p>
            {moment(this.props.order.to * 60 * 1000).format("MMMM Do YYYY")}
          </p>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <p>{moment(this.props.order.from * 60 * 1000).format("h:mm a")}</p>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <p>{moment(this.props.order.to * 60 * 1000).format("h:mm a")}</p>
        </Col>
        <Col span={6} style={{ textAlign: "center" }}>
          <p>{this.props.order.description}</p>
        </Col>
      </Row>
    );
  }
}

export default UserUtilityRequestCard;
