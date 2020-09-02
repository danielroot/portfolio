// Deps
import React, { Component } from "react";
import store from "store";
import { object, shape } from "prop-types";

import IntroArt from "../../views/IntroArt/IntroArt";

// Style
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { password } = this.state;
    const { history } = this.props;

    this.setState({ error: false });

    if (!(password === "google")) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    store.set("loggedIn", true);
    history.push("/");
  }

  handleChange(e) {
    console.log("onchange");
    this.setState({ password: e.target.value });
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        <form error={error} onSubmit={this.onSubmit}>
          <legend>Login</legend>
          <IntroArt />

          <p>Welcome to my online portfolio!</p>

          {error && (
            <React.Fragment>
              <div className="error" error={error}>
                <p>Sorry, that password is incorrect. Try again!</p>
                <a href="">Forgot password?</a>
              </div>
            </React.Fragment>
          )}

          <input
            label="Password"
            type="password"
            onChange={this.handleChange}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: shape({
    push: object
  })
};

export default Login;
