import React from 'react';

class PopularItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popular-item-container">
        {this.props.name}
      </div>
    );
  }
}

export { PopularItem };