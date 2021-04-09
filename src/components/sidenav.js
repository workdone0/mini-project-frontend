import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Menu } from "antd";
import "./styles/sidenav.css";
import ProfileForm from "./profileForm";
import Dashboard from "./dashboard";
import ConferenceDashboard from "./conferenceDashboard";

import {
  PieChartOutlined,
  UserOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

import UserHostelComplaint from "./userHostelComplaint";

const { SubMenu } = Menu;
export class Sidenav extends Component {
  render() {
    var selectedKey = this.props.type + 1;
    selectedKey = String(selectedKey);
    return (
      <div>
        <Row className="sidenav-container">
          <Col xl={5} lg={5} md={0} sm={0} xs={0} className="sidenav-navbar">
            <Row justify="center">
              <img
                src={`https://avatars.dicebear.com/api/bottts/${this.props.currentUser.name}.svg`}
                className="sidenav-image"
                alt="image"
              ></img>
            </Row>
            <Row justify="center">
              <h1 className="sidenav-user">
                Hi, {this.props.currentUser.name}
              </h1>
            </Row>
            <Menu
              defaultSelectedKeys={[selectedKey]}
              mode="inline"
              inlineCollapsed={false}
              theme="dark"
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/profile/0">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/profile/1">Profile</Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<CustomerServiceOutlined />}
                title="Services"
              >
                <Menu.Item key="3">
                  <Link to="/profile/2">Conference Bookings</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/profile/3">Hospital Bookings</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/profile/4">Event Utility Bookings</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/profile/5">Hostel Complaints</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col xl={19} lg={19} md={24} sm={24} xs={24}>
            {this.props.type == 0 ? (
              <Dashboard />
            ) : this.props.type == 1 ? (
              <ProfileForm />
            ) : this.props.type == 2 ? (
              <ConferenceDashboard />
            ) : (
              <UserHostelComplaint />
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
