import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] =useState(false);
  return (
    <>
      <Router>
        <Nav />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/">
            <>
            {!isLoggedIn && <Redirect to={"/login"} ></Redirect>}
            </>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
