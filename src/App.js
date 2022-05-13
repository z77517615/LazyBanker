//style
import "./index.css";

//react
import React from "react";
import { BrowserRouter , Route, Switch ,Redirect } from "react-router-dom";
import { useAuthContext } from "./Hooks/useAuthContext";

//pages
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Login from "./pages/login/login.js";
import Signup from "./pages/signup/signup.js";
import Create from "./pages/create/create.js";
import Navbar from "./Component/Navbar/Navbar";




function App() {
  const { authIsReady ,user} = useAuthContext()

  return (
    <div className="content">
      {authIsReady && (
        <BrowserRouter >  
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user && <Dashboard />}
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/create">
              {user && <Create />}
              {!user && <Redirect to ="/login" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
