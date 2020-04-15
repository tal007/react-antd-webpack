import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
