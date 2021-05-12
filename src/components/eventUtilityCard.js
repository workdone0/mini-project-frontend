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
        <Col span={2} />
        <Col span={6}>{this.props.utility.name.toUpperCase()}</Col>

        <Col span={6}>{this.props.utility.inStock}</Col>
        <Col span={5}>
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

        <Col span={4}>
          <Button style={{ height: "4.5vh" }} onClick={this.addClicked}>
            Add
          </Button>
        </Col>
      </Row>
    );
  }
}

export default EventUtilityCard;
