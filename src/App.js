import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Miniresume from './components/Miniresume';
import Fetchdata from './components/Fetchdata';

function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <Miniresume />
          </Route>
          <Route exact path="/fetchdata">
            <Fetchdata/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
