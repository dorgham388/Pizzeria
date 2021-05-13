/*
 * Created Date: Tuesday May 11th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 11:52:22 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "utils/theme";
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <React.Fragment>
          {
            <ThemeProvider>
              <Component {...props} />
            </ThemeProvider>
          }
        </React.Fragment>
      )}
    />
  );
};
export default PublicRoute;
