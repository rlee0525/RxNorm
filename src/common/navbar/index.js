import React from 'react';

class Navbar extends React.Component {
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
          <a href='https://github.com/rlee0525/RxNorm' target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;