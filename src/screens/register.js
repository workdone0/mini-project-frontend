import React from "react";
import { Row, Col, Input, Button, Select} from "antd";
import { Link } from "react-router-dom";
import lockImg from "../assets/lock.png";
import { registerApi } from "../api/register";
import "./styles/register.css";
import signup from "../assets/signup.png";
import reactDom from "react-dom";

const { Option } = Select;

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      clg_id: "",
      type: "",
      email: "",
      password: "",
      loading: false,
    };
  }
  onRegisterPressed = async () => {
    this.setState({
      loading: true,
    });
    const response = await registerApi(
      this.state.name,
      this.state.phone,
      this.state.email,
      this.state.password,
      this.state.clg_id,
      this.state.type
    );
    if (response.status == 201) {
      console.log("User created Successfully");
    } else {
      console.log("Registration Failed");
    }
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <Row className="register-main-container">
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={signup} style={{ height: "70%", width: "100%" ,opacity:0.7}} />
        </Col>
        <Col span={12} className="register-form-column">
        <div className="register-container">
          <h2 className="brand-name-register-page">
            Take<span>Easy</span>
          </h2>
          <Input
            onChange={(event) => this.setState({ name: event.target.value })}
            className="email-input-form"
            placeholder="Name"
          />
          <Input
            onChange={(event) => this.setState({ phone: event.target.value })}
            className="email-input-form"
            placeholder="Contact No"
          />
          <Input
            onChange={(event) => this.setState({ email: event.target.value })}
            className="email-input-form"
            placeholder="Email Id"
          />
          <Input
            onChange={(event) => this.setState({ clg_id: event.target.value })}
            className="email-input-form"
            placeholder=" College Id"
          />
         
          <Select
            onChange={(event) => this.setState({ type: event.target.value })}
            className="account-input-form"  placeholder=" Account Type">
          
           <Option value="professors">Professors </Option>
            <Option value="students">Students</Option>
             <Option value="non teaching staffs">Non Teaching Staffs</Option>
            </Select>
            
          <Input.Password
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            className="password-input-form"
            placeholder="Password"
          />
          <Button 
            onClick={this.onRegisterPressed}
            className="register-button-register-page"
            type="primary"
            loading={this.state.loading}
          >
            Register
          </Button>
          <p style={{color:"white", marginLeft:"24%" ,paddingTop:"2px"}}> Already a member? <Link to="/login">Sign In</Link></p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Register;

