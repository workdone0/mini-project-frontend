import { Row, Button, Col } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/conferenceOptionsCard.css";

class ConferenceOptionsCard extends Component {
  render() {
    return (
      <div className="conference-card">
        <div className="conference-card-body">
          <Row justify="center">
            <h2>{this.props.room.name}</h2>
          </Row>
          <Row justify="center">
            <Col span={24} style={{ textAlign: "center" }}>
              <p>Capacity: {this.props.room.capacity}</p>
              <p>
                Air Conditioner: {this.props.room.airConditioned ? "Yes" : "No"}
              </p>
              <p>Projector: {this.props.room.projector ? "Yes" : "No"}</p>
            </Col>
          </Row>
          <Row justify="center">
            <Button
              type="primary"
              style={{
                backgroundImage: "linear-gradient(130deg, #f54295, #f58442)",
                borderColor: "white",
              }}
              size="large"
            >
              <Link to={`/bookConference/${this.props.room._id}`}>
                Book Here!
              </Link>
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default ConferenceOptionsCard;
