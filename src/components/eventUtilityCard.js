import React, { Component } from "react";
import { Row, Col, Form, Button, InputNumber } from "antd";

class EventUtilityCard extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }
  addClicked = async () => {
    if (this.state.quantity != "") {
      await this.props.updateItems(this.props.utility._id, this.state.quantity);
    }
  };
  render() {
    return (
      <Row
        justify="center"
        style={{
          width: "98vw",
          height: "7vh",
          marginTop: "10px",
          paddingTop: "10px",
          backgroundImage: "linear-gradient(270deg,#a39593,#f2f1f2f3)",
        }}
      >
        <Col md={2} xs={0} />
        <Col md={6} xs={7}>{this.props.utility.name.toUpperCase()}</Col>

        <Col md={6} xs={4}>{this.props.utility.inStock}</Col>
        <Col md={5} xs={6}>
          <Form>
            <Form.Item>
              <InputNumber
                min={0}
                max={this.props.utility.inStock}
                defaultValue={0}
                bordered={true}
                onChange={(value) => {
                  this.setState({ quantity: value });
                }}
              />
            </Form.Item>
          </Form>
        </Col>

        <Col md={4} xs={5}>
          <Button style={{ height: "4.5vh" }} onClick={this.addClicked}>
            Add
          </Button>
        </Col>
      </Row>
    );
  }
}

export default EventUtilityCard;
