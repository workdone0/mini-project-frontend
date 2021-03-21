import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse} from "antd";
import ayushi from "../assets/ayushi.jpg";
import "./styles/sidenav.css";
import ProfileForm from "./profileForm";
import Dashboard from "./dashboard";
    
const { Panel } = Collapse;

export class Sidenav extends Component {
  render() {
    const isDashboard = this.props.isDashboard;
    
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
            <Row justify="center">
              <Collapse className="site-collapse-custom-collapse" accordion bordered={false}>
                <Panel className="site-collapse-custom-panel" header="Services" key="1" style={{borderBottom: "0px", color:"white"}}>
                  <Row><a className="sidenav-link panel-link">Conference Room Requests</a></Row>
                  <Row><a className="sidenav-link panel-link">Hospital Appointments</a></Row>
                  <Row><a className="sidenav-link panel-link">Event Utilities Booked</a></Row>
                  <Row><a className="sidenav-link panel-link">Hostel Complaints</a></Row>
                </Panel>
              </Collapse>
            </Row>
          </Col>
          <Col span={19}>
            {isDashboard ? (<Dashboard/>) : (<ProfileForm/>)}
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
