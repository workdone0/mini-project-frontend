import React, { Component } from "react";
import { Row, Col, Button, Input, TimePicker, Form, DatePicker} from "antd";
import Navbar from "../components/navbar";
import Footers  from "../components/footer";
import FooterIcon from "../components/footerIcons";
import eventutility from "../assets/eventutility.png";
import "./styles/eventUtility.css";

class EventUtility extends Component {
  render() {
    const format = "HH:mm";
    return (
      <div>
        <>
            <Navbar />
            <Row>
                <Col span={10}>
                    <Row justify="center" align="middle">
                        <img className="eventutility-img" src={eventutility}/>
                    </Row>
                </Col>
                <Col span={14}>
                    <Row justify="center"><h1 className="eventutility-heading">To Proceed We Need Some Info!</h1></Row>
                    <Row justify="center">
                        <Form className="eventutility-form" layout="vertical" style={{ width: "100%" }}>
                            <Form.Item label="Event Details">
                                <Input
                                    onChange={this.titleChanged}
                                    style={{ width: "100%", color: "black" }}
                                    placeholder="Event Details"
                                />
                            </Form.Item>
                            <Form.Item label="Select Date">
                                <DatePicker
                                onChange={this.dateSelected}
                                style={{ width: "100%" }}
                                />
                            </Form.Item>
                            <Row>
                                <Col xs={24} sm={24} lg={24} md={24} xl={12}>
                                    <Form.Item label="Select Event Start Time">
                                        <TimePicker
                                        style={{ width: "100%"}}
                                        placeholder="Select Event Start Time"
                                        format={format}
                                        onChange={this.startSelected}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={24} md={24} xl={12}>
                                    <Form.Item label="Select Event End Time">
                                        <TimePicker
                                        style={{ width: "100%" }}
                                        placeholder="Select Event End Time"
                                        format={format}
                                        onChange={this.endSelected}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                    <Row justify="center">
                        <Button
                        shape="round"
                        onClick={this.submitClicked}
                        style={{
                                width: "40%",
                                backgroundColor: "#ea2c62",
                                color: "#ffffff",
                                height: "50px",
                                marginTop: "30px",
                                marginBottom: "10%"
                              }
                            }
                        >
                         Book Now
                        </Button>
                    </Row>
                </Col>
            </Row>
            <FooterIcon />
            <Footers/>
        </>
      </div>
    );
  }
}

export default EventUtility;