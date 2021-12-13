import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch,Route,RouteProps,Redirect } from "react-router-dom";
import { LoginRoute } from "./login";
const AppRoutes = () => {


  const renderLoginRouter: RouteProps["render"] = useCallback(
      (props) => {
          return <LoginRoute {...props} />
      },
      [],
  )


  return <Router>

    <Switch>
        <Route path="/set" render={renderLoginRouter}/>

        <Redirect path="/" to="/set/signin"/>
    </Switch>

  </Router>;
};

export default AppRoutes;
