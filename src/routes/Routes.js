import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const Authority = lazy(() => import('@pages/Authority'));
const AddAccount = lazy(() => import('@pages/AddAccount'));

export const routes = [
  {
    path: '/',
    component: Home,
    displayName: 'Home',
    exact: true,
  },
  {
    path: '/about',
    component: About,
    displayName: 'About',
  },
  {
    path: '/authority',
    component: Authority,
    displayName: 'Authority',
    exact: true,
  },
  {
    path: '/add-account',
    component: AddAccount,
    displayName: 'AddAccount',
    exact: true,
  },
];

const Routes = () => (
  <Switch>
    {routes.map((value) => (
      <Route
        key={value.path}
        path={value.path}
        exact={!!value.exact}
        component={value.component}
      />
    ))}
  </Switch>
);

export default Routes;
