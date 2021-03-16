import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./screens/home";
import Login from "./screens/login";
import MainOptions from "./screens/mainOptions";
import Conference from "./screens/conference";
import ConferenceBookingForm from "./screens/conferenceBookingForm";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/MainOptions">
            <MainOptions />
          </Route>
          <Route exact path="/Conference">
            <Conference />
          </Route>
          <Route exact path="/bookconference">
            <ConferenceBookingForm />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
