import React from 'react';
import autoBind from 'auto-bind';

class ResultListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    autoBind(this);
  }

  render() {
    return (
      <div className="result-list-item">
        {this.props.name}
      </div>
    );
  }
}

export { ResultListItem };