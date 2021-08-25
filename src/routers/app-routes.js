import { lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const MainRoutes = lazy(() => import('./routes/main-route'));

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));

export const appRoutes = (
  <BrowserRouter>
    <Switch>
      <MainRoutes
        path="/"
        component={Homepage}
        meta={{
          title: 'Home',
          isAuthRequired: false
        }}
      />
    </Switch>
  </BrowserRouter>
);
