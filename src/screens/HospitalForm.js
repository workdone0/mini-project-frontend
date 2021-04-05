import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import BackNavbar from "../components/backNavbar";
import patient from "../assets/patient.png";
import "../components/styles/HospitalForm.css";
import patientForm from "../assets/patientForm.png";
import { Input, DatePicker, TimePicker, Form, Select } from "antd";
import Carousel from "react-elastic-carousel";

import HospitalCard from "../components/hospitalCard";

import "../components/styles/about.css";

import Ashish from "../assets/Ashish.jpg";
import complaint from "../assets/complaint.png";
import FooterIcon from "../components/footerIcons";
import Footer from "../components/footer";
import Typewriter from "typewriter-effect";

const { Option } = Select;

export class HospitalForm extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,

      buttonDisabled: true,
    };
  }
  render() {
    const names = ["Dr.Ashish Sharma", "Dr.Anita Pateshwari"];
    const description = ["MBBS, DFM ,CCH", "MBBS"];
    const phone = ["7908347651", "9002666256"];
    const shift = ["4pm-9pm, 9pm-9am(On Call)", "9am-4pm"];
    const images = [Ashish, complaint];
    const breakPoints = [
      {
        width: 576,
        itemsToShow: 1,
        pagination: false,
        showArrows: true,
        enableAutoPlay: true,
        autoPlaySpeed: 300,
      },
      {
        width: 768,
        itemsToShow: 2,
        pagination: false,
        showArrows: true,
        enableAutoPlay: true,
        autoPlaySpeed: 300,
      },
      { width: 992, itemsToShow: 3, pagination: false, showArrows: false },
      { width: 1200, itemsToShow: 3, pagination: false, showArrows: false },
    ];

    return (
      <>
        <BackNavbar />
        <Row style={{ backgroundColor: "black", height: "100vh" }}>
          <Col xs={4} lg={2}></Col>
          <Col xs={16} lg={9}>
            <Row>
              <h1 className="content-left hospital-heading">Health and Medical </h1>
            </Row>
            <Row>
              <h1 className="content-left-2 hospital-heading"> Services for you!!</h1>
            </Row>
            <Row className="hospital-para-container">
            <Col xs={0} sm={0} md={0} xl={24}>
            <div className="typewriter-text">
             
              <span className="hospital-typewriter">Providing</span>&nbsp;
              <span>
                <Typewriter
                  options={{
                    strings: ["Quality Care...", "Efficient Treatment...", "Best Medical Support..."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              
            </div>
            </Col>
          </Row>

            <Row>
              <Button
                className="hospital-button"
                type="primary"
                size="large"
                style={{
                  backgroundImage: "linear-gradient(130deg, #e62e53, crimson)",
                  borderRadius: "10px",
                  border: "none",
                  width: "200px",
                  height: "50px",
                  fontWeight:"500",
                }}
              >
                Make an Appointment
              </Button>
            </Row>
          </Col>
          <Col xs={0} lg={13}>
            <Row justify="center"><img className="patient-image" src={patient} alt="image"></img></Row>
          </Col>
          <Col xs={4} lg={0}></Col>
        </Row>

        <Row style={{ height: "100vh" }}>
          <Col lg={0} xs={1}></Col>
          <Col lg={9} xs={0}>
            <img src={patientForm} className="patient-form-image"></img>
          </Col>
          <Col lg={15} xs={22}>
            <h1
              className="hospital-heading"
              style={{
                marginTop: "12%",
                marginBottom: "5%",
                fontSize: "40px",
                fontWeight: "500",
              }}
            >
              Schedule your appointment with Doctor!
            </h1>
            <Row>
              <div className="hospital-form">
              <Form layout="vertical" style={{ width: "100%" }}>
                <Form.Item
                  name="date"
                  label="Select Date"
                  rules={[{ required: true }]}
                >
                  <DatePicker
                    onChange={this.dateSelected}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <Form.Item
                  name="slot"
                  label=" Select Slot"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    style={{ width: "100%", border: "1px solid gray" }}
                  >
                    <Option value="Morning">Morning Slot </Option>
                    <Option value="Noon">Noon Slot</Option>
                    <Option value="Evening">Evening Slot</Option>
                  </Select>
                </Form.Item>
              </Form>
              </div>

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
                        backgroundColor: "crimson",
                        color: "#ffffff",
                        height: "50px",
                        marginTop: "30px",
                      }
                }
                loading={this.state.loading}
                disabled={this.state.buttonDisabled}
              >
                Book Now
              </Button>
            </Row>
          </Col>
          <Col lg={0} xs={1}></Col>
        </Row>

        <div
          className="main-container-about"
          id="home-about-us"
          style={{ backgroundColor: "black", height: "95vh" }}
        >
          <Row justify="center">
            <h1
              className="about-heading"
              style={{ margin: "50px 0px", color: "white" }}
            >
              Know Our Doctors
            </h1>
          </Row>
          <Row style={{ width: "100%" }}>
            <Carousel breakPoints={breakPoints}>
              {names.map((name, index) => {
                return (
                  <Col key={index} span={16} style={{ display: "flex" }}>
                    <HospitalCard
                      images={images[index]}
                      name={name}
                      description={description[index]}
                      phone={phone[index]}
                      shift={shift[index]}
                    />
                  </Col>
                );
              })}
            </Carousel>
          </Row>

          <FooterIcon />
          <Footer />
        </div>
      </>
    );
  }
}

export default HospitalForm;
