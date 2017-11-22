import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import { logout, login, signup } from './actions';
import { receiveErrors, clearErrors } from 'common/errors/actions';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    autoBind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.loginPage) {
      this.props.login(user).then(() => this.setState({ loadingPage: true }));
    } else {
      this.props.signup(user).then(() => this.setState({ loadingPage: true }));
    }
  }

  demoLogin() {
    this.setState({ loginPage: true });
    const that = this;
    let counter = 1;
    let passwordCounter = 1;

    const username = "WelcomeGuest";
    const password = "password";
    const usernameLoop = username.length;
    const passwordLoop = password.length;

    (function usernameNext() {
      if (counter++ > usernameLoop) return passwordNext();
      setTimeout(() => {
        that.setState({ username: username.slice(0, counter) });
        usernameNext();
      }, 70);
    })();

    function passwordNext() {
      if (passwordCounter++ > passwordLoop) {
        return that.props.login({
          username: that.state.username,
          password: that.state.password
        }).then(() => that.setState({ loadingPage: true }));
      }

      setTimeout(() => {
        that.setState({ password: password.slice(0, passwordCounter) });
        passwordNext();
      }, 70);
    }
  }

  toggleStatus(e) {
    e.preventDefault();
    let loginPage = !this.state.loginPage;
    this.setState({ loginPage });
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonText = this.state.loginPage ? "LOGIN" : "SIGNUP";
    let questionText = this.state.loginPage ? "Don't have an account?" : "Already have an account?";
    let text = this.state.loginPage ? "Sign Up" : "Login";

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="error-message">
            {this.props.errors ? this.renderErrors() : ""}
          </div>
          <div className="login-form">
            <div className="login-input">
              <label>
                <input type="text"
                  placeholder="Username"
                  className="login-input-field"
                  value={this.state.username}
                  onChange={this.update('username')}
                  required />
              </label>

              <label>
                <input type="password"
                  placeholder="Password"
                  className="login-input-field"
                  value={this.state.password}
                  onChange={this.update('password')}
                  required />
              </label>
            </div>

            <div className="login-button-field">
              <button id="sign-up-log-in-button" type="submit">{buttonText}</button>
              <button type="button" onClick={this.demoLogin}>DEMO</button>
            </div>

            <div className="check-own-account">
              {questionText}
              <button id="status-toggle" onClick={this.toggleStatus}>{text}</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);