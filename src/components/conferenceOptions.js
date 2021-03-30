import React, { Component, useImperativeHandle } from "react";
import { Row, Col } from "antd";

import ConferenceOptionsCard from "./conferenceOptionsCard";
import { getRoomsApi } from "../api/room";

class ConferenceOptions extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
    };
  }
  componentDidMount = async () => {
    const response = await getRoomsApi();
    this.setState({
      rooms: await response.data.data,
    });
  };
  render() {
    return (
      <div style={{ minHeight: "80vh" }}>
        <Row justify="center">
        <Col xs={24} sm={24} lg={24} md={24} xl={24}>
          <h1 style={{ margin: "20px 0px",textAlign:"center" }}>Book Conference Room Here!</h1>
          </Col>
        </Row>
        <Row>
       
          {this.state.rooms.map((room) => {
            return (
              <Col xs={24} sm={24} lg={6} md={8} xl={6} key={room._id}>
                <ConferenceOptionsCard room={room} />
              </Col>
            
            );
          })}
       
        </Row>
      </div>
    );
  }
}

export default ConferenceOptions;
