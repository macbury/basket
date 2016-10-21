import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import * as actions from '../../actions/flash_messages';

/**
* Display flash messages with information for user
*/
class FlashMessages extends Component {

  onFlashClose() {
    this.props.hideFlashMessage();
  }

  render() {
    const { flashes } = this.props;
    let message       = flashes[0] || "";
    let open          = flashes.length > 0;

    return <Snackbar open={open} message={message} autoHideDuration={4000} onRequestClose={this.onFlashClose.bind(this)} />;
  }
}

function mapStateToProps(state) {
  return { flashes: state.flashes };
}

export default connect(mapStateToProps, actions)(FlashMessages);
