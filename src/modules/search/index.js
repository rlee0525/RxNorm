import React from 'react';
import autoBind from 'auto-bind';

import { SearchBar, PopularDrugs } from './subcomponents';

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
        <SearchBar {...this.props} />
        <div>------- or --------</div>
        <PopularDrugs {...this.props} />
      </div>
    );
  }
}

export default Search;