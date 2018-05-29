import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import routes from '../../routes';
import Authorization from '../Authorization';
import Header from '../Header';

export const renderSwitch = () => (
  <Switch>
    {routes.map((route) => {
      const component = route.isPrivate ? Authorization(route.component) : route.component;
      return (
        <Route
          key={route.path}
          exact={route.isExact}
          path={route.path}
          component={component}
        />
      );
    })}
  </Switch>
);

const App = () => (
  <div className="App">
    <Header />
    {renderSwitch()}
  </div>
);

export default App;
