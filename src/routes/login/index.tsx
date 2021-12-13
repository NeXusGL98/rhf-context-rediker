import React, { useCallback } from "react";
import {
  Switch,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import Signin from "./Signin";
import { Signup } from "./Signup";

export interface LoginRouteProps extends RouteComponentProps {}

export const LoginRoute: React.FC<LoginRouteProps> = ({ match }) => {
  const onRenderSignup: RouteProps["render"] = useCallback(() => {
    return <Signup />;
  }, []);
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path={match.url + "/signin"} render={Signin} />
        <Route exact={true} path={match.url + "/signup"} render={onRenderSignup} />
      </Switch>
    </React.Fragment>
  );
};
