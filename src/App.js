import React from "react"
import Home from "./components/Home/Home"
import NotAvailable from "./components/NotAvailable/NotAvailable"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
 import "./App.css"

const App=()=>{

  return (

<Router>
<div className="App">
  <Switch>
<Route path="/" component={Home} exact/>
<Route component={NotAvailable}/>
  </Switch>
</div>
   </Router>
  );
}

export default App;
