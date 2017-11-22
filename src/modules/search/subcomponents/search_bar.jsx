import React from 'react';
import autoBind from 'auto-bind';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medication: ""
    };

    autoBind(this);
  }

  updateMedication() {
    let medication = document.getElementById('medication').value;
    this.setState({ medication });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { medication } = this.state;
    this.props.searchDrug(medication).then(
      () => {
        if (this.props.history.location.pathname !== "/result") {
          this.props.history.push('result');
        }
      }
    );
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input
              maxLength={50}
              value={this.state.medication}
              onChange={this.updateMedication}
              type="text"
              id="medication"
              placeholder="Type the name..."
              autoFocus={true}
            />

            <button className="medication-search">
              <i className="material-icons" onClick={this.handleSubmit}>search</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export { SearchBar };