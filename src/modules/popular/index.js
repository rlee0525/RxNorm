import React from 'react';
import autoBind from 'auto-bind';
import { connect } from 'react-redux';

import Loading from 'common/loading';
import { getPopularDrugs } from './actions';
import { PopularItem } from './subcomponents';

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: null
    };

    autoBind(this);
  }

  componentDidMount() {
    this.props.getPopularDrugs().then(
      res => this.setState({ popular: res.drugs })
    );
  }

  renderPopular() {
    if (!this.state.popular) return <Loading />;
    
    let { popular } = this.state;
    return popular.map((key, idx) => (
      <PopularItem 
        key={`popular-${key.name}-${idx}`}
        name={key.name}
      />
    ));
  }

  render() {
    return (
      <div className="search-popular">
        <h1>Popular Searches</h1>

        <div className="popular-container">
          <div className="popular-list-container">
            {this.renderPopular()}
          </div>
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
