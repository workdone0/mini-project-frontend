import React, { Component } from "react";

import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import NoticeBoard from "../components/noticeBoard";
import Service from "../components/service";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <NoticeBoard />
        <Service />
      </div>
    );
  }
}

export default Home;
