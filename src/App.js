import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from 'components/home/Home';
import SanFrancisco from 'components/locations/SanFrancisco';
import Sapporo from 'components/locations/Sapporo';
import Hakodate from 'components/locations/Hakodate';
import Aomori from 'components/locations/Aomori';
import Morioka from 'components/locations/Morioka';
import Ishinomaki from 'components/locations/Ishinomaki';
import Sendai from 'components/locations/Sendai';
import Tokyo from 'components/locations/Tokyo';
import Yokohama from 'components/locations/Yokohama';
import Shizuoka from 'components/locations/Shizuoka';
import Nagoya from 'components/locations/Nagoya';
import Kyoto from 'components/locations/Kyoto';
import Kobe from 'components/locations/Kobe';
import Hiroshima from 'components/locations/Hiroshima';
import Busan from 'components/locations/Busan';
import Nara from 'components/locations/Nara';
import Osaka from 'components/locations/Osaka';
import TokyoTwo from 'components/locations/TokyoTwo';

import Drawings from 'components/misc/Drawings';
import Stamps from 'components/misc/Stamps';
import Hostels from 'components/misc/Hostels';
import Coffee from 'components/misc/Coffee';
import Music from 'components/misc/Music';
import Foods from 'components/misc/food-pics/Foods';
import Tips from 'components/misc/tips/Tips';
import StarWars from 'components/misc/StarWars';

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
        <Route path="/stamps">
          <Stamps />
        </Route>
        <Route path="/hostels">
          <Hostels />
        </Route>
        <Route path="/coffee">
          <Coffee />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/foods">
          <Foods />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
        <Route path="/starwars">
          <StarWars />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
