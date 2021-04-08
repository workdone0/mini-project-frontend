import React, { Component } from "react";
import { Row, Col, Form, Button, InputNumber} from "antd";

class EventUtilityCard extends Component {
  render() {
    return (
     
     <Row  justify="center" style={{width:"98vw", height:"7vh",marginTop:"10px",paddingTop:"10px", backgroundImage:"linear-gradient(270deg,#a39593,#f2f1f2f3)"}}>
        <Col span={2}/>
          <Col  span={6} >{this.props.utility.toUpperCase()}</Col>
       
          <Col span={6}>{this.props.qty}</Col>
          <Col span={5}>
              <Form>
                  <Form.Item>
                    <InputNumber min={0} max={this.props.qty} defaultValue={0} bordered={false} />
                  </Form.Item>
              </Form>
          </Col>
          
          
          <Col span={4}><Button>Add</Button></Col>
          </Row>
          
      
    );
  }
}

export default EventUtilityCard;