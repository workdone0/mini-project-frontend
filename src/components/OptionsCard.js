import { Row, Col, Button } from "antd";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/complaint.png";
import "../assets/conference.png";
import "../assets/hospital.png";
import "../assets/event.png";

import "./styles/optionsCard.css";

class OptionsCard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }
  clickedLetGo = () => {
    console.log("Clicked");
    console.log(this.props);
    this.setState({
      redirect: true,
    });
  };
  render() {
    console.log(this.props);
    if (this.state.redirect) {
      return <Redirect to={this.props.path} />;
    }
    return (
      <div className="options-card">
        <img className="options-card-image" src={this.props.image}></img>
        <div className="options-card-body">
          <Row justify="center">

            <h2 style={{color:"white"}}>{this.props.title}</h2>
          </Row>
          <Row justify="center">
          <Col xs={0} sm={0} lg={24} md={0} xl={24}>
            <p style={{color:"white"}}>{this.props.description}</p>
            </Col>
          </Row>
          <Row justify="center">
            <Button
            className="card-button"
              type="primary"
              size="large"
              onClick={this.clickedLetGo}
              style={{
               
                                    backgroundColor:"crimson ",
                                    borderRadius: "10px",
                                    border:"none",
                                    
              }}
            >
               Let's Go!
             
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default OptionsCard;
