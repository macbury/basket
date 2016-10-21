import React, { Component } from 'react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { renderTextField } from '../helpers/inputs';

import RaisedButton from 'material-ui/RaisedButton';
import signInStyles from './sign_in.scss';

import { signInAction } from '../../actions/authentication';

/**
* Form for sign in
*/
class Form extends Component {
  render() {
    const onSubmitCallback = this.props.handleSubmit(this.props.onSubmit);
    return (
      <form className={signInStyles.form} onSubmit={onSubmitCallback}>
        <h1>Sign in</h1>
        <Field name="email" component={renderTextField} label="E-Mail" />
        <br />
        <Field name="password" component={renderTextField} label="Password" type="password" />
        <br />
        <RaisedButton label="Sign in" primary={true} onClick={onSubmitCallback} />
      </form>
    );
  }
}

var SignInForm = reduxForm({
  form: 'signIn'
})(Form);

/**
* Show sign in form
*/
class SignInPage extends Component {
  
  onSubmit({ email, password }) {
    this.props.signInAction({ email, password });
  }

  render() {
    return <SignInForm onSubmit={this.onSubmit.bind(this)} />
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { signInAction })(SignInPage);
