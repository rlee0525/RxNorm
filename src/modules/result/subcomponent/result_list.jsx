import React from 'react';
import autoBind from 'auto-bind';

import { ResultListItem } from './result_list_item';

class ResultList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.drug.drugGroup.name
    };

    autoBind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.drug.relatedGroup) {
      if (this.props.drug.relatedGroup || this.props.drug.drugGroup.name !== newProps.drug.drugGroup.name) {
        this.setState({ name: newProps.drug.drugGroup.name });
      }
    }
  }

  relatedSearch(name) {
    this.setState({ name });
  }

  renderItems() {
    let items;

    if (this.props.drug.relatedGroup) {
      items = this.props.drug.relatedGroup.conceptGroup;

      if (items[0].conceptProperties) {
        items = items[0].conceptProperties.concat(items[1].conceptProperties);
      } else {
        items = items[1].conceptProperties;
      }
    } else {
      items = this.props.drug.drugGroup.conceptGroup;

      if (items.length > 1) {
        items = items[1].conceptProperties;
      } else {
        items = items[0].conceptProperties;
      }
    }    
    
    return items.map((key, idx) => {
      let name = key.synonym;
      if (name.length === 0) name = key.name;

      return <ResultListItem 
        key={key.rxcui} 
        name={name}
        rxcui={key.rxcui}
        tty={key.tty}
        relatedSearch={this.relatedSearch} 
        {...this.props}
      />;
    });
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