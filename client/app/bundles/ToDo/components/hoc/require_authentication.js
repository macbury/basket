import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      if (!props.authenticated) {
        this.context.router.push('/sign_in');
      }
    }

    /**
    * Check on enter if user is authenticated
    */
    componentWillMount() {
      this.authenticateOrRedirect(this.props);
    }

    /**
    * Check on state update if user is authenticated
    */
    componentWillUpdate(nextProps) {
      this.authenticateOrRedirect(this.nextProps);
    }

    /**
    * User is authenticated
    */
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(Authentication);
}
