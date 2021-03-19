import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import ayushi from "../assets/ayushi.jpg";
import "./styles/sidenav.css";
import ProfileForm from "./profileForm";
import Dashboard from "./dashboard";

export class Sidenav extends Component {
  render() {
    return (
      <div>
        <Row className="sidenav-container">
          <Col span={5} className="sidenav-navbar">
            <Row justify="center">
              <img src={ayushi} className="sidenav-image" alt="image"></img>
            </Row>
            <Row justify="center">
              <h1 className="sidenav-user">{this.props.currentUser.name}</h1>
            </Row>
            <Row justify="center">
              <a className="sidenav-link">My Profile</a>
            </Row>
            <Row justify="center">
              <a className="sidenav-link">Dashboard</a>
            </Row>
          </Col>
          <Col span={19}>
            <ProfileForm />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Sidenav);
