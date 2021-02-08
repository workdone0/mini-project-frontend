import React from "react";
import Button from "react-bootstrap/Button";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      i: 0,
    };
  }

  add = () => {
    this.setState({
      i: this.state.i + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.i}</h1>
        <Button variant="dark" size="lg" onClick={this.add} block>
          Block level button
        </Button>
      </div>
    );
  }
}

export default Navbar;
