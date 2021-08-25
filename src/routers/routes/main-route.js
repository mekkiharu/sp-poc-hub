import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../views/Home';
import RouteGuard from '../route-guard';

const MainRoutes = (routerProps) => {
  const { component, ...rest } = routerProps;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Home>
          <RouteGuard {...props} {...routerProps} />
        </Home>
      )}
    />
  );
};

export default MainRoutes;
