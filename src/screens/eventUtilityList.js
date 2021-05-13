import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";

import BackNavbar from "../components/backNavbar";
import EventUtilityCard from "../components/eventUtilityCard";
import Success from "./success";
import "./styles/eventUtilityList.css";

import { getUtilityApi, getOrderLineApi, addOrderApi } from "../api/utility";

class EventUtilityList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      data: {},
      success: false,
    };
  }
  componentDidMount = async () => {
    const responseGetUtil = await getUtilityApi();
    const responseOrderLine = await getOrderLineApi();
    var data = await this.props.location.state.data;
    var items = responseGetUtil.data.data;
    const orderlines = responseOrderLine.data.data;
    orderlines.map((orderline) => {
      if (
        (data.to <= orderline.to && data.to >= orderline.from) ||
        (data.from <= orderline.to && data.from >= orderline.from)
      ) {
        items.map((item) => {
          if (item._id == orderline.item._id) {
            item.inStock = item.inStock - orderline.quantity;
          }
        });
      }
    });
    data.items = [];
    data.userId = this.props.currentUser._id;
    this.setState({
      items: items,
      data: data,
    });
  };

  updateItems = async (itemId, quantity) => {
    var nItems = this.state.data.items.filter((item) => item.item != itemId);
    if (quantity > 0) {
      nItems.push({ item: itemId, quantity: quantity });
    }
    var nData = this.state.data;
    nData.items = nItems;
    this.setState({
      data: nData,
    });
  };

  placeOrder = async () => {
    const response = await addOrderApi(this.state.data);
    if (response.status == 201) {
      this.setState({
        success: true,
      });
    }
  };
  render() {
    if (this.state.success) {
      return <Success text="Order placed Successfully" />;
    }
    return (
      <div>
        <BackNavbar />
        <Row justify="center">
          <Col span={24}>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Event Utility List
            </h1>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            backgroundImage: "linear-gradient(270deg, #e44690, #f07f3e)",
            marginLeft:"1vw",
            width:"98vw",
            padding: "3px",
            fontStyle: "italic",
          }}
        >
          <Col xl={2} lg={2} md={2} sm={0} xs={0} />
          <Col md={6} xs={6}>
            <h2 className="utility-list-heading">Item Name</h2>
          </Col>
          <Col md={6} xs={6}>
            <h2 className="utility-list-heading">Availability</h2>
          </Col>
          <Col md={6} xs={6}>
            <h2 className="utility-list-heading">Requirement</h2>
          </Col>
          <Col md={4} xs={5}>
            <h2 className="utility-list-heading">Action</h2>
          </Col>
        </Row>
        <Row justify="center">
          {this.state.items.map((utility) => {
            return (
              <EventUtilityCard
                utility={utility}
                key={utility._id}
                updateItems={this.updateItems}
              />
            );
          })}
        </Row>
        <Row justify="center" style={{ minHeight: "20vh" }}>
          <Button
            type="primary"
            size="large"
            disabled={
              this.state.data.items
                ? this.state.data.items.length > 0
                  ? false
                  : true
                : true
            }
            onClick={this.placeOrder}
            style={{
              backgroundImage: "linear-gradient(130deg, #e62e53, crimson)",
              borderRadius: "10px",
              border: "none",
              width: "200px",
              height: "50px",
              fontWeight: "500",
              marginTop: "40px",
              marginBottom: "15%"
            }}
          >
            Place Order
          </Button>
        </Row>
        <FooterIcon />
        <Footers />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(EventUtilityList));
