import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn   gradient="peach" size="lg"   style={{paddingLeft:80,paddingRight:80,position:"relative",top:"60%",left:"40%"}}>Get Started</MDBBtn>
      
    </Fragment>
  );
}

export default ButtonPage;