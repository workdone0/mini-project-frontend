import React from "react";
import ButtonPage from "../components/button";



const BackgroundImagePage = () => {
  return (
      <div style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2hHRzIaTfOsxjlbJ3rTBhHQemR0g77iDnQ&usqp=CAU")`,
        height: "90vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        }}>
            Welcome
            <ButtonPage/>
        </div>
  );
}

export default BackgroundImagePage;