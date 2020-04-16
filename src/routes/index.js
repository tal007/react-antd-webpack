import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loading from '@comp/Loading';
import Layout from '@comp/Layout';
import Routes from './Routes';

const App = () => (
  <BrowserRouter basename="/">
    <Layout>
      <Routes />
    </Layout>
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
