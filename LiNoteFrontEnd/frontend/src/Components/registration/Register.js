import { Button, TextField, Paper } from "@material-ui/core";
import React, { Component } from "react";
import RegisterService from "../../api/User/RegisterService";
import AuthenticationService from "../../AuthenticationService";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      Email: "",
      errorMessage: "",
      hasRegisterFailed: false,
    };
    this.register = this.register.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleException = this.handleException.bind(this);
    this.registerSucessed = this.registerSucessed.bind(this);
  }

  handleEmailChange(event) {
    // console.log(event.target.value);
    this.setState({ Email: event.target.value });
  }

  handlePasswordChange(event) {
    // console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  handleUsernameChange(event) {
    // console.log(event.target.value);
    this.setState({ username: event.target.value });
  }

  handleException(error) {
    console.log(error.response.data.message);
    this.setState({
      hasRegisterFailed: true,
      errorMessage: error.response.data.message,
    });
  }

  registerSucessed(response) {
    console.log("registerSucessed");
    AuthenticationService.registerSuccessfulLogin(
      this.state.username,
      this.state.password
    );
    this.props.history.push(`/welcome/${this.state.username}`);
  }

  register() {
    RegisterService.registerUser(
      this.state.username,
      this.state.password,
      this.state.Email
    )
      .then((response) => this.registerSucessed(response))
      .catch((error) => this.handleException(error));
  }

  render() {
    return (
      <div>
        <Paper elevation={10} square>
          <h1>Register</h1>
          <h4>Don't have a user? Sign up here</h4>
          {this.state.hasRegisterFailed && (
            <div className="alert alert-warning">Register Failed</div>
          )}
          {this.state.hasRegisterFailed && (
            <div className="alert alert-danger">{this.state.errorMessage}</div>
          )}
          <form>
          <div>
            <label htmlFor="username"></label>
            <TextField
              id="standard-basic"
              label="username"
              required ={true}
              color="secondary"
              type="text"
              name="username"
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <TextField
              required={true}
              id="standard-basic"
              label="email"
              color="secondary"
              type="text"
              name="email"
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password"> </label>
            <TextField
              required={true}
              id="standard-basic"
              label="password"
              color="secondary"
              type="password"
              name="password"
              onChange={this.handlePasswordChange}
            />
            <br /> <br />
            <Button variant="contained" color="primary" onClick={this.register}>
              Register
            </Button>
          </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default Register;
