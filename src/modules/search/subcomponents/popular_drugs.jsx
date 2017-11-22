import React from 'react';
import autoBind from 'auto-bind';

class PopularDrugs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="popular-container">
        <button>
          Popular!
        </button>
      </div>
    );
  }
}

export { PopularDrugs };