/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Thursday, May 13th 2021, 4:28:56 am
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Filled = tw.button`transition duration-300 ease-in-out py-2 px-8 bg-gray-600 dark:bg-gray-800 opacity-75 hover:opacity-100 text-white dark:text-white rounded-lg font-semibold outline-none focus:outline-none`;
const Active = tw.button` transition duration-300 ease-in-out py-2 px-8 bg-yellow-500 dark:text-white text-white rounded-lg font-semibold outline-none focus:outline-none`;

const Button = ({ children, active, ...props }) => {
  return active ? (
    <Active {...props}>{children}</Active>
  ) : (
    <Filled {...props}>{children}</Filled>
  );
};

export default Button;
