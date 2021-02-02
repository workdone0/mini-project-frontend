import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn   gradient="peach" size="lg"   style={{paddingLeft:80,paddingRight:80}}>Get Started</MDBBtn>
      
    </Fragment>
  );
}

export default ButtonPage;