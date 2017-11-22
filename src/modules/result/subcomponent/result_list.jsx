import React from 'react';

import { ResultListItem } from './result_list_item';

class ResultList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.drug.drugGroup.name
    };
  }

  renderItems() {
    let items = this.props.drug.drugGroup.conceptGroup[1].conceptProperties;

    return items.map((key, idx) => (
      <ResultListItem 
        key={`item-${idx}`} 
        name={key.synonym} 
        rxcui={key.rxcui} 
      />
    ));
  }

  render() {
    return (
      <div className="result-list">
        <div className="result-title">
          <span className="capitalize">{this.state.name}</span>
        </div>

        <div className="result-list-items">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export { ResultList };