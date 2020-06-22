import React, { Fragment, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./screens/Home";
import NotFoundPage from "./screens/NotFoundPage";
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import ContactUs from "./screens/ContactUs/";
import Profile from "./screens/Profile";
import PersonalInfo from "./screens/PersonalInfo";
import SignUp from "./screens/SignUp";
import Accounts from "./screens/Accounts";
import Welcome from "./screens/Welcome";
import { BeatLoader } from "react-spinners";
import { red } from "@material-ui/core/colors";
import { AuthProvider } from "./Auth";
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/user/:userId" exact component={Profile} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/register" exact component={SignUp} />
            <PrivateRoute path="/welcome" exact component={Welcome} />
            <PrivateRoute path="/user/:userId/accounts" exact component={Accounts} />
            <PrivateRoute
              path="/user/:userId/personal-info"
              exact
              component={PersonalInfo}
            />
            <Route component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
