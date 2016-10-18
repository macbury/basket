import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import store from './store';

injectTapEventPlugin();

window.onload = function() {
  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={ store }>
        <RaisedButton label="Hello!" />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('todo-app-root')
  );
}
