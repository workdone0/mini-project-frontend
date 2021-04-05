import React from "react";
import { Row, Col, Button, Drawer, Input, Switch } from "antd";
import { addRoomApi, getRoomsApi } from "../api/room";
import BackNavbar from "../components/backNavbar";
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
      <BackNavbar/>
        
            <h1 style={{textAlign:"center",margin:"20px"}}>Manage Rooms</h1>
         
          <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "flex-end",
              paddingRight: "2%",
              marginBottom:"15px",
            }}
            span={24}
          >
            <Button onClick={() => this.setState({ isDrawerVisible: true })}>
              Add Room
            </Button>
          </Col>
         
          </Row>
          <Row>
          <Col sm={2} xs={1}/>
          <Col className="manage-room-table-title-col" xl={4} lg={4} md={4} sm={4} xs={5}>
            <p className="manage-room-table-title">Room No.</p>
          </Col>
          <Col className="manage-room-table-title-col"  xl={4} lg={4} md={4} sm={4} xs={5}>
            <p className="manage-room-table-title">Air Cond.</p>
          </Col>
          <Col className="manage-room-table-title-col"  xl={4} lg={4} md={4} sm={4} xs={4}>
            <p className="manage-room-table-title">Proj.</p>
          </Col>
          <Col className="manage-room-table-title-col"  xl={4} lg={4} md={4} sm={4} xs={4}>
            <p className="manage-room-table-title">Cap.</p>
          </Col>
          <Col className="manage-room-table-title-col"  xl={4} lg={4} md={4} sm={4} xs={4} >
          <p className="manage-room-table-title">Action</p>
          </Col>
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
          className="manage-room-drawer"
          title="Add a new room"
          height={"50vh"}
          width={"40vw"}
          placement={window.screen.width>526?"right":"bottom"}
          onClose={this.onClose}
          visible={this.state.isDrawerVisible}
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
              style={{ margin: "0px 2% 2%" }}
              size="large"
              placeholder="Enter Room Name"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
            <Col
              xl={12} lg={12} md={24} sm={24} xs={24}
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
                xl={12} lg={12} md={24} sm={24} xs={24}
              style={{
                display: "flex",
                justifyContent: "flex-start",
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
              style={{ margin: "2% 2% 0px" }}
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
