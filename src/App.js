import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Header />
            <Route path="/">
              <h1>We in it</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
