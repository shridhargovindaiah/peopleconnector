import React from "react";
import { Link } from "react-router-dom";

const Landing = props => {
  sessionStorage.setItem("auth", false);
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Ruga-X</h1>
              <p className="lead">
                {" "}
                Create a Ruga-X profile/portfolio and Start getting Locations
              </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">
                Sign Up to get a Ruga-X profile
              </Link>
              <Link to="/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
