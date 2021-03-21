import React from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
