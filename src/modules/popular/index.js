import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import Loading from 'common/loading';
import { getPopularDrugs } from './actions';

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      popular: []
    };

    autoBind(this);
  }

  componentDidMount() {
    // this.props.getPopularDrugs().then(
    //   () => this.setState({ loading: false })
    // );
  }

  renderPopular() {
    if (this.state.loading) return <Loading />;

    return (
      <div>
        hi
      </div>
    );
  }

  render() {
    return (
      <div className="search-popular">
        <h1>Popular Searches</h1>

        <div className="popular-container">
          {this.renderPopular()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ popular }) => ({
  popular
});

const mapDispatchToProps = (dispatch) => ({
  getPopularDrugs: () => dispatch(getPopularDrugs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular);
