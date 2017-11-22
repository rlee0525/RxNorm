import React from 'react';
import Modal from 'react-modal';
import autoBind from 'auto-bind';

import AuthForm from 'modules/auth';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      username: "",
      password: ""
    };

    autoBind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-left">
          <img 
            className="logo"
            src="http://res.cloudinary.com/rlee0525/image/upload/v1511309375/logo_gpnitx.png"
          />
          <h1 className="app-name">RxNorm</h1>
        </div>

        <div className="navbar-right">
          <div className="login-button-container">
            <button className="login-button" id="button-start"
              onClick={this.openModal}>
              Get Started
            </button>
          </div>
          <Modal
            className="auth-modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            contentLabel="auth-modal">
            <div className="login-intro-text">
              Welcome
            </div>
            <AuthForm />
          </Modal>

          <a href='https://github.com/rlee0525/RxNorm' target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;