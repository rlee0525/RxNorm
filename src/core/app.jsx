import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from 'common/navbar';
import Home from 'modules/auth';

const App = ({ children }) => (
  <div>
    <Navbar />
    <Route path="/" component={Home} />
  </div>
);

export default App;