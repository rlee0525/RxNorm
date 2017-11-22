import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import { SearchBar } from './subcomponents';
import Popular from 'modules/popular';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medication: ""
    };

    autoBind(this);
  }
  
  render() {
    return (
      <div className="search">
        <div className="search-drug">
          <h1>Search Drug</h1>
          <SearchBar {...this.props} />
        </div>
        
        <Popular {...this.props} />
      </div>
    );
  }
}

export default Search;