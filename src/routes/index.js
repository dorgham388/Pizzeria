/*
 * Created Date: Tuesday May 11th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Tuesday, May 11th 2021, 4:35:36 pm
 * Modified By: Amir Dorgham
 * -----
 */
import home from "screens/home";

const protectedRoutes = [];
const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: home,
  },
];
export { publicRoutes, protectedRoutes };
