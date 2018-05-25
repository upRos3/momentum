import * as React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import LoginMessage from "./components/loginMessage/LoginMessage";
import Main from "./components/Main";

const FirstRoute = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    return <Route path="/user/1" componen={Main} />;
  }
  return <Redirect to="/login" />;
};

export const Routes = () => {
  return (
    <div>
      <App />
      <Router>
        <Switch>
          <Route path="/" render={FirstRoute} />
          <Route exact path="/login" component={LoginMessage} />
        </Switch>
      </Router>
    </div>
  );
};
