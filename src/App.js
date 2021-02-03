import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Main location components
const Home = lazy(() => import('components/home/Home'));
const SanFrancisco = lazy(() => import('components/locations/SanFrancisco'));
const Sapporo = lazy(() => import('components/locations/Sapporo'));
const Hakodate = lazy(() => import('components/locations/Hakodate'));
const Aomori = lazy(() => import('components/locations/Aomori'));
const Morioka = lazy(() => import('components/locations/Morioka'));
const Ishinomaki = lazy(() => import('components/locations/Ishinomaki'));
const Sendai = lazy(() => import('components/locations/Sendai'));
const Tokyo = lazy(() => import('components/locations/Tokyo'));
const Yokohama = lazy(() => import('components/locations/Yokohama'));
const Shizuoka = lazy(() => import('components/locations/Shizuoka'));
const Nagoya = lazy(() => import('components/locations/Nagoya'));
const Kyoto = lazy(() => import('components/locations/Kyoto'));
const Kobe = lazy(() => import('components/locations/Kobe'));
const Hiroshima = lazy(() => import('components/locations/Hiroshima'));
const Busan = lazy(() => import('components/locations/Busan'));
const Nara = lazy(() => import('components/locations/Nara'));
const Osaka = lazy(() => import('components/locations/Osaka'));
const TokyoTwo = lazy(() => import('components/locations/TokyoTwo'));

// Main misc components
const Drawings = lazy(() => import('components/misc/Drawings'));
const Stamps = lazy(() => import('components/misc/Stamps'));
const Hostels = lazy(() => import('components/misc/Hostels'));
const Coffee = lazy(() => import('components/misc/Coffee'));
const Music = lazy(() => import('components/misc/Music'));
const Foods = lazy(() => import('components/misc/food-pics/Foods'));
const Tips = lazy(() => import('components/misc/tips/Tips'));
const StarWars = lazy(() => import('components/misc/StarWars'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<span />}>
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
      </Suspense>
    </Router>
  );
}
