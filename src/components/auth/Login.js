import React, { Component } from "react";
import Input from "../common/Input";
import validateLoginForm from "../validators/validateLoginForm";
import { isEmpty } from "../utils/Utils";

class Login extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {}
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { account } = this.state;
    const errors = validateLoginForm(account);
    this.setState({ errors });
    if (!isEmpty(errors)) return;

    //Submit to server
    console.log("Submitted!!");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.handleSubmit} noValidate>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={account.email}
                  error={errors.email}
                  onChange={this.handleChange}
                  info="This site uses Gravatar so if you want a profile image, use
                a Gravatar email"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={account.password}
                  error={errors.password}
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

export default Login;
