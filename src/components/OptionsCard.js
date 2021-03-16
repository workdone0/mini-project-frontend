import { Row, Button } from "antd";
import React, { Component } from "react";
import "../assets/complaint.png";
import "../assets/conference.png";
import "../assets/hospital.png";
import "../assets/event.png";

import "./styles/optionsCard.css";

class OptionsCard extends Component {
  render() {
    return (
      <div className="options-card">
        <img className="options-card-image" src={this.props.image}></img>
        <div className="options-card-body">
          <Row justify="center"><h2>{this.props.title}</h2></Row>
          <Row justify="center"><p>{this.props.description}</p></Row>
          <Row justify="center">
            <Button type="primary" size="large" href={this.props.path} style={{backgroundImage:"linear-gradient(130deg, #f54295, #f58442)", borderColor:"white"}}>
                Let's Go!
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default OptionsCard;
