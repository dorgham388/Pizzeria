/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Thursday, May 13th 2021, 4:16:21 am
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Active = tw.button` transition duration-300 ease-in-out py-2 px-8 bg-yellow-500 dark:text-white text-white rounded-lg font-semibold outline-none focus:outline-none`;

const Button = ({ children, disabled, ...props }) => {
  return <Active {...props}>{children}</Active>;
};

export default Button;
