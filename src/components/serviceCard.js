import React, { Component } from "react";
import { Row } from "antd";
import "./styles/serviceCard.css";

export default class ServiceCard extends Component {
  render() {
    return (
      <div className="service-card">
        <div className="service-card-body">
          <Row justify="center"><h2 style={{color: "#ea2c62"}}>{this.props.title}</h2></Row>
          
          <Row justify="center"><p>{this.props.description}</p></Row>
        </div>
      </div>
    );
  }
}
