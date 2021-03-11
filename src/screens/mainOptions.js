import React, { Component } from "react";
import FooterIcon from "../components/footerIcons";

import Navbar from "../components/navbar";
import Options from "../components/options";

class MainOptions extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Options />
        <FooterIcon />
      </div>
    );
  }
}

export default MainOptions;
