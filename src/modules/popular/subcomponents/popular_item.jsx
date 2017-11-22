import React from 'react';
import autoBind from 'auto-bind';

class PopularItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  searchPopularDrug(e) {
    e.preventDefault();
    let { name, searchDrug } = this.props;
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