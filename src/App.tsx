import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
// import Switch from "react-router-dom/Switch"
// import Link from "react-router-dom/Link"
// import Route from "react-router-dom/Route"
import AuthPage from "./components/auth/authPage";
import AllQuestionsView from "./components/questions/allView";
import Navigation from "./components/nav/navbar";
import { Provider } from "react-redux";
import Store from "./store/store";

const App = () => {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
};

export default App;
