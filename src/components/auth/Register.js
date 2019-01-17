import React, { Component } from "react";
import Input from "../common/Input";
import validateRegisterForm from "../validators/validateRegisterForm";
import { isEmpty } from "../utils/Utils";

class Register extends Component {
  state = {
    register: {
      name: "",
      email: "",
      password: "",
      password2: ""
    },
    errors: {}
  };

  handleChange = e => {
    const register = { ...this.state.register };
    register[e.target.name] = e.target.value;
    this.setState({ register });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { register } = this.state;
    const errors = validateRegisterForm(register);
    this.setState({ errors });
    if (!isEmpty(errors)) return;

    //Submit to server
    console.log("Submitted!!");
  };

  render() {
    const { register, errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={this.handleSubmit} noValidate>
                <Input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={register.name}
                  error={errors.name}
                  onChange={this.handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={register.email}
                  error={errors.email}
                  onChange={this.handleChange}
                  info="This site uses Gravatar so if you want a profile image, use
                a Gravatar email"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={register.password}
                  error={errors.password}
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={register.password2}
                  error={errors.password2}
                  onChange={this.handleChange}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
