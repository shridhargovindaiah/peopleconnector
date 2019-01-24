import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EditProfile from "./components/dashboard/profile/EditProfile";
import AddExperience from "./components/dashboard/experience/AddExperience";
import AddEducation from "./components/dashboard/education/AddEducation";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/add-experience" component={AddExperience} />
          <Route path="/add-education" component={AddEducation} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
