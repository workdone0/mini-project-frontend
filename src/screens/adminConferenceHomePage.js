
import React, { Component } from "react";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";
import AdminConferenceOptions from "../components/adminConferenceOptions";
import AdminNavbar from "../components/adminNavbar";

class AdminConferenceHomePage extends Component {
  render() {
    return (
        <>
        <AdminNavbar/>
        <AdminConferenceOptions />
        <FooterIcon />
        <Footers />
      </>
    );
  }
}

export default AdminConferenceHomePage;
