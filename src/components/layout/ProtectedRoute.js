import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const { login } = useContext(AuthContext);

    return <Route {...rest} render={(props) => (login ? <Component {...rest} {...props} /> : < Redirect to="/admin" /> )} />
}

export default ProtectedRoute;