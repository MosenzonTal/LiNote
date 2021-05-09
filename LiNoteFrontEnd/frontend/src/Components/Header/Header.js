import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../AuthenticationService";
import { withRouter } from "react-router";
import Logo from "./LiNote.png";
import "./HeaderStyle.css";

class Header extends Component {
  logout() {
    const r = window.confirm("Do you really want to Sign Out?");
    if (r === true) {
      this.props.history.push("/logout");
      AuthenticationService.logout();
    }
  }

  render() {
    const isUserLoggedin = AuthenticationService.isUserLoggedIn();
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:4200/" className="logo navbar-brand">
              <img alt="logo" src={Logo} className="image"></img>
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedin && (
              <li>
                <Link className="nav-link" to="/notes">
                  Notes
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav  navbar-collapse justify-content-end">
            {!isUserLoggedin && (
              <li className="header">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {!isUserLoggedin && (
              <li className="header">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
            {isUserLoggedin && (
              <li>
                <Link className="nav-link" onClick={this.logout.bind(this)}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
