import React from 'react';
import { connect } from 'react-redux';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    console.log(this.props.result);
  }

  render() {
    return (
      <div>
        Hi
      </div>
    );
  }
}

const mapStateToProps = ({ query, result }) => ({
  query,
  result
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);