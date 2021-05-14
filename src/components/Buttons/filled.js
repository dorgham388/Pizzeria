/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Friday, May 14th 2021, 7:57:32 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Filled = tw.button`min-w-max mt-2 transition duration-300 ease-in-out py-2 px-6 bg-gray-600 dark:bg-gray-800 opacity-75 hover:opacity-100 text-white dark:text-white rounded-lg font-semibold outline-none focus:outline-none`;
const Active = tw.button`min-w-max mt-2 transition duration-300 ease-in-out py-2 px-6 bg-yellow-500 dark:text-white text-white rounded-lg font-semibold outline-none focus:outline-none`;

const Button = ({ children, active, ...props }) => {
  return active ? (
    <Active {...props}>{children}</Active>
  ) : (
    <Filled {...props}>{children}</Filled>
  );
};

export default Button;
