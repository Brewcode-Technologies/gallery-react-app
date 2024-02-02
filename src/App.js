import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import './App.css';

const Search = lazy(() => import('./components/Search'));
// implemented lazy loading for search component
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search/:imgname" exact component={Search} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
