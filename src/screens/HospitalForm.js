import React, { Component } from 'react';
import { Row, Col, Button } from "antd";
import BackNavbar from "../components/backNavbar";
import patient from "../assets/patient.png";
import "../components/styles/HospitalForm.css";
import patientForm from "../assets/patientForm.png";
import { Input, DatePicker, TimePicker, Form , Select,} from "antd";
import Carousel from "react-elastic-carousel";

import AboutCard from "../components/aboutCard";

import "../components/styles/about.css";

import conference from "../assets/conference.png";
import complaint from "../assets/complaint.png";
import FooterIcon from "../components/footerIcons";
import Footer from "../components/footer";

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
        const description = [
          "Backend Developer,Third Year ,Computer Science and Engineering Student.",
          "Frontend Developer,Third Year ,Computer Science and Engineering Student.",
          
        ];
        const images = [conference, complaint];
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
                <Row>
                    <Col span={2}></Col>
                    <Col span={9}>

                        <Row >
                            <h1 className="content-left">Health and Medical </h1>
                        </Row>
                        <Row>
                            <h1 className="content-left-2"> Servies for you!!</h1>
                        </Row>
                        <Row><br></br></Row>
                        <Row>
                            <p>We at SMIT promise to provide the best healthcare servies to it's students and faculties.</p>
                            <p>Make your appointments online and get the best servies</p>
                        </Row>

                        <Row>
                            <Button
                                type="primary"
                                size="large"
                                style={{
                                    backgroundImage: "linear-gradient(130deg, #f54295, #f58442)",
                                    borderColor: "white",
                                }}>Make an Appointment.</Button>
                        </Row>
                    </Col>
                    <Col span={13}>
                        <img className="patient-image" src={patient} alt="image"></img>
                    </Col>
                </Row>
                <hr></hr>
                <Row style={{ height: "100vh" }}  >
                    <Col span={9} >
                        <img src={patientForm} className="patient-form-image"></img>
                    </Col>
                    <Col span={15}>
                        <h1 style={{ margin: "12%" }}>Schedule your appointment with Doctor!</h1>
                        <Row >
                        <Form layout="horizontal" style={{ width: "100%" }}>
              <          Form.Item label="Select Date"  rules={[{ required: true }]}>
                        <DatePicker
                          onChange={this.dateSelected}
                          style={{ width: "80%" }}
                         
                         />
                      </Form.Item>
                        <Form.Item name="slot" label=" Select Slot"
                        rules={[{ required: true }]}>
                        <Select
                        placeholder="Select a option and change input text above"
                        style={{ width: "80%" }}
                    
                            >
                        <Option value="Morning">Morning Slot </Option>
                        <Option value="Noon">Noon Slot</Option>
                        <Option value="Evening">Evening Slot</Option>
                      
                    </Select>
                    
                    </Form.Item>
                    </Form>

                    <Button
              shape="round"
              onClick={this.submitClicked}
              style={
                this.state.buttonDisabled
                  ? { width: "40%", height: "50px", marginTop: "30px", marginLeft:"30%" }
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
              Book Now
            </Button>
                                </Row>
                            </Col> 
                    </Row>
           

            <div className="main-container-about" id="home-about-us" style={{backgroundColor:"RGB(134,254,254,0.1"}}>
       
        <Row justify="center">
          <h1 className="about-heading" style={{ margin: "50px 0px",color:"black" }}>
            Know Our Doctors
          </h1>
        </Row>
        <Row style={{ width: "100%" }} >
          <Carousel breakPoints={breakPoints}>
            {names.map((name, index) => {
              return (
                <Col
                  key={index}
                  span={16}
                  style={{ display: "flex" }}
                >
                  <AboutCard
                    images={images[index]}
                    name={name}
                    description={description[index]}
                  />
                </Col>
              );
            })}
          </Carousel>
        </Row>
        <FooterIcon/>
        <Footer/>
      </div>  
        </>
            
        )
    }
}

export default HospitalForm
