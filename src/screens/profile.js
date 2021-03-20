import React, { Component } from 'react'
import Sidenav from "../components/sidenav";
import BackNavbar from "../components/backNavbar";
import {withRouter} from "react-router-dom";

export class Profile extends Component {
    token = localStorage.getItem('token');
    render() {
        const isDashboard = this.props.location.state.isDashboard;
        const isProfileForm = this.props.location.state.isProfileForm;
        return (
            <div>
                <BackNavbar/>
                <Sidenav isDashboard={isDashboard} isProfileForm={isProfileForm} />
            </div>
        )
    }
}

export default withRouter(Profile);
