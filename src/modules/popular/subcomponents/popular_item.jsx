import React from 'react';
import autoBind from 'auto-bind';

import { addHistory } from 'modules/search/actions';

class PopularItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  searchPopularDrug(e) {
    e.preventDefault();
    let { name, searchDrug, loggedIn } = this.props;
    if (loggedIn && name) {
      let query = { name, count: 1 };
      addHistory(query);
    }
    searchDrug(name).then(() => this.props.history.push('result'));
  }

  render() {
    return (
      <div className="popular-item-container" onClick={this.searchPopularDrug}>
        {this.props.name}
      </div>
    );
  }
}

export { PopularItem };