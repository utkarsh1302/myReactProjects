import React, { Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect, Route, Switch } from "react-router-dom";

import Main from "../Pages/Main/Main";
const Login = React.lazy(() => import("../Pages/Login/Login"));
const SignUp = React.lazy(() => import("../Pages/SignUp/SignUp.js"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard/Dashboard"));

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" exact>
        <Suspense fallback={<CircularProgress />}>
          <Login />
        </Suspense>
      </Route>
      <Route path="/signup" exact>
        <Suspense fallback={<CircularProgress />}>
          <SignUp />
        </Suspense>
      </Route>
      <Route path="/dashboard" exact>
        <Suspense fallback={<CircularProgress />}>
          <Main>
            <Dashboard />
          </Main>
        </Suspense>
      </Route>
    </Switch>
  );
};

export default Routes;
