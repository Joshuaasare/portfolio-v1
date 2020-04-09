import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './features/_shared/history';
import store from './features/store';
import 'semantic-ui-css/semantic.min.css';
import './features/_shared/css/main.css';
import './features/_shared/css/grid.css';
import {} from './features/_shared/components';
import { Root } from './features/Root';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Root} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
