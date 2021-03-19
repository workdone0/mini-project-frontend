import React, { Component } from 'react'
import Sidenav from "../components/sidenav";
import BackNavbar from "../components/backNavbar";

export class Profile extends Component {
    render() {
        return (
            <div>
                <BackNavbar/>
                <Sidenav/>
            </div>
        )
    }
}

export default Profile;
