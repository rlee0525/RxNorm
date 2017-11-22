import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="loader">
        <div id="large-box"></div>
        <div id="small-box"></div>
      </div>
    );
  }
}

export default Loading;