import React from "react";
import ButtonPage from "../components/button";


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import img from "../images/img.png";



const BackgroundImagePage = () => {
  return (
      <div  style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2hHRzIaTfOsxjlbJ3rTBhHQemR0g77iDnQ&usqp=CAU")`,
        height: "90vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        }}>
          <br></br>
          <br></br>
          <br></br>
          <div class="row row-cols-1 row-cols-sm-2" >
          <div class="col mx-auto" style={{paddingLeft:"10%",margin:"3%"}}><h1>WELCOME SMITAN'S</h1>
                           <h2>TakeEasy</h2>
                           We are here to make your task easy and fast.<br></br>
                           We are here to make your task easy and fast.<br></br>
                           We are here to make your task easy and fast.<br></br>
                           We are here to make your task easy and fast.<br></br>
                           <br></br>
                           <ButtonPage/>
          </div>
          <div class="col p-5 mx-auto">
            <img src={img} style={{width:"100%", maxWidhth:"30vw",height:"auto"}}></img>
          </div>
         
         
         
          
          
           
            </div>
            
           
          
        </div>
  );
}

export default BackgroundImagePage;