import React, { Component } from "react";

import Navbar from "../components/navbar";
import Options from "../components/Options";

class MainOptions extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Options />
      </div>
    );
  }
}

export default MainOptions;
