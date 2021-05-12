import React from "react";
import { Row, Col, Modal, Button, Input } from "antd";
import moment from "moment";
import { EyeTwoTone } from "@ant-design/icons";

class UtilityAdminCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModal: false,
    };
  }
  render() {
    return (
      <>
        <Row style={{ backgroundColor: "#F8F8F8", fontWeight: "500" }}>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>{this.props.order.userId.name}</p>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>
              {moment(this.props.order.from * 60 * 1000).format("DD-MM-YYYY")}
            </p>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>{moment(this.props.order.from * 60 * 1000).format("h:mm a")}</p>
          </Col>
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{ textAlign: "center" }}
          >
            <p>{moment(this.props.order.to * 60 * 1000).format("h:mm a")}</p>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <EyeTwoTone
              onClick={() => this.setState({ viewModal: true })}
              style={{ margin: "2%" }}
              twoToneColor="#eb2f96"
            />
          </Col>
        </Row>
        <Modal
          title="Items"
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
          {this.props.order.items.map((item) => {
            return (
              <p>
                {item.item.name}-{item.quantity}
              </p>
            );
          })}
        </Modal>
      </>
    );
  }
}

export default UtilityAdminCard;
