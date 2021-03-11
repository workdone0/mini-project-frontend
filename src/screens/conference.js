import React, { Component } from "react";

import Navbar from "../components/navbar";
import ConferenceOptions from "../components/conferenceOptions";
import Footers  from "../components/footer";
import FooterIcon from "../components/footerIcons";

class Conference extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ConferenceOptions/>
        <FooterIcon />
        <Footers/>
      </div>
    );
  }
}

export default Conference;
