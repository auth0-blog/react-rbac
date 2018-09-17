import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";
import PostsList from "../components/PostsList";

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <h2>Welcome to React RBAC Tutorial.</h2>
          <Login />
          <PostsList />
        </div>
      )
    }
  </AuthConsumer>
);

export default HomePage;
