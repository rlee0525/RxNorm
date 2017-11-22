import React from 'react';
import autoBind from 'auto-bind';

import { addHistory } from 'modules/search/actions';

class ResultListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };

    autoBind(this);
  }

  renderLabel() {
    let status = "B";
    let labelClass = "branded";
    if (this.props.tty === "SCD") {
      labelClass = "generic";
      status = "G";
    }
    return <div className={labelClass}>{status}</div>;
  }

  searchRelated() {
    let { rxcui, searchRelatedDrugs, name, loggedIn } = this.props;
    if (loggedIn && name) {
      let query = { name, count: 1 };
      addHistory(query);
    }
    searchRelatedDrugs(rxcui).then(
      () => this.props.relatedSearch(name)
    );
  }

  render() {
    return (
      <div className="result-list-item" onClick={this.searchRelated}>
        <div className="label-container">{this.renderLabel()}</div>
        <span className="result-list-item-name">{this.state.name}</span>
      </div>
    );
  }
}

export { ResultListItem };