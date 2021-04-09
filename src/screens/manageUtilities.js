import React, { Component } from "react";
import { Row, Col, Button, Drawer, Input, InputNumber, message } from "antd";
import { addUtilityApi, getUtilityApi } from "../api/utility";
import AdminNavbar from "../components/adminNavbar";
import ManageUtilityCard from "../components/manageUtilityCard";
import "./styles/manageRoom.css";

class ManageUtilities extends Component {
    constructor() {
        super();
        this.state = {
          isDrawerVisible: false,
          quantity: "",
          name: "",
          loadingButton: false,
          utilities: [],
        };
      }
      componentDidMount = async () => {
        if (window.innerWidth <= 720) {
          this.info();
        }
        const response = await getUtilityApi();
        this.setState({
          utilities: await response.data.data,
        });
      };
      info = () => {
        message.info("Best viewed on larger screens.");
      };
      onClose = () => {
        this.setState({
          isDrawerVisible: false,
        });
      };
      updateUtilityData = async () => {
        const response = await getUtilityApi();
        this.setState({
          utilities: await response.data.data,
        });
      };
      addUtility = async () => {
        this.setState({
          loadingButton: true,
        });
        const response = await addUtilityApi(
          this.state.name,
          this.state.quantity
        );
        if (response.status == 201) {
          const utilityResponse = await getUtilityApi();
          this.setState({
            loadingButton: false,
            isDrawerVisible: false,
            utilities: await utilityResponse.data.data,
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
        <AdminNavbar/>
        <h1 style={{ textAlign: "center", margin: "20px" }}>Manage Utilities</h1>

        <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "flex-end",
              paddingRight: "2%",
              marginBottom: "15px",
            }}
            span={24}
          >
            <Button onClick={() => this.setState({ isDrawerVisible: true })}>
              Add Utility
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xl={2} lg={2} md={1} sm={2} xs={2} />
          <Col
            className="manage-room-table-title-col"
            span={6}
          >
            <p className="manage-room-table-title">Item Name</p>
          </Col>
          <Col
            className="manage-room-table-title-col"
            span={6}
          >
            <p className="manage-room-table-title">Quantity</p>
          </Col>
          <Col
            className="manage-room-table-title-col"
            span={6}
          >
            <p className="manage-room-table-title">Actions</p>
          </Col>
          <Col xl={2} lg={2} md={1} sm={2} xs={2} />
          <Col span={24}>
            {this.state.utilities.map((utility) => {
              return (
                <ManageUtilityCard
                  key={utility._id}
                  utility={utility}
                  updateUtilityData={this.updateUtilityData}
                />
              );
            })}
          </Col>
        </Row>
        <Drawer
          className="manage-room-drawer"
          title="Add a new utility"
          height={"50vh"}
          width={"30vw"}
          placement={window.screen.width > 526 ? "right" : "bottom"}
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
                onClick={this.addUtility}
                type="primary"
              >
                Add
              </Button>
            </div>
          }
        >
          <Row>
            <h3 style={{color:"white", margin: "3px 2% 2%"}}>Enter Utility Name :</h3>
            <Input
              style={{ margin: "0px 2% 2%" }}
              size="large"
              placeholder="Enter Utility Name"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
            <h3 style={{color:"white", margin: "3px 2% 2%"}}>Enter Quantity :</h3>
            <InputNumber style={{ margin: "0px 2% 2%" , width:"100%"}} size="large" defaultValue={0}  
              onChange={(event) => {
                this.setState({ quantity: event.target.value });
              }}
            />
          </Row>
        </Drawer>
      </>
    );
  }
}

export default ManageUtilities;