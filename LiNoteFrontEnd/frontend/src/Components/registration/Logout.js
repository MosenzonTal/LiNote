import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top:"210px", right: "220px" }}>
            <h2>
              You Are <b>Logged Out</b>
            </h2>
            <h5>
              Thank you for using <b>LiNote</b>
            </h5>
          </div>
          <div style={{ position: "relative" }}></div>

          <img alt="logoutIMG"
            style={{
              height: "492.8px",
              width: "590px",
              position: "absolute",
              left: "0",
            }}
            src={"https://i.ibb.co/T8PLyqL/1691462ee976cd17c631bdc5cad93af3.jpg"}
          />
        </div>
      </>
    );
  }
}

export default Logout;
