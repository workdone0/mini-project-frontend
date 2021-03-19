import React, { Component } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import "./styles/profileForm.css";
import ayushi from "../assets/ayushi.jpg";
import { connect } from "react-redux";
import { Row, Col} from "antd";

export class ProfileForm extends Component {
   
    render() {
      console.log(this.props.currentUser);
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          
          /* eslint-disable no-template-curly-in-string */
          const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not a valid email!',
              number: '${label} is not a valid number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
          /* eslint-enable no-template-curly-in-string */
          
          
        return (
        
          <div className="profile-form-container">
             
         <img src={ayushi} className="form-image" alt="image2"></img>

            <Form {...layout} name="nest-messages" validateMessages={validateMessages} className="profile-form">
              <Form.Item name={['user', 'name']} label="Name"  rules={[{ required: true }]}>
                <Input  placeholder={this.props.currentUser.name} disabled={true} />
              </Form.Item>
              <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input placeholder={this.props.currentUser.email} disabled={true} />
              </Form.Item>
            
              <Form.Item name={['user', 'website']} label="Registration No." >
                <Input placeholder={this.props.currentUser.clg_id}  disabled={true} />
              </Form.Item>
          
              <Form.Item name="phone"  label="Phone Number"  rules={[{ type:'tel', required: true }]}  >
             <Input  placeholder={this.props.currentUser.phone} />
              </Form.Item>

            
      <Form.Item
        name="password"
        label=" Current Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Update Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Row justify="center">
                <Button type="danger" htmlType="submit">
                  Submit
                </Button>
                </Row>
              </Form.Item>
            </Form>
            </div>
          );
        };
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});


export default connect(mapStateToProps, null) (ProfileForm);
