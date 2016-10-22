import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/lists';

class Lists extends Component {

  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    return ( <div>List of todo lists</div> );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, actions)(Lists);
