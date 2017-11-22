import React from 'react';
import Modal from 'react-modal';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import AuthForm from 'modules/auth';
import { logout } from 'modules/auth/actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
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

  renderUser() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-right">
          <div className="login-button-container">
            <button className="login-button" id="button-start">
              {this.props.currentUser.username}
            </button>
          </div>

          <button onClick={this.props.logout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </button>
        </div>
      );
    } else {
      return (
        <div className="navbar-right">
          <div className="login-button-container">
            <button className="login-button" id="button-start"
              onClick={this.openModal}>
              Login
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
            <AuthForm closeModal={this.closeModal} />
          </Modal>

          <a href='https://github.com/rlee0525/RxNorm' target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      );
    }
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
        
        {this.renderUser()}
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);