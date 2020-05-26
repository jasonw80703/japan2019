import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home.js';
import SanFrancisco from './components/locations/SanFrancisco.js';
import Sapporo from './components/locations/Sapporo.js';
import Hakodate from './components/locations/Hakodate.js';
import Aomori from './components/locations/Aomori.js';
import Morioka from './components/locations/Morioka.js';
import Ishinomaki from './components/locations/Ishinomaki.js';
import Sendai from './components/locations/Sendai.js';
import Tokyo from './components/locations/Tokyo.js';
import Yokohama from './components/locations/Yokohama.js';
import Shizuoka from './components/locations/Shizuoka.js';
import Nagoya from './components/locations/Nagoya.js';
import Kyoto from './components/locations/Kyoto.js';
import Kobe from './components/locations/Kobe.js';
import Hiroshima from './components/locations/Hiroshima.js';
import Busan from './components/locations/Busan.js';
import Nara from './components/locations/Nara.js';
import Osaka from './components/locations/Osaka.js';
import TokyoTwo from './components/locations/TokyoTwo.js';

import Drawings from './components/misc/Drawings.js';

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
        <Route path="/hakodate">
          <Hakodate />
        </Route>
        <Route path="/aomori">
          <Aomori />
        </Route>
        <Route path="/morioka">
          <Morioka />
        </Route>
        <Route path="/ishinomaki">
          <Ishinomaki />
        </Route>
        <Route path="/sendai">
          <Sendai />
        </Route>
        <Route path="/tokyo">
          <Tokyo />
        </Route>
        <Route path="/yokohama">
          <Yokohama />
        </Route>
        <Route path="/shizuoka">
          <Shizuoka />
        </Route>
        <Route path="/nagoya">
          <Nagoya />
        </Route>
        <Route path="/kyoto">
          <Kyoto />
        </Route>
        <Route path="/kobe">
          <Kobe />
        </Route>
        <Route path="/hiroshima">
          <Hiroshima />
        </Route>
        <Route path="/busan">
          <Busan />
        </Route>
        <Route path="/nara">
          <Nara />
        </Route>
        <Route path="/osaka">
          <Osaka />
        </Route>
        <Route path="/tokyo_two">
          <TokyoTwo />
        </Route>
        <Route path="/drawings">
          <Drawings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
