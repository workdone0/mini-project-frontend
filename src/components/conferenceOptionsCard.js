import { Row, Button } from "antd";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./styles/conferenceOptionsCard.css";

class ConferenceOptionsCard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }
  clickedBooked = () => {
    this.setState({
      redirect: true,
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/bookconference" />;
    }
    return (
      <div className="conference-card">
        <div className="conference-card-body">
          <Row justify="center">
            <h2>{this.props.title}</h2>
          </Row>
          <Row>
            <p>
              {this.props.description.split(" ").map((d) => {
                return <div>{d}</div>;
              })}
            </p>
          </Row>
          <Row justify="center">
            <Button
              onClick={this.clickedBooked}
              type="primary"
              style={{
                backgroundImage: "linear-gradient(130deg, #f54295, #f58442)",
                borderColor: "white",
              }}
              size="large"
            >
              Book Here!
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default ConferenceOptionsCard;
