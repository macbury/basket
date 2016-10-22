import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { showFlashMessage } from '../../actions/flash_messages';
import { fetchCurrentUserAction } from '../../actions/authentication';
/**
* This component checks if user is logged in. If he is not then it will redirect to /sign_in path otherwise render child component
*/
export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    /**
    * Redirect to sign in path if user is not authenticated
    */
    authenticateOrRedirect(props) {
      if (props.authenticated == false) {
        this.props.showFlashMessage('You need to sign in or sign up before continuing.');
        this.context.router.push('/users/sign_in');
      }
    }

    /**
    * Check on enter if user is authenticated
    */
    componentWillMount() {
      if (this.props.authenticated == null) {
        this.props.fetchCurrentUserAction();
      } else {
        this.authenticateOrRedirect(this.props);
      }
    }

    /**
    * Check on state update if user is authenticated
    */
    componentWillUpdate(nextProps) {
      this.authenticateOrRedirect(nextProps);
    }

    /**
    * User is authenticated
    */
    render() {
      if (this.props.authenticated == true) {
        return <ComposedComponent {...this.props} />;
      } else {
        return <CircularProgress />;
      }
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps, { showFlashMessage, fetchCurrentUserAction })(Authentication);
}
