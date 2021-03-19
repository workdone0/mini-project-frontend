import React, { Component } from "react";
import { Row, Col, Menu, Dropdown, Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

import { setCurrentUser } from "../redux/user/user.actions";
import "./styles/navbar.css";

class Navbar extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
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

  render() {
    const user = this.props.currentUser;
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
         
            <Link to ="/profile">Profile</Link>
            
          
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.logout}>Logout</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Row className="main-container-nav">
        <Col span={6} className="brand-container">
          <div className="brand-name">
            Take<span>Easy</span>
          </div>
        </Col>
        <Col span={18}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withCookies(Navbar));
