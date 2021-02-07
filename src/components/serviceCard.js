import React, { Component } from "react";

export default class ServiceCard extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: `${this.props.color}` }}>{this.props.title}</h1>
      </div>
    );
  }
}
