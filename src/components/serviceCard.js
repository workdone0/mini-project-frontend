import React, { Component } from "react";
import { Row } from "antd";
import "./styles/serviceCard.css";

export default class ServiceCard extends Component {
  render() {
    return (
      <div className="service-card">
        <div className="service-card-body">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="crimson" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
          <Row justify="center"><h2 style={{color: "#ea2c62"}}>{this.props.title}</h2></Row>
          
          <Row justify="center"><p>{this.props.description}</p></Row>
        </div>
      </div>
    );
  }
}
