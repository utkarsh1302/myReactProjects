import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/Login.js";
import SignUp from "../Pages/SignUp/SignUp.js";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routes;
