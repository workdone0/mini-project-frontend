import React, { Component, useImperativeHandle } from "react";
import { Row, Col } from "antd";

import AdminConferenceOptionCard from "./adminConferenceOptionCard";
import "../components/styles/adminConferenceOptions.css";

class AdminConferenceOptions extends Component {
  render() {
    const titles = ["Manage Requests", "Manage Rooms"];
    const description = [
      "Approve or Decline Requests sent by the user",
      "Add or Delete Rooms as per Availability",
    ];
    const path = ["/bookingrequests", "/managerooms"];
    const image = [];
    return (
      <div style={{ minHeight: "69vh" }}>
        <Row justify="center">
          <h1 style={{}} className="blink-me">
            Welcome, Admin!
          </h1>
        </Row>
        <Row>
          {titles.map((title, index) => {
            return (
              <Col span={12} key={index}>
                <AdminConferenceOptionCard
                  title={title}
                  description={description[index]}
                  path={path[index]}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default AdminConferenceOptions;
