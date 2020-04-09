/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-08-17 16:23:59
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-07 23:59:46
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

type Props = {
  history: Object,
};

type State = {};

class Root extends Component<Props, State> {
  state = {};

  componentDidMount() {
    this.unlisten = this.props.history.listen((location) => {});
  }

  componentWillUnmount() {
    this.unlisten();
  }

  renderRoutes(routes) {
    return routes.map((route: Object, id: number) => (
      <Route
        exact={route.isExact}
        key={`route-${id}`}
        path={route.path}
        component={route.component}
      />
    ));
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.container}>
          <Switch>{this.renderRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {},
};

export default Root;
