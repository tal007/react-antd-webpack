import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loading from '@comp/Loading';
import Routes from './Routes';

const App = () => (
  <BrowserRouter basename="/">
    <Routes />
  </BrowserRouter>
);

const Child = hot(module)(App);

export default function Main() {
  return (
    <Suspense fallback={<Loading />}>
      <Child />
    </Suspense>
  );
}
