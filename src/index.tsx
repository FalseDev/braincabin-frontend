import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Link,
  Route,
} from "react-router-dom";
// import Switch from "react-router-dom/Switch"
// import Link from "react-router-dom/Link"
// import Route from "react-router-dom/Route"
import AuthPage from "./components/auth/authPage";
import AllQuestionsView from "./components/questions/allView";
import Navigation from "./components/nav/navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>

        <Route path="/questions">
          <AllQuestionsView />
        </Route>

        <Route path="/">
          <Redirect to="/questions" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
