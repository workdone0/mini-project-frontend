import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import complaint from "../assets/complaint.png";
import { Input, DatePicker, TimePicker, Form, Select } from "antd";
import "./styles/HostelComplaint.css";
import BackNavbar from "../components/backNavbar";

const { Option } = Select;

export class HostelComplaint extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,

      buttonDisabled: true,
    };
  }

  render() {
    return (
      <>
        <BackNavbar />
        <Row>
          <Col span={1}></Col>
          <Col span={8} className="Col-1">
            <Row>
              <img src={complaint} className="complaint-image"></img>
            </Row>

            <Row>
              <Col span={2} style={{ marginLeft: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="crimson"
                  className="bi bi-telephone-forward-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Col>

              <Col>
                <p>
                  Girl's Hostel Warden :<a> 8210295678 </a>{" "}
                </p>
              </Col>
            </Row>

            <Row>
              <Col span={2} style={{ marginLeft: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="blue"
                  className="bi bi-telephone-forward-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Col>

              <p>
                Boy's Hostel Warden : <a>7930459213 </a>{" "}
              </p>
            </Row>

            <Col span={5}></Col>
          </Col>
          <Col span={2}></Col>
          <Col span={12} className="Col-2">
            <h2
              style={{
                fontSize: "35px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Hostel Complaints? Take it Easy!
            </h2>
            <Form layout="vertical" style={{ width: "100%" }}>
              <Form.Item
                name="hostel"
                label=" Hostel No."
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select your Hostel no."
                  style={{ border: "1px solid rgb(0,0,0,0.2)" }}
                >
                  <Option value="hostel1">Hostel 1 </Option>
                  <Option value="hostel2">Hostel 2</Option>
                  <Option value="hostel3">Hostel 3</Option>
                  <Option value="hostel4">Hostel 4</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name=" Room no"
                label="Room No."
                rules={[{ required: true }]}
              >
                <Input
                  onChange={this.titleChanged}
                  style={{ color: "black" }}
                  placeholder="Enter your Room no."
                />
              </Form.Item>

              <Form.Item
                name="complaint"
                label=" Complaint Type"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select your Complaint type"
                  style={{ border: "1px solid  rgb(0,0,0,0.2)" }}
                >
                  <Option value="carpentry">Carpentery </Option>
                  <Option value="Electricity">Electricity</Option>
                  <Option value="Plumbing">Plumbing</Option>
                  <Option value="Room Cleaning">Room Cleaning</Option>
                  <Option value="others">Others</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="Description"
                label="Description"
                rules={[{ required: true }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Row>
                <Col span={10}>
                  <Form.Item label="Preferred Time From">
                    <TimePicker
                      style={{ width: "100%" }}
                      placeholder=""
                      onChange={this.startSelected}
                    />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item label="Preferred Time To :">
                    <TimePicker
                      style={{ width: "100%", marginLeft: "10px" }}
                      placeholder=""
                      onChange={this.endSelected}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            <Button
              shape="round"
              onClick={this.submitClicked}
              style={
                this.state.buttonDisabled
                  ? {
                      width: "40%",
                      height: "50px",
                      marginTop: "30px",
                      marginLeft: "30%",
                    }
                  : {
                      width: "40%",
                      backgroundColor: "#ea2c62",
                      color: "#ffffff",
                      height: "50px",
                      marginTop: "30px",
                    }
              }
              loading={this.state.loading}
              disabled={this.state.buttonDisabled}
            >
              Submit
            </Button>
          </Col>
          <Col span={1}></Col>
        </Row>
      </>
    );
  }
}

export default HostelComplaint;
