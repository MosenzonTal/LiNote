import { Component } from "react";
import { Route, Redirect } from "react-router";
import AuthenticationService from "./AuthenticationService";

export default class AuthenticatedRoute extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

// if the user is not logged in so he will be auto route to login page if he he is trying to get in to
// urls by typing hard coded to: localhost:8080/welcome/Tal.. for example.

// we made a New Decorator To <Route> of 'react-router'. we added new logic.
// ... is the spread operator of js.
// its maps all the arguments in order as in the original object. (?Copy it)
