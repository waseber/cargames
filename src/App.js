import React, {Component, useState} from 'react';
import {
  HashRouter  as Router,
  Route,
  Switch} from 'react-router-dom';
import './App.css';
import GameContext from './context/game';
import Checklist from './components/checklist';

let platesObj = {};
if(localStorage.getItem("cg-plates")){
  platesObj = JSON.parse(localStorage.getItem("cg-plates"))
}

const updateDB = (db, obj) => {
  localStorage.setItem(db, JSON.stringify(obj))
}

class App extends Component {  

  state = {
    plates: platesObj,
  }
  updatePlates = (index,val) => {
    /*if(platesObj.indexOf(index, val)>-1){
      //platesObj.splice(plate,1)
    } else {
      //platesObj.push(plate)
    }*/
    this.state.plates[index] = !val;

    updateDB("cg-plates", this.state.plates)
  }

  render(){
    const usaList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    if (Object.keys(platesObj).length === 0) {
      for (const key of usaList) {
        this.state.plates[key] = false
      }
        
    }
    return (
      <div className="App">
        <GameContext.Provider
          value={{
            plates: this.state.plates,
            updatePlates: this.updatePlates
          }}>
          <Router >
            <Checklist onStateClicked={this.updatePlates} list={this.state.plates}/>
          </Router>

          
        </GameContext.Provider>
        
      </div>
    );
  }

}

export default App;
