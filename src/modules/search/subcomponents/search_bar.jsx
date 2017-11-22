import React from 'react';
import autoBind from 'auto-bind';

import { addHistory } from '../actions';

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
    let { name, searchDrug, loggedIn, history } = this.props;
    if (loggedIn && name) {
      let query = { name, count: 1 };
      addHistory(query);
    }
    searchDrug(medication).then(
      () => {
        if (history.location.pathname !== "/result") {
          history.push('result');
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