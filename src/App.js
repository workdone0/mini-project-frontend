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
import Profile from "./screens/profile";
import HospitalForm from "./screens/HospitalForm";
import Register from "./screens/register";
import HostelComplaint from "./screens/HostelComplaint";
import AdminHome from "./screens/adminHome";
import AdminConferenceHomePage from "./screens/adminConferenceHomePage";
import BookingRequests from "./screens/bookingReqests";
import ManageRoom from "./screens/manageRoom";

import { verifyLoginToken } from "./api/verify";
import AdminHomeButton from "./components/adminHomeButton";

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

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
      if (this.props.currentUser.type > 2) {
        return (
          <Router>
            <Switch>
              <Route exact path="/">
                <AdminHome />
              </Route>
              <Route exact path="/login">
                <Redirect to="/" />
              </Route>
              <Route exact path="/conferencepage">
                <AdminConferenceHomePage />
              </Route>
              <Route exact path="/bookingrequests">
                <BookingRequests />
              </Route>
              <Route exact path="/managerooms">
                <ManageRoom />
              </Route>
              <Route exact path="/AdminHome">
                <AdminHome />
              </Route>
              <Route component={NoMatchPage} />
            </Switch>
          </Router>
        );
      } else {
        return (
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/mainoptions">
                <MainOptions />
              </Route>
              <Route exact path="/conference">
                <Conference />
              </Route>
              <Route exact path="/login">
                <Redirect to="/" />
              </Route>
              <Route exact path="/register">
                <Redirect to="/" />
              </Route>
              <Route exact path="/bookconference/:roomId">
                <ConferenceBookingForm />
              </Route>
              <Route exact path="/profile/:typeId">
                <Profile />
              </Route>

              <Route exact path="/HospitalForm">
                <HospitalForm />
              </Route>

              <Route exact path="/HostelComplaint">
                <HostelComplaint />
              </Route>

              <Route component={NoMatchPage} />
            </Switch>
          </Router>
        );
      }
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
            <Route exact path="/register">
              <Register />
            </Route>
            <Route component={NoMatchPage} />
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
