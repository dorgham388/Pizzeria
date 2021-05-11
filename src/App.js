import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { publicRoutes, protectedRoutes } from "routes";
import PublicRoute from "./routes/publicRoute";
import ProtectedRoute from "./routes/protectedRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {protectedRoutes.map((route, idx) => (
          <ProtectedRoute
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={idx}
          />
        ))}
        {publicRoutes.map((route, idx) => (
          <PublicRoute
            key={idx}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
