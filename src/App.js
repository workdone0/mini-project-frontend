import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import Home from "./screens/home";
import Login from "./screens/login";
import MainOptions from "./screens/mainOptions";
import Conference from "./screens/conference";
import ConferenceBookingForm from "./screens/conferenceBookingForm";
import LoadingAnimation from "./screens/loadingAnimation";

import { verifyLoginToken } from "./api/verify";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
  constructor() {
    super();
    this.state = {
      user: null,
      token: null,
      loading: true,
    };
  }
  async componentDidMount() {
    if (this.props.allCookies.token) {
      this.setState({
        token: await this.props.allCookies.token,
      });
      const response = await verifyLoginToken(this.state.token);
      if (response.status == 200) {
        this.setState({
          user: response.data.user,
        });
        this.props.setCurrentUser(response.data.user);
      }
    } else {
      console.log("Not Found");
    }
    this.setState({
      loading: false,
    });
  }
  render() {
    if (this.state.loading) {
      return <LoadingAnimation />;
    }
    if (this.props.currentUser) {
      return (
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mainoptions">
            <MainOptions />
          </Route>
          <Route exact path="/conference">
            <Conference />
          </Route>
          <Route exact path="/bookconference">
            <ConferenceBookingForm />
          </Route>

          <Redirect to="/" />
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
