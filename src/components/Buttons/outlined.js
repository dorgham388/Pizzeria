/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 10:26:44 pm
 * Modified By: Jasser Bouzidi
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CustomButton = tw.button`m-3 transition duration-300 ease-in-out py-2 px-4 text-gray-900 hover:text-yellow-500 dark:text-white font-semibold border-2 border-gray-900 hover:border-yellow-500 dark:border-yellow-500 dark:hover:border-white   rounded-lg hover:shadow hover:opacity-70 outline-none focus:outline-none`;

const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
