
import { Row, Button } from "antd";
import React, { Component } from "react";


import "./styles/conferenceOptionsCard.css";

class ConferenceOptionsCard extends Component {
  render() {
    return (
      <div className="card">
        
        <div className="card-body">
          <Row justify="center"><h2>{this.props.title}</h2></Row>
          <Row justify="center"><p>{this.props.description}</p></Row>
          <Row justify="space-between">
            <Button  style={{backgroundImage:"linear-gradient(to right, lightblue,#ea2c62)"}}  size="large">
              Availability
            </Button>
            <Button type="primary" style={{backgroundImage:"linear-gradient(to right, lightblue,#ea2c62)"}}  size="large">
              Book Here!
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default ConferenceOptionsCard;
