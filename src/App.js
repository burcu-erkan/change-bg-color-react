import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import Simple from "./components/Simple";
import Hex from "./components/Hex";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Simple />
            </Route>
            <Route path="/hex">
              <Hex />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
