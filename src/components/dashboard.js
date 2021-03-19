import React, { Component} from "react";
import { Row, Col, Collapse, Timeline } from "antd";

class Dashboard extends Component {
  render() {
    const { Panel } = Collapse;

    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.`;
    return (
      <div>
        <Row>
            <Col span={15}>
                <Collapse accordion>
                    <Panel header="This is panel header 1" key="1">
                    <Timeline>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                    <Timeline>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                    <Timeline>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
                    </Panel>
                    <Panel header="This is panel header 4" key="4">
                    <Timeline>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
                    </Panel>
                </Collapse>
            </Col>
            <Col span={9}></Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;