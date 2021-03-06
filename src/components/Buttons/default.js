/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Friday, May 14th 2021, 6:24:51 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CustomButton = tw.button`transition duration-300 ease-in-out min-w-max py-2 px-4 text-gray-900  hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500 font-semibold outline-none focus:outline-none`;

const Button = ({ children, disabled, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
