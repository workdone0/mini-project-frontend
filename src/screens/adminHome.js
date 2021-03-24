import React, { Component } from "react";
import AdminHomeButton from "../components/adminHomeButton";
import AdminNavbar from "../components/adminNavbar";
import Footers from "../components/footer";
import FooterIcon from "../components/footerIcons";


class AdminHome extends Component {
  render() {
    return (
      <div>
          <AdminNavbar/>
          <AdminHomeButton/>
          <FooterIcon/>
          <Footers/>
      </div>
    );
  }
}

export default AdminHome;
