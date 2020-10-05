import React from "react";
import NavBar from "./compoenets/nav/";
import "./css/style.css";
import {
  
  Route,
  
} from "react-router-dom";
import Home from "./home"
import Misson from "./Misson"
import About from "./aboutUs"
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">

<Route exact path="/"  component={Home}/>
<Route exact path="/mission"  component={Misson}/>
<Route exact path="/aboutUS"  component={About}/>
 </div>
    </div>
  );
}

export default App;
