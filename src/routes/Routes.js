/* eslint-disable prettier/prettier */
import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "About" */ '@pages/About'));
const Authority = lazy(() => import(/* webpackChunkName: "Authority" */ '@pages/Authority'));

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
