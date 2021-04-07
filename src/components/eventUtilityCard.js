import React, { Component } from "react";
import { Row, Col, Form, Button, InputNumber} from "antd";

class EventUtilityCard extends Component {
  render() {
    return (
      <>
          <Col span={6}>{this.props.utility}</Col>
          <Col span={6}>{this.props.qty}</Col>
          <Col span={6}>
              <Form>
                  <Form.Item>
                    <InputNumber min={0} max={this.props.qty} defaultValue={0} bordered={false} />
                  </Form.Item>
              </Form>
          </Col>
          <Col span={6}><Button>Add</Button></Col>
      </>
    );
  }
}

export default EventUtilityCard;