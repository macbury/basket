import React from 'react';
import TextField from 'material-ui/TextField';

/**
* Helper for connecting redux form with material ui components
*/

/**
* Render TextField for Field
*/
export const renderTextField = function ({ input, label, meta: { touched, error }, ...custom }) {
  return <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
}
