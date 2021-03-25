import { Row, Button } from "antd";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";


import "./styles/adminConferenceOptionCard.css";

class AdminConferenceOptionCard extends Component {
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
      <div className="admin-options-card">
      
        <div className="admin-options-card-body">
          <Row justify="center">
            <h1 style={{color:"crimson", fontFamily:"Times New Roman"}}>{this.props.title}</h1>
          </Row>
          <Row justify="center">
            <p style={{color:"gray"}}>{this.props.description}</p>
          </Row>
          <Row justify="center">
            <Button
              type="primary"
              size="large"
              onClick={this.clickedLetGo}
              style={{
                backgroundColor: "crimson",
                border: "none",
                borderRadius:"15px"
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

export default AdminConferenceOptionCard;
