import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Collapse, Menu } from "antd";
import "./styles/sidenav.css";
import ProfileForm from "./profileForm";
import Dashboard from "./dashboard";
import ConferenceDashboard from "./conferenceDashboard";

import {
  PieChartOutlined,
  UserOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
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
    var selectedKey = this.props.type + 1;
    selectedKey = String(selectedKey);
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
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
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
