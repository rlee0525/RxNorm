import React from 'react';

import AuthForm from '../auth';
import Search from '../search';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="background-img">
          <div className="description">
            RxNorm: Search Engine for Branded and Generic Medications
          </div>
        </div>
        <AuthForm />
        <Search />
      </div>
    );
  }
}

export default Home;