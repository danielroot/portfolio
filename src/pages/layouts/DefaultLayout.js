import React, { Component } from "react";
import { Route } from "react-router-dom";

const DefaultLayout = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <div className="sidebar">This is the Second Layout</div>
      <div className="main">{children}</div>
    </div>
  );
};

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DefaultLayout>
          <Component {...matchProps} />
        </DefaultLayout>
      )}
    />
  );
};

export default DefaultLayoutRoute;
