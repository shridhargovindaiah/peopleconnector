import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import Input from "../../common/Input";

class EditProfile extends Component {
  state = {
    statusOptions: [
      { label: "* Select professional status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Manager", value: "Manager" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ],
    errors: {},
    profile: {
      handle: "",
      status: "",
      company: "",
      website: "",
      location: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: ""
    },
    socialLinks: false
  };

  onChange = e => {};
  render() {
    const { profile, errors } = this.state;
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form action="add-experience.html">
                <Input
                  type="text"
                  placeholder="* Profile handle"
                  name="handle"
                  value={profile.handle}
                  error={errors.handle}
                  onChange={this.onChange}
                  info="A unique handle for your profile URL. Your full name,
                    company name, nickname, etc (This CAN'T be changed later)"
                />

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={profile.status}
                    error={errors.status}
                    onChange={this.onChange}
                  >
                    <option value="0">* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer" selected>
                      Senior Developer
                    </option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">
                      Student or Learning
                    </option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                  </select>
                  <small className="form-text text-muted">
                    Give us an idea of where you are at in your career
                  </small>
                </div>
                <Input
                  type="text"
                  info="Could be your own company or one you work for"
                  placeholder="Company"
                  name="company"
                  value={profile.company}
                  error={errors.company}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  info="Could be your own or a company website"
                  placeholder="Website"
                  name="website"
                  value={profile.website}
                  error={errors.website}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  placeholder="Location"
                  info="City & state suggested (eg. Boston, MA)"
                  name="location"
                  value={profile.location}
                  error={errors.location}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  placeholder="Skills"
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)"
                  name="skills"
                  value={profile.skills}
                  error={errors.skills}
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  placeholder="Github Username"
                  info="If you want your latest repos and a Github link, include your username"
                  name="githubusername"
                  value={profile.githubusername}
                  error={errors.githubusername}
                  onChange={this.onChange}
                />
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="A short bio of yourself"
                    name="bio"
                    value={profile.bio}
                    error={errors.bio}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    Tell us a little about yourself
                  </small>
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() =>
                      this.setState({ socialLinks: !this.state.socialLinks })
                    }
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {this.state.socialLinks && (
                  <Fragment>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaTwitter />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Twitter Profile URL"
                        name="twitter"
                        value={profile.twitter}
                        error={errors.twitter}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaFacebook />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Facebook Page URL"
                        name="facebook"
                        value={profile.facebook}
                        error={errors.facebook}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLinkedinIn />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Linkedin Profile URL"
                        name="linkedin"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaYoutube />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="YouTube Channel URL"
                        name="youtube"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaInstagram />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Instagram Page URL"
                        name="instagram"
                      />
                    </div>
                  </Fragment>
                )}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
