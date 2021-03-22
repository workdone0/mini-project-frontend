import React, { Component } from "react";
import { Row, Col } from "antd";
import { getRoomBookingsApi } from "../api/roomBooking";
import "./styles/conferenceDashboard.css";
import ConferenceDashboardCard from "./conferenceDashboardCard";

class ConferenceDashboard extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    const response = await getRoomBookingsApi();
    this.setState({
      events: await response.data.data,
    });
  }

  handleColor = (i) =>{
    if(i%2==0){
      return "main-container-noticeboard-card color1";
    }
    else{
      return "main-container-noticeboard-card color2";
    }
  }
  render() {
    return (
      <div id="conference-dashboard">
        <Row justify="center">
          <h1 style={{ margin: "20px 0px" }}>Conference Requests</h1>
        </Row>
        <Row justify="center" className="conference-table-heading">
          <Col span={2}></Col>
          <Col span={6}>
            <h2 className="conference-heading">Title</h2>
          </Col>
          <Col span={2}></Col>
          <Col span={3}>
            <h2 className="conference-heading">Date 1</h2>
          </Col>
          <Col span={2}></Col>
          <Col span={3}>
            <h2 className="conference-heading">
              Date 2
            </h2>
          </Col>
          <Col span={2}></Col>
          <Col span={3}>
            <h2 className="conference-heading">Status</h2>
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row className="conference-table">
          {this.state.events.map((event, index) => {
            return (
              <Col span={24} key={index}>
                <ConferenceDashboardCard event={event} color={this.handleColor(index)}/>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default ConferenceDashboard;