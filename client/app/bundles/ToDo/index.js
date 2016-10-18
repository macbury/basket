import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const reduxMiddlewares = applyMiddleware(

);

window.onload = function() {
  injectTapEventPlugin();
  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={ compose(reduxMiddlewares)(createStore)(store) }>
        <RaisedButton label="Hello!" />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('todo-app-root')
  );
}
