import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import { ResultList } from './subcomponent';
import { searchDrug } from '../search/actions';
import { SearchBar } from '../search/subcomponents';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drug: this.props.drug.drugGroup,
      searchAgain: false
    };

    autoBind(this);
  }

  componentDidMount() {
    if (!this.props.drug.drugGroup) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(newProps) {
   if (this.props.drug.drugGroup.name !== newProps.drug.drugGroup.name) {
     this.setState({ searchAgain: false });
   }
  }

  searchAgain() {
    this.setState({ searchAgain: true });
  }

  renderSearchAgain() {
    if (this.state.searchAgain) {
      return <SearchBar {...this.props} />;
    } else {
      return <span onClick={this.searchAgain}>Search Again</span>;
    }
  }

  renderNoResult() {
    let validResult = this.props.drug.drugGroup.conceptGroup;
    
    if (!validResult) {
      return (
        <div className="result-list">
          <div className="result-title">
            <span className="capitalize">No matching results.</span>
          </div>
        </div>
      );
    } else {
      return <ResultList {...this.props} />;
    }
  }

  render() {
    return (
      <div className="results-container">
        <div className="results">
          {this.renderNoResult()}

          <div className="search-again">
            {this.renderSearchAgain()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ drug }) => ({
  drug
});

const mapDispatchToProps = dispatch => ({
  searchDrug: query => dispatch(searchDrug(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);