import React from 'react';
import "./Helper.css"
import Navbar from "./Components/Navbar"
import People from "./Components/People"
import Planets from "./Components/Planets"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"


function App() {
  return (
    
    <Router>
    <Navbar/>
      <h1 className="display-1 text-center">StarWars</h1>
      <hr/>
      <div className="container">
      <Switch>
        <Route exact path="/people" component={People}/>
        <Route eaxct path="/planets" component={Planets}/>
      </Switch>
      </div>
    </Router>
  
    
  );
}

export default App;
