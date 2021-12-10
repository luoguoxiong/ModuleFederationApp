import * as React from "libary/react";
import * as Loadable from 'react-loadable';
// import RemoteButton from 'app2/Button'


const Loading = ()=>{
    return <div>2323</div>
}

const LoadableComponent = Loadable({
    loader: () => import('app2/Button'),
    loading: Loading,
    timeout:1000
});


const App = () => {
  return  (
        <div>
          <h1>Typescript</h1>
          <h2>App 1</h2>
          <LoadableComponent a={2} />    
        </div>
      );
}

export default App;
