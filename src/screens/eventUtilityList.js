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
        "speakers",
        "chairs",
      ];
    const qty = [
        10,
        5,
        40,
      ];
    return (
      <div>
        <BackNavbar />
        <Row justify="center"><h1>Event Utility List</h1></Row>
        <Row justify="center">
                <Col span={6}><h2>Item Name</h2></Col>
                <Col span={6}><h2>Availability</h2></Col>
                <Col span={6}><h2>Requirement</h2></Col>
                <Col span={6}><h2>Action</h2></Col>
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
        <Row justify="center">
            <Button>Go to Cart</Button>
        </Row>
        <FooterIcon />
        <Footers />
      </div>
    );
  }
}

export default EventUtilityList;