import React, { Component} from "react";
import { Row, Col, Collapse, Timeline } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import "./styles/dashboard.css";

class Dashboard extends Component {
  render() {
    const { Panel } = Collapse;

    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.`;
    return (
      <div>
        <Row>
            <Col span={24} className="dashboard-container">
                <Collapse className="site-collapse-custom-collapse" accordion bordered={false}>
                    <Panel className="site-collapse-custom-panel" header="Conference Room Booking" key="1">
                    <Timeline className="dashboard-timeline" mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        </Timeline>
                    </Panel>
                    <Panel className="site-collapse-custom-panel" header="Hospital Appointment" key="2">
                    <Timeline className="dashboard-timeline" mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        </Timeline>
                    </Panel>
                    <Panel className="site-collapse-custom-panel" header="Event Utility Booking" key="3">
                    <Timeline className="dashboard-timeline" mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        </Timeline>
                    </Panel>
                    <Panel className="site-collapse-custom-panel" header="Hostel Complaints" key="4">
                    <Timeline className="dashboard-timeline" mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        </Timeline>
                    </Panel>
                </Collapse>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;