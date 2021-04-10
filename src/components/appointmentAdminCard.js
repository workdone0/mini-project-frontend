import React from "react";
import { Row, Col, Modal, Button, Input } from "antd";
import moment from "moment";
import { EditTwoTone, EyeTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

import {
  confirmAppointmentApi,
  editAppointmentApi,
} from "../api/hospitalBooking";
class AppointmentAdminCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModal: false,
      editModal: false,
      prescription: this.props.appointment.description,
    };
  }
  confirmAppointment = async () => {
    const response = await confirmAppointmentApi(this.props.appointment._id);
    if (response.status == 200) {
      await this.props.updateAppointments();
    }
  };
  editAppointment = async () => {
    const response = await editAppointmentApi(
      this.props.appointment._id,
      this.state.prescription
    );
    if (response.status == 200) {
      await this.props.updateAppointments();
      this.setState({
        editModal: false,
      });
    }
  };
  render() {
    return (
      <>
        <Row style={{ backgroundColor: "#F8F8F8", fontWeight: "500" }}>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>{this.props.appointment.userId.name}</p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>
              {moment(this.props.appointment.time * 60 * 1000).format(
                "DD-MM-YYYY"
              )}
            </p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <p>
              {this.props.appointment.status == 0 ? "Not Visited" : "Visited"}
            </p>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ textAlign: "center" }}
          >
            <EditTwoTone
              style={{ margin: "2%" }}
              onClick={() => this.setState({ editModal: true })}
            />
            <EyeTwoTone
              onClick={() => this.setState({ viewModal: true })}
              style={{ margin: "2%" }}
              twoToneColor="#eb2f96"
            />
            {this.props.appointment.status == 0 ? (
              <CheckCircleTwoTone
                twoToneColor="#52c41a"
                style={{ margin: "2%" }}
                onClick={this.confirmAppointment}
              />
            ) : null}
          </Col>
        </Row>
        <Modal
          title="Prescription"
          centered
          closable={false}
          visible={this.state.viewModal}
          footer={[
            <Button
              key="close"
              onClick={() => {
                this.setState({ viewModal: false });
              }}
            >
              Close
            </Button>,
          ]}
        >
          <p>{this.state.prescription}</p>
        </Modal>

        <Modal
          title="Edit Prescription"
          centered
          closable={false}
          visible={this.state.editModal}
          footer={[
            <Button
              key="close"
              onClick={() => {
                this.setState({ editModal: false });
              }}
            >
              Close
            </Button>,
            <Button key="edit" onClick={this.editAppointment}>
              Edit
            </Button>,
          ]}
        >
          <Input.TextArea
            value={this.state.prescription}
            onChange={(e) => this.setState({ prescription: e.target.value })}
          ></Input.TextArea>
        </Modal>
      </>
    );
  }
}

export default AppointmentAdminCard;
