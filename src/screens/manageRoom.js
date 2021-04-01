import React from "react";
import { Row, Col, Button, Drawer, Input, Switch } from "antd";
import { addRoomApi, getRoomsApi } from "../api/room";

import "./styles/manageRoom.css";
import ManageRoomCard from "../components/manageRoomCard";

class ManageRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      isDrawerVisible: false,
      airconditioned: false,
      projector: false,
      capacity: "",
      name: "",
      loadingButton: false,
      rooms: [],
    };
  }
  componentDidMount = async () => {
    const response = await getRoomsApi();
    this.setState({
      rooms: await response.data.data,
    });
  };
  onClose = () => {
    this.setState({
      isDrawerVisible: false,
    });
  };
  updateRoomsData = async () => {
    const response = await getRoomsApi();
    this.setState({
      rooms: await response.data.data,
    });
  };
  addRoom = async () => {
    this.setState({
      loadingButton: true,
    });
    const response = await addRoomApi(
      this.state.name,
      this.state.airconditioned,
      this.state.projector,
      this.state.capacity
    );
    if (response.status == 201) {
      const roomsResponse = await getRoomsApi();
      this.setState({
        loadingButton: false,
        isDrawerVisible: false,
        rooms: await roomsResponse.data.data,
      });
    } else {
      this.setState({
        loadingButton: false,
      });
    }
  };
  render() {
    return (
      <>
        <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: "2%",
            }}
            span={12}
          >
            <h1>Manage Rooms</h1>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "2%",
            }}
            span={12}
          >
            <Button onClick={() => this.setState({ isDrawerVisible: true })}>
              Add Room
            </Button>
          </Col>
          <Col span={2} />
          <Col className="manage-room-table-title-col" span={4}>
            <p className="manage-room-table-title">Room Number</p>
          </Col>
          <Col className="manage-room-table-title-col" span={4}>
            <p className="manage-room-table-title">Air Conditioned</p>
          </Col>
          <Col className="manage-room-table-title-col" span={4}>
            <p className="manage-room-table-title">Projector</p>
          </Col>
          <Col className="manage-room-table-title-col" span={4}>
            <p className="manage-room-table-title">Capacity</p>
          </Col>
          <Col className="manage-room-table-title-col" span={2} />

          <Col style={{ padding: "0 2%" }} span={24}>
            {this.state.rooms.map((room) => {
              return (
                <ManageRoomCard
                  key={room._id}
                  room={room}
                  updateRoomsData={this.updateRoomsData}
                />
              );
            })}
          </Col>
        </Row>
        <Drawer
          title="Add a new room"
          width={720}
          onClose={this.onClose}
          visible={this.state.isDrawerVisible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button
                loading={this.state.loadingButton}
                onClick={this.addRoom}
                type="primary"
              >
                Add
              </Button>
            </div>
          }
        >
          <Row>
            <Input
              style={{ margin: "2%" }}
              size="large"
              placeholder="Enter Room Number"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "2%",
              }}
            >
              <Switch
                onChange={() => {
                  this.setState({ airconditioned: !this.state.airconditioned });
                }}
                style={{ margin: "2%" }}
                checkedChildren="Air Conditioned"
                unCheckedChildren="Not Air Conditioned"
                checked={this.state.airconditioned}
              />
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "2%",
              }}
            >
              <Switch
                onChange={() => {
                  this.setState({ projector: !this.state.projector });
                }}
                style={{ margin: "2%" }}
                checkedChildren="Projector"
                unCheckedChildren="No Projector"
                checked={this.state.projector}
              />
            </Col>
            <Input
              onChange={(event) => {
                this.setState({ capacity: event.target.value });
              }}
              style={{ margin: "2%" }}
              size="large"
              placeholder="Enter Capacity"
            />
          </Row>
        </Drawer>
      </>
    );
  }
}

export default ManageRoom;
