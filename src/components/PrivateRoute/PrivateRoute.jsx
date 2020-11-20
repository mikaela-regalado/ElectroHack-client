import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  );
};

export default PrivateRoute;
