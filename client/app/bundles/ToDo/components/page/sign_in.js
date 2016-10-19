import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

/**
* Show sign in form
*/
class SignIn extends Component {
  render() {
    return (
      <form>
        <h1>Sign in</h1>
        <TextField floatingLabelText="E-Mail" />
        <br />
        <TextField floatingLabelText="Password" type="password" />
        <br />
        <RaisedButton label="Sign in" primary={true} />
      </form>
    );
  }
}

export default SignIn;
