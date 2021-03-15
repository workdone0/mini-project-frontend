import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./screens/home";
import Login from "./screens/login";
import MainOptions from "./screens/mainOptions";
import Conference from "./screens/conference";
import Demo from "./screens/form";

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
          <Route exact path="/form">
            <Demo/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
