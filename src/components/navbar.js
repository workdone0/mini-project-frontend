import React, { Component } from "react";
import { Row, Col, Menu, Dropdown, Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setCurrentUser } from "../redux/user/user.actions";
import "./styles/navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.setState({
      user: this.props.currentUser,
    });
  }

  logout = () => {
    this.props.setCurrentUser(null);
    this.setState({
      user: null,
    });
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

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Dashboard
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="/" onClick={this.logout}>Logout</a>
        </Menu.Item>
      </Menu>
    );
    console.log(this.state);
    return (
      <Row className="main-container-nav">
        <Col span={6} className="brand-container">
          <div className="brand-name">
            Take<span>Easy</span>
          </div>
        </Col>
        <Col span={18}>
          <Row align="middle">
            {this.state.user ? (
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
                    <Link className="linkStyleNavbar" to="/mainOptions">
                      Services
                    </Link>
                  </div>
                </Col>
                <Col span={4} className="nav-link">
                  <div className="nav-link-text">
                    <a className="linkStyleNavbar" onClick={this.contactClicked}>Contact</a>
                  </div>
                </Col>
                <Col span={4} className="nav-link">
                  <div className="nav-link-text">
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                      <a className="linkStyleNavbar">{this.state.user.name}</a>
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
                    <a className="linkStyleNavbar" onClick={this.noticeboardClicked}>Notice Board</a>
                  </div>
                </Col>

                <Col span={3} className="nav-link">
                  <div className="nav-link-text">
                    <a className="linkStyleNavbar" onClick={this.servicesClicked}>Services</a>
                  </div>
                </Col>

                <Col span={3} className="nav-link">
                  <div className="nav-link-text">
                    <a className="linkStyleNavbar" onClick={this.aboutUsClicked}>About US</a>
                  </div>
                </Col>
                <Col span={3} className="nav-link">
                  <div className="nav-link-text">
                    <a className="linkStyleNavbar" onClick={this.contactClicked}>Contact</a>
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
      </Row>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
