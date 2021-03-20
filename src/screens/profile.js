import React, { Component } from 'react'
import Sidenav from "../components/sidenav";
import BackNavbar from "../components/backNavbar";
import {withRouter} from "react-router-dom";

export class Profile extends Component {
    token = localStorage.getItem('token');
    componentDidMount(){
        console.log(this.props.location.state);
    }
    render() {
        return (
            <div>
                <BackNavbar/>
                <Sidenav/>
            </div>
        )
    }
}

export default withRouter(Profile);
