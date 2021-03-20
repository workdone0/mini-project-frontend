import React, { Component } from 'react';
import { Row,Col, Button } from "antd";
import BackNavbar from "../components/backNavbar";
import patient from "../assets/patient.png";
import "../components/styles/HospitalForm.css";
import ConferenceBookingForm from "./conferenceBookingForm"; 

export class HospitalForm extends Component {
    render() {
        return (
            <>
            <BackNavbar/>
            <Row>
                <Col span={2}></Col>
               <Col span={9}>

                   <Row >
                     <h1 className="content-left">Health and Medical </h1>  
                   </Row>
                   <Row>
                   <h1  className="content-left-2"> Servies for you!!</h1>
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
            <Row>
                <ConferenceBookingForm/>
            </Row>
            </>
        )
    }
}

export default HospitalForm
