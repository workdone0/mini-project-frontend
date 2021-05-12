import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { getOrders } from "../api/utility";
import UserUtilityRequestCard from "./userUtilityRequestCard";

class UserUtilityRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
  }
  componentDidMount = async () => {
    const response = await getOrders();
    const allComplaints = response.data.data;
    console.log(allComplaints);
    const complaints = allComplaints.filter((complaint) => {
      return complaint.userId._id === this.props.currentUser._id;
    });
    this.setState({
      orders: await complaints,
    });
  };

  render() {
    return (
      <>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center" }}>
            <h1>Utility Orders</h1>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Date</p>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Start Time</p>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <p>End Time</p>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <p>Description</p>
          </Col>
        </Row>
        <Row>
          {this.state.orders.map((order) => {
            return (
              <Col key={order._id} span={24}>
                <UserUtilityRequestCard order={order} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(UserUtilityRequest);
