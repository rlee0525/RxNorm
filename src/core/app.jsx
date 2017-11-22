import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'modules/home';
import Navbar from 'common/navbar';
import Result from 'modules/result';

const App = ({ children }) => (
  <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/result" component={Result} />
  </div>
);

export default App;