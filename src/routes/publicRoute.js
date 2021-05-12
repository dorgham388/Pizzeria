/*
 * Created Date: Tuesday May 11th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, May 12th 2021, 5:15:11 am
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
