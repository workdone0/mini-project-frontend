import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import complaint from "../assets/complaint.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input, TimePicker, Form, Select } from "antd";
import "./styles/HostelComplaint.css";
import BackNavbar from "../components/backNavbar";
import { complaintBookingApi } from "../api/complaint";
import Success from "./success";
const { Option } = Select;

export class HostelComplaint extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      hostelNo: "",
      roomNo: "",
      type: "",
      description: "",
      preferredTimeTo: "",
      preferredTimeFrom: "",
      buttonDisabled: false,
      submittedSuccessfully: false,
    };
  }

  endSelected = async (time) => {
    const d = time._d;
    const endTime = new Date(d);
    this.setState({
      preferredTimeTo: Math.floor(endTime / 1000 / 60),
    });
  };

  startSelected = async (time) => {
    const d = time._d;
    const startTime = new Date(d);
    this.setState({
      preferredTimeFrom: Math.floor(startTime / 1000 / 60),
    });
  };

  submitClicked = async () => {
    this.setState({
      loading: true,
    });
    const response = await complaintBookingApi(
      this.props.currentUser._id,
      this.state.type,
      this.state.roomNo,
      this.state.hostelNo,
      this.state.description,
      this.state.preferredTimeFrom,
      this.state.preferredTimeTo
    );
    if (response.status == 201) {
      this.setState({
        submittedSuccessfully: true,
      });
    }
    this.setState({
      loading: false,
    });
    console.log(response);
  };

  render() {
    const format = "HH:mm";
    return (
      <>
        <BackNavbar />
        <Row justify="center">
          <Col xs={1} sm={1} lg={1} md={0} xl={1}></Col>
          <Col xs={0} sm={0} lg={8} md={0} xl={8} className="Col-1">
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
          <Col xs={22} sm={22} lg={12} md={14} xl={12} className="Col-2">
            {this.state.submittedSuccessfully ? (
              <Success text="Complaint booked successfully" />
            ) : (
              <>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Hostel Complaints? Take it Easy!
                </h2>
                <Form
                  layout="vertical"
                  className="hostel-complaint-form"
                  style={{ width: "100%" }}
                >
                  <Form.Item name="hostel" label=" Hostel No.">
                    <Select
                      placeholder="Select your Hostel no."
                      style={{ border: "1px solid rgb(0,0,0,0.2)" }}
                      onChange={(value) => {
                        this.setState({ hostelNo: value });
                      }}
                    >
                      <Option value="Hostel 1">Hostel 1 </Option>
                      <Option value="Hostel 2">Hostel 2</Option>
                      <Option value="Hostel 3">Hostel 3</Option>
                      <Option value="Hostel 4">Hostel 4</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name=" Room no" label="Room No.">
                    <Input
                      onChange={(event) => {
                        this.setState({ roomNo: event.target.value });
                      }}
                      style={{ color: "black" }}
                      placeholder="Enter your Room no."
                    />
                  </Form.Item>

                  <Form.Item name="complaint" label=" Complaint Type">
                    <Select
                      placeholder="Select your Complaint type"
                      style={{ border: "1px solid  rgb(0,0,0,0.2)" }}
                      onChange={(value) => {
                        this.setState({ type: value });
                      }}
                    >
                      <Option value="Carpentry">Carpentery </Option>
                      <Option value="Electricity">Electricity</Option>
                      <Option value="Plumbing">Plumbing</Option>
                      <Option value="Room Cleaning">Room Cleaning</Option>
                      <Option value="others">Others</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item name="Description" label="Description">
                    <Input.TextArea
                      onChange={(event) => {
                        this.setState({
                          description: event.target.value,
                        });
                      }}
                    />
                  </Form.Item>

                  <Row>
                    <Col xs={24} sm={24} lg={12} md={12} xl={12}>
                      <Form.Item label="Preferred Time From">
                        <TimePicker
                          style={{ width: "100%" }}
                          onChange={this.startSelected}
                          format={format}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} lg={12} md={12} xl={12}>
                      <Form.Item label="Preferred Time To :">
                        <TimePicker
                          style={{ width: "100%" }}
                          onChange={this.endSelected}
                          format={format}
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
                          marginTop: "20px",
                          marginLeft: "30%",
                          marginBottom: "15px",
                        }
                      : {
                          width: "40%",
                          backgroundColor: "#ea2c62",
                          color: "#ffffff",
                          height: "50px",
                          marginTop: "20px",
                          marginBottom: "15px",
                        }
                  }
                  loading={this.state.loading}
                  disabled={this.state.buttonDisabled}
                >
                  Submit
                </Button>
              </>
            )}
          </Col>

          <Col span={1}></Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(HostelComplaint));
