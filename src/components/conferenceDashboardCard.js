import React, { Component } from "react";
import { Row, Col } from "antd";
import moment from "moment";
import pending from "../assets/pending.png";
import remove from "../assets/remove.png";
import check from "../assets/check.png";
import "./styles/conferenceDashboardCard.css";

class ConferenceDashboardCard extends Component {
  render() {
    const startTime = this.props.event.startTime * 60 * 1000;
    const endTime = this.props.event.endTime * 60 * 1000;
    return (
      <div className={this.props.color}>
        <Row justify="center">
       
          <Col className="dashboard-card-column"  xl={4}
            lg={5}
            md={6}
            sm={10}
            xs={10}>
            <h2 className="dashboard-card-heading">{this.props.event.title.toUpperCase()}</h2>
          </Col>
          <Col className="dashboard-card-column"  xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
            <h2 className="dashboard-card-heading">
              {this.props.event.roomId.name}
            </h2>
          </Col>
          <Col className="dashboard-card-column" xl={4}
            lg={4}
            md={5}
            sm={5}
            xs={5}>
            <h2 className="dashboard-card-heading">
              {moment(startTime).format(" DD-MM-YY")}
            </h2>
          </Col>
          <Col className="dashboard-card-column"  xl={4}
            lg={4}
            md={5}
            sm={0}
            xs={0}>
            <h2 className="dashboard-card-heading">{`${moment(startTime)
              .format("HH:MM ")
              .toUpperCase()} - ${moment(endTime)
              .format("HH:MM ")
              .toUpperCase()}`}</h2>
          </Col>
          <Col className="dashboard-card-column"   xl={4}
            lg={4}
            md={4}
            sm={5}
            xs={5}>
            {this.props.event.status == 0
              ? < img src={pending} style={{width:"20px"}}></img>
              : this.props.event.status == 1
              ? < img src={check} style={{width:"20px"}}></img>
              : < img src={remove} style={{width:"20px"}}></img>}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConferenceDashboardCard;
