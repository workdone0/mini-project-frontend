import React, { Component } from 'react';
import {Row , Col} from "antd";
import complaint from "../assets/complaint.png";


export class HostelComplaint extends Component {
    render() {
        return (
            <Row>

                <Col>
                        <Row>
                            <img src={complaint}></img>
                        </Row>
                        
                         <Row>

                        </Row>
                
                </Col>
                
                <Col>
                
                </Col>
            </Row>
            
        )
    }
}

export default HostelComplaint;
