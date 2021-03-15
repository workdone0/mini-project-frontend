import React, { Component } from "react";

import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import NoticeBoard from "../components/noticeBoard";
import Service from "../components/service";
import Contact from "../components/contact";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import About from "../components/about";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <NoticeBoard />
        <Service />
        <About />
        <Contact />
        <FooterIcon />
        <Footers />
      </div>
    );
  }
}

export default Home;
