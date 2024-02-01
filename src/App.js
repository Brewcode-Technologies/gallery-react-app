import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Search from './components/Search';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:imgname" exact component={Search} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App
