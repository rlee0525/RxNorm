import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import Popular from 'modules/popular';
import { searchDrug } from './actions';
import { SearchBar } from './subcomponents';

class Search extends React.Component {  
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

const mapStateToProps = ({ drug, session }) => ({
  drug,
  session,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  searchDrug: medication => dispatch(searchDrug(medication))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);