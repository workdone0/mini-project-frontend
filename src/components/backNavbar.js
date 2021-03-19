import React, { Component } from 'react';
import { Row, Col} from "antd";
import { Link } from "react-router-dom";
import "./styles/sidenav.css";

export class BackNavbar extends Component {
 

  render() {
    return (
     <div>
      <Row className="main-container-sidenav">
        <Col span={1}></Col>
        <Col span={6} className="sidenav-brand-container">
          <div className="sidenav-brand-name">
            Take<span>Easy</span>
          </div>
        </Col>
        <Col span={14}></Col>
        <Col span={2} style={{padding:"5px"}}>
          <Link to="/" className="sidenav-back">Back</Link>
        </Col>
      </Row>
    </div>
    );
  }
}

export default BackNavbar;