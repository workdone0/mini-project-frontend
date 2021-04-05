import React, { Component } from "react";
import { Row, Col, Menu, Dropdown, Button, Drawer } from "antd";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
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
    });
  }

  logout = () => {
    this.props.setCurrentUser(null);
    this.setState({
      user: null,
    });
    const { cookies } = this.props;
    cookies.remove("token");
    return <Redirect to="/"/>;
  };

  render() {
    const user = this.props.currentUser;
    const menu = (
      <Menu>
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
            lg={8}
            md={6}
            sm={10}
            xs={3}
            className="brand-container"
          >
            <div className="brand-name">
              Take<span>Easy</span>
            </div>
          </Col>
          <Col xl={18} lg={16} md={18} sm={14} xs={21}>
            <Row >
                  <Col span={4} />
                  <Col span={4} />
                  <Col span={4} />
                  <Col span={2} />
                  <Col span={4} className="nav-link">
                    <div className="nav-link-text">
                    <Link className="linkStyleNavbar" to="/AdminHome">
                        Home
                      </Link>
                    </div>
                  </Col>
                  <Col span={4} className="nav-link">
                    <div className="nav-link-text">
                      <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <a className="linkStyleNavbar">{user.name}</a>
                      </Dropdown>
                    </div>
                  </Col>
                 
            </Row>
          </Col>
        </Row>
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