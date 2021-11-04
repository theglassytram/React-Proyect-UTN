import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LoginContext from "./context/LoginContext";
import LogoutContext from "./context/LogoutContext";

function App() {
  const [isLoggedIn, setLoggedIn] =useState(false);
  const [user, setUser] = useState();

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


      <UserContext.Provider value={{user, setUser}}>
        <LoginContext />
        <br />
        <LogoutContext />
      </UserContext.Provider>
    </>
  );
}

export default App;
