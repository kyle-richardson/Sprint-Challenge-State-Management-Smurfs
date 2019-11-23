import React, { Component } from "react";
import Start from "./Start"
import List from "./List"
import {Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Start} />
        <Route exact path="/list" component={List}/>
      </div>
    );
  }
}

export default App;
