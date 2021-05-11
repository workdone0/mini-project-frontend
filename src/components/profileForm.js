import React, { Component } from "react";
import { Form, Input, Button, notification } from "antd";
import "./styles/profileForm.css";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import { updateProfile } from "../api/register";

export class ProfileForm extends Component {
  constructor() {
    super();
    this.state = {
      cPwd: "",
      uPwd: "",
    };
  }
  onSubmit = async () => {
    const response = await updateProfile(
      this.props.currentUser.email,
      this.state.uPwd,
      this.state.cPwd
    );
    if (response.status == 200) {
      notification.open({
        message: "Successful",
        description: "We have successfully updated your current password.",
      });
    } else {
      notification.open({
        message: "Unsuccessful",
        description: "Something went wrong. Please try again later",
      });
    }
  };
  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
      },
      number: {
        range: "${label} must be between ${min} and ${max}",
      },
    };
    /* eslint-enable no-template-curly-in-string */

    return (
      <div className="profile-form-container">
        <Row>
          <Col xs={0} md={24} style={{ textAlign: "center" }}>
            <img
              src={`https://avatars.dicebear.com/api/bottts/${this.props.currentUser.name}.svg`}
              className="form-image"
              alt="image2"
            ></img>
          </Col>
        </Row>

        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
          className="profile-form"
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input placeholder={this.props.currentUser.name} disabled={true} />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input placeholder={this.props.currentUser.email} disabled={true} />
          </Form.Item>

          <Form.Item name={["user", "website"]} label="Registration No.">
            <Input
              placeholder={this.props.currentUser.clg_id}
              disabled={true}
            />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input placeholder={this.props.currentUser.phone} />
          </Form.Item>

          <Form.Item name="password" label=" Current Password">
            <Input.Password
              onChange={(event) => {
                this.setState({ cPwd: event.target.value });
              }}
            />
          </Form.Item>

          <Form.Item name="confirm" label="Update Password">
            <Input.Password
              onChange={(event) => {
                this.setState({ uPwd: event.target.value });
              }}
            />
          </Form.Item>
        </Form>
        <Row justify="center">
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              type="danger"
              htmlType="submit"
              className="profileform-button"
              onClick={this.onSubmit}
              disabled={
                this.state.cPwd != "" && this.state.uPwd != "" ? false : true
              }
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(ProfileForm);
