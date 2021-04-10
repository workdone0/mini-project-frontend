import React from "react";
import { Row, Col } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

import { deleteUtilityApi } from "../api/utility";

import "./styles/manageRoomCard.css";

class ManageUtilityCard extends React.Component {
  deleteUtility = async () => {
    const response = await deleteUtilityApi(this.props.utility._id);
    this.props.updateUtilityData();
  };
  render() {
    return (
      <Row style={{ backgroundColor: "#F8F8F8", margin: "10px 0" }}>
        <Col xl={2} lg={2} md={1} sm={2} xs={2} />
        <Col
          className="manage-room-card-col"
          span={6}
        >
          <p className="manage-room-card-text">{this.props.utility.name}</p>
        </Col>
        <Col
          className="manage-room-card-col"
          span={6}
        >
          <p className="manage-room-card-text">{this.props.utility.capacity}</p>
        </Col>
        <Col
          className="manage-room-card-col"
          span={6}
        >
          <DeleteTwoTone
            onClick={this.deleteUtility}
            style={{ fontSize: "15px" }}
            twoToneColor="#eb2f96"
          />
        </Col>
        <Col xl={2} lg={2} md={1} sm={2} xs={2} />
      </Row>
    );
  }
}

export default ManageUtilityCard;