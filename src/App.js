import "./index.css";
import React from "react";
import Home from "./Home.js";
import List from "./Component/list.js";
import { BrowserRouter , Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="content">
      <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
