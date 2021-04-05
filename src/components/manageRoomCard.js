import React from "react";
import { Row, Col } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

import { deleteRoomApi } from "../api/room";

import "./styles/manageRoomCard.css";

class ManageRoomCard extends React.Component {
  deleteRoom = async () => {
    const response = await deleteRoomApi(this.props.room._id);
    this.props.updateRoomsData();
  };
  render() {
    return (
      <Row style={{ backgroundColor: "#F8F8F8", margin: "10px 0" }}>
        <Col span={2} />
        <Col className="manage-room-card-col" span={3}>
          <p className="manage-room-card-text">{this.props.room.name}</p>
        </Col>
        <Col className="manage-room-card-col" span={5}>
          <p className="manage-room-card-text">
            {this.props.room.airConditioned ? "Yes" : "No"}
          </p>
        </Col>
        <Col className="manage-room-card-col" span={4}>
          <p className="manage-room-card-text">
            {this.props.room.projector ? "Yes" : "No"}
          </p>
        </Col>
        <Col className="manage-room-card-col" span={4}>
          <p className="manage-room-card-text">{this.props.room.capacity}</p>
        </Col>
        <Col className="manage-room-card-col" span={4}>
          <DeleteTwoTone
            onClick={this.deleteRoom}
            style={{ fontSize: "15px" }}
            twoToneColor="#eb2f96"
          />
        </Col>
        <Col span={2} />
      </Row>
    );
  }
}

export default ManageRoomCard;
