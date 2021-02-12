import React, {Component, useState} from 'react';
import {
  HashRouter  as Router,
  Route,
  Switch} from 'react-router-dom';
import './App.css';
import GameContext from './context/game';
import LicensePlates from "./pages/license-plates";

class App extends Component {  
  

  render(){
    
    return (
      <div className="App">
          <Router >
            <header>
              <h1>Car Games</h1>
            </header>
            <main>
              <Switch>
              <Route path="/" exact component={LicensePlates} />
              </Switch>
            </main>
          </Router>

          
        
      </div>
    );
  }

}

export default App;
