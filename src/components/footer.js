import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/footer.css";
class Footers extends Component  {
    
        render()
    {
    return (
        <div>
          <footer>
        <span>Created By <a href="abc@gmail.com"> TakeEasy </a> | <span class="far fa-copyright"></span>  2021 All rights reserved. </span>
         </footer>
  
        </div>
    );
}
}

export default Footers;
