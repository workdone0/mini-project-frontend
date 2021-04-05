import React, { Component } from "react";
import { Drawer, Menu } from "antd";
import Sidenav from "../components/sidenav";
import BackNavbarProfile from "../components/backNavProfile";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  PieChartOutlined,
  UserOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      drawerVisible: false,
    };
  }
  toggleDrawer = () => {
    this.setState({
      drawerVisible: !this.state.drawerVisible,
    });
  };
  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };
  render() {
    var selectedKey = Number(this.props.match.params.typeId) + 1;
    selectedKey = String(selectedKey);
    return (
      <div>
        <BackNavbarProfile needHam={true} toggleDrawer={this.toggleDrawer} />
        <Sidenav type={Number(this.props.match.params.typeId)} />
        <Drawer
          placement="left"
          closable={true}
          onClose={this.onClose}
          visible={this.state.drawerVisible}
          title={`Hi, ${this.props.currentUser.name}`}
          bodyStyle={{ padding: 0, backgroundColor: "#04111f" }}
          headerStyle={{
            backgroundColor: "#04111f",
            border: 0,
            borderRadius: 0,
          }}
        >
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
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(Profile));
