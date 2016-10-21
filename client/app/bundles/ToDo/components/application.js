import React from 'react';
import { connect } from 'react-redux';

import Header from './layout/header';
import FlashMessages from './layout/flash_messages';

class Application extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <FlashMessages />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Application);
