/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Saturday, May 15th 2021, 4:06:33 am
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";

const MenuItem = tw.button`text-gray-200 cursor-pointer py-6 font-semibold w-full outline-none focus:outline-none`;
const ActiveMenuItem = tw(
  MenuItem
)`dark:text-yellow-500 bg-yellow-500 border-l-4 border-yellow-500 bg-opacity-30 dark:bg-opacity-25`;

const Button = ({ children, active, ...props }) => {
  return active ? (
    <ActiveMenuItem {...props}>{children}</ActiveMenuItem>
  ) : (
    <MenuItem {...props}>{children}</MenuItem>
  );
};

export default Button;
