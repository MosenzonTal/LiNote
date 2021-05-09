import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <div style={{position: "relative"}} className="container welcome-text ">
          <div style={{position: "absolute", top: "140px", right: "120px"}}>
          <h1>
            Welcome <strong>{this.props.match.params.name}</strong>.
          </h1>
          <p>
            It's time to <strong>Organize</strong> and <strong>Create</strong>{" "}
            your notes. <br />            
            you can start <strong>right now.</strong>
            <br />
          </p>
          <IconButton variant="outlined" color="default" size="small">
            <Link to="/notes">
              Go To Notes
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </IconButton>
          </div>         
        </div>
        <div style={{position: "relative"}}>
          <img alt="welcomeIMG" style={{height: "492.8px", width: "590px", position: "absolute", left:"0"}} src={"https://i.ibb.co/bsw5F8t/welcome.jpg"}></img>
        </div>
      </>
    );
  }
}
