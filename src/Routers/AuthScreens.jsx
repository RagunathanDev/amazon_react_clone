import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../Screens/signup/SignUp";
import SignIn from "../Screens/signin/SignIn";

function AuthScreens() {
  return (
    <Switch>
      <Route exact path="/SignIn">
        <SignIn />
      </Route>
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default AuthScreens;
