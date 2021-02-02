import React from "react";

import NavbarPage from "../components/navbar";
import ButtonPage from "../components/button";
import BackgroundImagePage from "../components/background";


class LandingPage extends React.Component {
  render() {
    return (
      
      <div class="Container-fluid">
        <div class="col-md">
        <NavbarPage/>
        </div>
        <div class='col'>
        <BackgroundImagePage/>
       </div>
       
    
        
             
             
          
       
</div>
      
    );
  }
}

export default LandingPage;
