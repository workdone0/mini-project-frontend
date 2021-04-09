import React, { Component } from "react";
import { Row, Col, Button} from "antd";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";

import BackNavbar from "../components/backNavbar";
import EventUtilityCard from "../components/eventUtilityCard";


class EventUtilityList extends Component {
 

  render() {
    const utilities = [
        "mic",
        "speaker",
       
      ];
    const qty = [
        10,
        10,
     
      ];
  
    return (
      <div >
        <BackNavbar />
        <Row justify="center" >
          <Col span={24}>
            <h1  style={{ textAlign: "center", marginBottom: "20px" ,marginTop:"20px"}}>
              Event Utility List
            </h1>
          </Col>
         </Row>
        <Row justify="center"  style={{backgroundImage: "linear-gradient(270deg, #e44690, #f07f3e)",margin:"0px 20px 0px 20px",padding:"3px",fontStyle:"italic"}}>
                <Col xl={2} lg={2} md={2} sm={0} xs={0}/>
                <Col span={6} ><h2>Item Name</h2></Col>
                <Col span={6}><h2>Availability</h2></Col>
                <Col span={6}><h2>Requirement</h2></Col>
                <Col span={4}><h2>Action</h2></Col>
               
        </Row>
        <Row justify="center">
          {utilities.map((utility, index) => {
            return (
                <EventUtilityCard
                  utility={utility}
                  qty={qty[index]}
                  
                 
                />
            );
          })}
        </Row>
        <Row justify="center" style={{ minHeight:"20vh",}}>
            <Button
             type="primary"
             size="large"
             style={{
               backgroundImage: "linear-gradient(130deg, #e62e53, crimson)",
               borderRadius: "10px",
               border: "none",
               width: "200px",
               height: "50px",
               fontWeight:"500",
               marginTop:"40px",
              
             }}>Go to Cart</Button>
        </Row>
        <FooterIcon />
        <Footers />
      </div>
    );
  }
}

export default EventUtilityList;