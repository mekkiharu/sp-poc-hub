import { lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const MainRoutes = lazy(() => import('./routes/main-route'));

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const Tables = lazy(() => import('../pages/Tables/Tables'));

export const appRoutes = (
  <BrowserRouter>
    <Switch>
      <MainRoutes
        path="/"
        component={Homepage}
        exact={true}
        meta={{
          title: 'Home',
          isAuthRequired: false
        }}
      />

      <MainRoutes
        path="/tables"
        component={Tables}
        exact={true}
        meta={{
          title: 'Data Tables',
          isAuthRequired: false
        }}
      />
    </Switch>
  </BrowserRouter>
);
