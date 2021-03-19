import React, { Component } from 'react'

import { Row, Col, Menu, Dropdown, Button } from "antd";
import ayushi from "../assets/ayushi.jpg";

import "./styles/profile.css";


export class Sidenav extends Component {
 

  render() {
    return (
     <div>
<Row className="navbar-container-nav">
        <Col span={6} className="navbar-brand-container">
          <div className="navbar-brand-name">
            Take<span>Easy</span>
           
          </div>
        </Col>
    </Row>
    <Row className="sidebar-container-nav">
      <Col span={5} className="sidebar-brand-container">
        <Row>
          <img src={ayushi} className="sidebar-image" alt="image"></img>
        </Row>
        <Row>
          
        <button className="sidebar-button">My Profile</button>
        </Row>
        <Row></Row>
        <Row>
          <ul>
            <li>Dashboard</li>
            
          </ul>
        </Row>
      </Col>
      <Col span={19}className="dashboard-content">

      </Col>
    </Row>
    </div>

    );
  }
}


        
        

export default Sidenav;
