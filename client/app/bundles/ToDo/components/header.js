import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

/**
* Top navigation header
*/
class Header extends Component {

  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => { this.props.authenticate(false) }}>Sign out</button>;
    } else {
      return <button onClick={() => { this.props.authenticate(true) }}>Sign in</button>;
    }
  }

  render() {
    return <AppBar
      title="Basket"
      iconElementLeft={<div />}
      iconElementRight={this.authButton()}
    />;
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
