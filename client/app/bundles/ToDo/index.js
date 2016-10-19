import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

injectTapEventPlugin();

import './body.scss';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Application from './components/application';
import Lists from './components/lists';

window.onload = function() {
  /**
  * Where to insert application in DOM
  **/
  const appContainer = document.getElementById('todo-app-root');

  ReactDOM.render(
    (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Application}>
              <IndexRoute component={Lists} />
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    ),appContainer
  );
}
