import React from 'react';
import { connect } from 'react-redux';

import Header from './header';

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
  console.log(state);
  return {};
}

export default connect(mapStateToProps)(Application);
