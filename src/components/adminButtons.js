import { Row, Button } from "antd";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/adminButtons.css";

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
      <div className="admin-button-container">
          <Row justify="center">
            <Button
              className="admin-button"
              type="primary"
              size="large"
              onClick={this.clickedLetGo}
              style={{
                backgroundImage: this.props.color,
                borderColor: "white",
              }}
            >
               <span>{this.props.svgs}</span>{this.props.title} 
            </Button>
          </Row>
      </div>
    );
  }
}

export default OptionsCard;