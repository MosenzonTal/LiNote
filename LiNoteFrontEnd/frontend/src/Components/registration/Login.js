import React, { Component } from "react";
import AuthenticationService from "../../AuthenticationService";
import LoginService from "../../api/User/LoginService";
import { Button, TextField, Paper } from "@material-ui/core";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
      hasLoginFailed: false,
      isEmpty: false,
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
    this.setState({ isEmpty: false });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.setState({ isEmpty: false });
  }

  handleUserExist(response) {
    AuthenticationService.registerSuccessfulLogin(
      this.state.username,
      this.state.password
    );
    this.props.history.push(`/welcome/${this.state.username}`);
  }

  handleUserDoesntExist(error) {
    this.setState({ hasLoginFailed: true });
    this.setState({ errorMessage: error.response.data.message });
  }

  loginClicked() {
    if (this.state.username === "" || this.state.password === "")
      this.setState({ isEmpty: true });
    else {
      LoginService.isUserExist(this.state.username, this.state.password)
        .then((response) => this.handleUserExist(response))
        .catch((error) => this.handleUserDoesntExist(error));
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.state.hasLoginFailed && (
          <div className="alert alert-danger">{this.state.errorMessage}</div>
        )}
        {this.state.isEmpty && (
          <div className="alert alert-danger">
            {" "}
            username and password are required fields{" "}
          </div>
        )}       
        <Paper elevation={10} square>
          <div>
            <TextField
              label="username"
              required
              color="secondary"
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <TextField
              label="password"
              required
              color="secondary"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.loginClicked}
          >
            Login
          </Button>
          <br /> <br />
        </Paper>
        </div>       
    );
  }
}
