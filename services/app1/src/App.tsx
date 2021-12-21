import * as React from 'libary/react';
import * as Loadable from 'react-loadable';
// import RemoteButton from 'app2/Button'


const Loading = () => <div>2323</div>;

const LoadableComponent = Loadable({
  loader: () => import('common/Button'),
  loading: Loading,
  timeout: 1000,
});


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/no-multi-comp
const App = () => (
  <div>
    <h1>Typescript3</h1>
    <h2>App 1</h2>
    <LoadableComponent a={2} />
  </div>
);

export default App;
