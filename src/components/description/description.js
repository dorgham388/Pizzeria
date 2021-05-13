/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Thursday, May 13th 2021, 11:45:00 pm
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Description = tw.p`my-2 dark:text-gray-500 opacity-50 font-extrabold text-sm text-black w-64`;

const Text = ({ children, ...props }) => {
  return <Description {...props}>{children}</Description>;
};

export default Text;
