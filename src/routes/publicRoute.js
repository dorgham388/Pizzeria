/*
 * Created Date: Tuesday May 11th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Tuesday, May 11th 2021, 4:37:53 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <React.Fragment>{<Component {...props} />}</React.Fragment>
      )}
    />
  );
};
export default PublicRoute;
