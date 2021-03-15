
import { Row, Button } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./styles/conferenceOptionsCard.css";

class ConferenceOptionsCard extends Component {
  render() {
    return (
      <div className="card">
        
        <div className="card-body">
          <Row justify="center"><h2>{this.props.title}</h2></Row>
          <Row justify="center"><p>{this.props.description}</p></Row>
          <Row justify="center">
            <Button type="primary" style={{backgroundImage:"linear-gradient(130deg, #f54295, #f58442)", borderColor:"white"}} size="large">
            <Link to="/form">  Book Here! </Link>
            </Button>
          
          </Row>
        </div>
      </div>
    );
  }
}

export default ConferenceOptionsCard;
