import React, { Component } from "react";
import Start from "./Start"
import List from "./List"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Route exact path="/" component={Start} />
        <Route exact path="/smurfs" component={List}/>
      </div>
    );
  }
}

export default App;
