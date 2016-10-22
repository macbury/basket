import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

import './body.scss';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Application from './components/application';
import requireAuth from './components/hoc/require_authentication';
import Lists from './components/page/lists';
import SignInPage from './components/page/sign_in';

window.onload = function() {
  injectTapEventPlugin();
  /**
  * Where to insert application in DOM
  **/
  const appContainer = document.getElementById('todo-app-root');

  ReactDOM.render(
    (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={requireAuth(Application)}>
              <IndexRoute component={Lists} />
            </Route>

            <Route path="/users/" component={Application}>
              <Route path="sign_in" component={SignInPage} />
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    ), appContainer
  );
}
