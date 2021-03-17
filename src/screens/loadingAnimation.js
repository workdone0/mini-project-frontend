import React, { Component } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../assets/animation/loading.json";
class LoadingAnimation extends Component {
  render() {
    return (
      <Player // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={false}
        src={Loading}
        style={{
          height: "300px",
          width: "300px",
          margin: "auto",
          height: "100vh",
        }}
      ></Player>
    );
  }
}

export default LoadingAnimation;
