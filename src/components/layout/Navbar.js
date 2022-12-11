import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  let guestLink = "",
    userLinks = "";
  guestLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  userLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/feed">
          Post Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          <img
            className="rounded-circle"
            style={{ width: "25px", marginRight: "5px" }}
            src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
            alt="Login Profile"
            title="You must have a Gravatar connected to your email to display an image"
          />{" "}
          Logout
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ruga-X
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                {" "}
                
              </Link>
            </li>
          </ul>
          {sessionStorage.auth === "true" ? userLinks : guestLink}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
