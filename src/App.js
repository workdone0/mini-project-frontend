import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./screens/home";
import MainOptions from "./screens/mainOptions";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/MainOptions">
            <MainOptions />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
