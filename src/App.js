import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
        <Redirect to="/" />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
