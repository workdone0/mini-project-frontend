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
          <a onClick={this.logout}>Logout</a>
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
                  <div className="nav-link-text">Home</div>
                </Col>
                <Col span={4} className="nav-link">
                  <div className="nav-link-text">
                    <Link className="linkStyleNavbar" to="/mainOptions">
                      Services
                    </Link>
                  </div>
                </Col>
                <Col span={4} className="nav-link">
                  <div className="nav-link-text">Contact</div>
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
                  <div className="nav-link-text">Home</div>
                </Col>
                <Col span={3} className="nav-link">
                  <div className="nav-link-text">Notice Board</div>
                </Col>
                <Col span={3} className="nav-link">
                  <div className="nav-link-text">Services</div>
                </Col>
                <Col span={3} className="nav-link">
                  <div className="nav-link-text">About US</div>
                  
                </Col>
                <Col span={3} className="nav-link">
                  <div className="nav-link-text">Contact</div>
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
