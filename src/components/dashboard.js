import React, { Component } from "react";
import { Row, Col,Card } from "antd";
import "./styles/dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row >
                    <Col span={6}>
                        <div className="site-card-border-less-wrapper">
                            <Card title="Services Requested"
                              className = "dashboard-cards" 
                              bordered={false}
                              style={{borderRadius:"15px",
                              boxShadow:"5px 5px 1px 3px rgb(84,190,231,0.7)",
                              backgroundColor:"rgb(84,190,231"}}>
                                  <Row>
                                      <Col span={12}>
                              <h1> 75 </h1>
                                </Col>
                                <Col span={10}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="white" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg>
                                </Col>
                                </Row>
                               
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="site-card-border-less-wrapper">
                            <Card  className = "dashboard-cards"
                             title="Pending"
                              bordered={false} 
                              style={{ borderRadius:"15px",
                               boxShadow:"5px 5px 1px 3px rgb(241,163,19,0.7)",
                               backgroundColor:"rgb(241,163,19)"}}>
                                <Row>
                                      <Col span={12}>
                              <h1> 20 </h1>
                                </Col>
                                <Col span={10}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="white" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
                                </Col>
                                </Row>
                               
                               
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="site-card-border-less-wrapper">
                            <Card title="Approved" 
                            bordered={false} 
                             className = "dashboard-cards" 
                             style={{ borderRadius:"15px",
                              boxShadow:"5px 5px 1px 3px rgb(46,139,87,0.7)",
                              backgroundColor:"rgb(46,139,87)"}}>
                                <Row>
                                      <Col span={12}>
                              <h1> 35</h1>
                                </Col>
                                <Col span={10}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="white" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>
                                </Col>
                                </Row>
                               
                               
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="site-card-border-less-wrapper">
                            <Card title="Declined"  
                              className="dashboard-cards" 
                              bordered={false} 
                              style={{ borderRadius:"15px",
                               boxShadow:"5px 5px 1px 3px rgb(167,63,63,0.7)",
                               backgroundColor:"rgb(167,63,63)"}}>
                               <Row>
                                      <Col span={12}>
                              <h1> 20</h1>
                                </Col>
                                <Col span={10}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="white" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
                                </Col>
                                </Row>
                               
                               
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;