import React, { Component } from "react";
import { Row, Col, Menu, Dropdown, Button, Drawer } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { MenuOutlined } from "@ant-design/icons";

import { setCurrentUser } from "../redux/user/user.actions";
import "./styles/navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      drawerVisible: false,
    };
  }
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
  componentDidMount() {
    this.setState({
      user: this.props.currentUser,
      isDashboard: "false",
      isProfileForm: "false",
    });
  }

  logout = () => {
    this.props.setCurrentUser(null);
    this.setState({
      user: null,
    });
    const { cookies } = this.props;
    cookies.remove("token");
  };

  noticeboardClicked = () => {
    const anchor = document.getElementById("home-noticeboard");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  servicesClicked = () => {
    const anchor = document.getElementById("home-services");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  aboutUsClicked = () => {
    const anchor = document.getElementById("home-about-us");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  contactClicked = () => {
    const anchor = document.getElementById("home-contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  toggelDrawer = () => {
    const curState = !this.state.drawerVisible;
    this.setState({
      drawerVisible: curState,
    });
  };
  render() {
    const user = this.props.currentUser;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile/0">Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile/1">Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.logout}>Logout</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <>
        <Row className="main-container-nav" justify="center" align="middle">
          <Col
            xl={6}
            lg={18}
            md={18}
            sm={18}
            xs={18}
            className="brand-container"
          >
            <div className="brand-name">
              Take<span>Easy</span>
            </div>
          </Col>
          <Col xl={18} lg={0} md={0} sm={0} xs={0}>
            <Row align="middle">
              {user ? (
                <>
                  <Col span={4} />
                  <Col span={4} className="nav-link">
                    <div className="nav-link-text">
                      <Link className="linkStyleNavbar" to="/">
                        Home
                      </Link>
                    </div>
                  </Col>
                  <Col span={4} className="nav-link">
                    <div className="nav-link-text">
                      <Link className="linkStyleNavbar" to="/mainoptions">
                        Services
                      </Link>
                    </div>
                  </Col>
                  <Col span={4} className="nav-link">
                    <div className="nav-link-text">
                      <a
                        className="linkStyleNavbar"
                        onClick={this.contactClicked}
                      >
                        Contact
                      </a>
                    </div>
                  </Col>
                  <Col span={4} className="nav-link">
                    <div className="nav-link-text">
                      <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <a className="linkStyleNavbar">{user.name}</a>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col span={4} />
                </>
              ) : (
                <>
                  <Col span={3} />
                  <Col span={3} className="nav-link">
                    <div className="nav-link-text">
                      <Link className="linkStyleNavbar" to="/">
                        Home
                      </Link>
                    </div>
                  </Col>
                  <Col span={3} className="nav-link">
                    <div className="nav-link-text">
                      <a
                        className="linkStyleNavbar"
                        onClick={this.noticeboardClicked}
                      >
                        Notice Board
                      </a>
                    </div>
                  </Col>

                  <Col span={3} className="nav-link">
                    <div className="nav-link-text">
                      <a
                        className="linkStyleNavbar"
                        onClick={this.servicesClicked}
                      >
                        Services
                      </a>
                    </div>
                  </Col>

                  <Col span={3} className="nav-link">
                    <div className="nav-link-text">
                      <a
                        className="linkStyleNavbar"
                        onClick={this.aboutUsClicked}
                      >
                        About US
                      </a>
                    </div>
                  </Col>
                  <Col span={3} className="nav-link">
                    <div className="nav-link-text">
                      <a
                        className="linkStyleNavbar"
                        onClick={this.contactClicked}
                      >
                        Contact
                      </a>
                    </div>
                  </Col>
                  <Col span={3} className="nav-link">
                    <div className="nav-link-text">
                      <Link className="linkStyleNavbar" to="/login">
                        Login/Signup
                      </Link>
                    </div>
                  </Col>
                  <Col span={3} />
                </>
              )}
            </Row>
          </Col>
          <Col
            xl={0}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            style={{ textAlign: "right", paddingRight: "10%" }}
          >
            <MenuOutlined
              onClick={this.toggelDrawer}
              style={{ color: "#ffffff", fontSize: "20px" }}
            />
          </Col>
        </Row>
        <Drawer
          placement="left"
          closable={true}
          onClose={this.toggelDrawer}
          visible={this.state.drawerVisible}
          width="70%"
        >
          {this.props.currentUser ? (
            <Row className="navbar-drawer">
              <Col span={24}>
                <div className="navbar-drawer-text">
                  Hi, {this.props.currentUser.name}
                </div>
              </Col>
            </Row>
          ) : (
            <Row className="navbar-drawer">
              <Col span={24}>
                <Link to="/login">
                  <div className="navbar-drawer-text">Login</div>
                </Link>
              </Col>
            </Row>
          )}
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withCookies(Navbar));
