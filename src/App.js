import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home.js';
import SanFrancisco from './components/locations/SanFrancisco.js';
import Sapporo from './components/locations/Sapporo.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sanfrancisco">
          <SanFrancisco />
        </Route>
        <Route path="/sapporo">
          <Sapporo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
