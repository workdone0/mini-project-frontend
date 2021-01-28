import React from "react";

import NavbarPage from "../components/navbar";
import ButtonPage from "../components/button";
import BackgroundImagePage from "../components/background";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class LandingPage extends React.Component {
  render() {
    return (
      
      <div >
       
       <div ><NavbarPage/> <BackgroundImagePage/> </div>
     
        
      
      </div>
      
    );
  }
}

export default LandingPage;
