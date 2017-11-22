import React from 'react';
import autoBind from 'auto-bind';

class ResultListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };

    autoBind(this);
  }

  searchRelated() {
    let { rxcui, searchRelatedDrugs, name } = this.props;

    searchRelatedDrugs(rxcui).then(
      () => this.props.relatedSearch(name)
    );
  }

  render() {
    return (
      <div className="result-list-item" onClick={this.searchRelated}>
        {this.state.name}
      </div>
    );
  }
}

export { ResultListItem };