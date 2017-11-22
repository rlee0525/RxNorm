import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import { ResultList } from './subcomponent';
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

    console.log(this.state.drug);
  }

  searchAgain() {
    this.setState({ searchAgain: true });
  }

  renderSearchAgain() {
    if (this.state.searchAgain) {
      return <SearchBar />;
    } else {
      return <span onClick={this.searchAgain}>Search Again</span>;
    }
  }

  render() {
    return (
      <div className="results-container">
        <div className="results">
          <ResultList {...this.props} />

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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);