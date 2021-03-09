import React, { Component } from "react";

import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import NoticeBoard from "../components/noticeBoard";
import Service from "../components/service";
import Footers  from "../components/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <NoticeBoard />
        <Service />
        <Footers/>
      </div>
    );
  }
}

export default Home;
