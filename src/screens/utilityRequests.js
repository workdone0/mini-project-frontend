import React, { Component } from "react";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import { Row, Col } from "antd";
import AdminNavbar from "../components/adminNavbar";
import UtilityAdminCard from "../components/utilityAdminCard";

import { getOrders } from "../api/utility";

class UtilityRequests extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
  }
  componentDidMount = async () => {
    const response = await getOrders();
    this.setState({
      orders: await response.data.data,
    });
  };
  render() {
    return (
      <>
        <AdminNavbar />
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <h1 style={{ textAlign: "center", margin: "20px 0 20px 0" }}>
              Orders
            </h1>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#F1F2F5", fontWeight: "500" }}>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>User</p>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>Date</p>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>Start Time</p>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>End Time</p>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <p>Actions</p>
          </Col>
        </Row>
        <Row>
          {this.state.orders.length > 0
            ? this.state.orders.map((order) => {
                return (
                  <Col key={order._id} span={24}>
                    <UtilityAdminCard order={order} />
                  </Col>
                );
              })
            : "Nothing to Display"}
        </Row>
        <FooterIcon />
        <Footers />
      </>
    );
  }
}

export default UtilityRequests;
