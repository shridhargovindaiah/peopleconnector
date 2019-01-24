import React, { Component } from "react";
import { Link } from "react-router-dom";

import GetExperienceList from "./experience/GetExperienceList";
import GetEducationList from "./education/GetEducationList";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <p className="lead text-muted">Welcome John Doe</p>

              <div className="btn-group mb-4" role="group">
                <Link to="edit-profile" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1" /> Edit
                  Profile
                </Link>
                <Link to="add-experience" className="btn btn-light">
                  <i className="fab fa-black-tie text-info mr-1" />
                  Add Experience
                </Link>
                <Link to="add-education" className="btn btn-light">
                  <i className="fas fa-graduation-cap text-info mr-1" />
                  Add Education
                </Link>
              </div>
              <GetExperienceList />
              <GetEducationList />

              <div style={{ marginBottom: "60px" }}>
                <button className="btn btn-danger">Delete My Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
