import React, { Component } from "react";
import "./home.css";

class HomePage extends Component { 

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url("https://i.pinimg.com/564x/b7/95/03/b79503f595e9690ecaeba2c99488d134.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            height: "100%",
            width: "100%",
            opacity: 0.7
          }}
        >
          <div className="starting-text">
            <div style={{ display: "webkit-box" }}>
              <h1></h1>
              <h2>With proper task management you can do everything.</h2>
            </div>
          </div>
        </div>
       
      </>
    );
  }
}

export default HomePage;
