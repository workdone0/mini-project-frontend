import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Collapse } from "antd";
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
              <Link className="sidenav-link" to="/profile/1">
                Profile
              </Link>
            </Row>
            <Row justify="center">
              <Link className="sidenav-link" to="/profile/0">
                Dashboard
              </Link>
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
                    <Link className="sidenav-link panel-link" to="/profile/2">
                      Conference
                    </Link>
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
            {this.props.type == 0 ? (
              <Dashboard />
            ) : this.props.type == 1 ? (
              <ProfileForm />
            ) : (
              <ConferenceDashboard />
            )}
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
