import "./App.css";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navigation />
          {/* 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about-me">
              <Profile />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
