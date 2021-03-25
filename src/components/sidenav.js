import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse } from "antd";
import ayushi from "../assets/ayushi.jpg";
import "./styles/sidenav.css";
import ProfileForm from "./profileForm";
import Dashboard from "./dashboard";
import ConferenceDashboard from "./conferenceDashboard";

const { Panel } = Collapse;

export class Sidenav extends Component {
  constructor() {
    super();
    this.state = {
      isDashboard: null,
    };
  }
  componentDidMount() {
    this.setState({
      isDashboard: this.props.isDashboard,
    });
  }
  clickedProfile = () => {
    this.setState({
      isDashboard: false,
    });
  };
  clickedDashboard = () => {
    this.setState({
      isDashboard: true,
    });
  };
  render() {
    return (
      <div>
        <Row className="sidenav-container">
          <Col span={5} className="sidenav-navbar">
            <Row justify="center">
              <img
                src={`https://avatars.dicebear.com/api/bottts/${this.props.currentUser.name}.svg`}
                className="sidenav-image"
                alt="image"
              ></img>
            </Row>
            <Row justify="center">
              <h1 className="sidenav-user">{this.props.currentUser.name}</h1>
            </Row>
            <Row justify="center">
              <a onClick={this.clickedProfile} className="sidenav-link">
                My Profile
              </a>
            </Row>
            <Row justify="center">
              <a onClick={this.clickedDashboard} className="sidenav-link">
                Dashboard
              </a>
            </Row>
            <Row justify="center">
              <Collapse
                className="site-collapse-custom-collapse"
                accordion
                bordered={false}
              >
                <Panel
                  className="site-collapse-custom-panel"
                  header="Services"
                  key="1"
                  style={{ borderBottom: "0px", color: "white" }}
                >
                  <Row>
                    <a className="sidenav-link panel-link">Conference</a>
                  </Row>
                  <Row>
                    <a className="sidenav-link panel-link">Hospital</a>
                  </Row>
                  <Row>
                    <a className="sidenav-link panel-link">Event</a>
                  </Row>
                  <Row>
                    <a className="sidenav-link panel-link">Hostel</a>
                  </Row>
                </Panel>
              </Collapse>
            </Row>
          </Col>
          <Col span={19}>
            <ConferenceDashboard />
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
