import React from 'react';
import './App.scss';
import Sort from './Sort/Sort';
import Search from './Search/Search';
import Path from './Path/Path';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <div className="main-container">
      <Router>
        <div className="nav-bar">
          <div className="title">
            <h1>Algorithms Visualizer</h1>
          </div>
          <div className="links">
            <NavLink activeClassName="active" to="/sort"><button>Sorting</button></NavLink>
            <NavLink activeClassName="active" to="/search"><button>Searching</button></NavLink>
            <NavLink activeClassName="active" to="/path"><button>Path Finding</button></NavLink>
          </div>
        </div>
          <Switch>
            <Route path="/sort">
              <Sort />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/path">
              <Path />
            </Route>
            <Route path="/">
            <div className="welcome">
              <h1>Welcome! Click on the links above to get started.</h1>
            </div>
            </Route>
          </Switch>
      </Router>
      
    </div>
  );
}
