import React from 'react';
import { connect } from 'react-redux';

import Header from './layout/header';

class Application extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Application);
