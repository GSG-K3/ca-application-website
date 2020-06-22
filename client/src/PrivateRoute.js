import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const isLoggedIn = localStorage.getItem('login')
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
    exact={true}
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={{pathname:"/login", state :{from :routeProps.location}} }/>
        )
      }
    />
  );
};
export default PrivateRoute