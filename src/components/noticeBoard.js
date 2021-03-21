import React, { Component } from "react";
import { Row, Col } from "antd";
import NoticeBoardCard from "./noticeBoardcard";

class NoticeBoard extends Component {
  render() {
    const titles = [
      "Innovision Club Meeting",
      "Udaan Club Meeting",
      "DSA Workshop",
    ];
    const venue = [
      "A-105",
      "A-105",
      "A-105",
    ];
    const time = [
      "5pm-6pm",
      "6pm-7pm",
      "8pm-9pm",
    ];
    return (
      <div id="home-noticeboard">
        <Row justify="center"><h1 style={{margin: "20px 0px"}}>Notice Board</h1></Row>
        <Row>
          {titles.map((title, index) => {
              return (
              <Col span={24} key={index}>
                <NoticeBoardCard
                  title={title}
                  venue={venue[index]}
                  time={time[index]}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default NoticeBoard;
