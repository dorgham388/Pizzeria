/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Friday, May 14th 2021, 5:14:01 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Description = tw.p`transition duration-300 my-2 dark:text-gray-500 opacity-50 font-extrabold text-sm text-black text-center`;

const Text = ({ children, ...props }) => {
  return <Description {...props}>{children}</Description>;
};

export default Text;
