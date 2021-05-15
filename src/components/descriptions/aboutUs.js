/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Saturday, May 15th 2021, 9:57:23 pm
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Description = tw.p`transition duration-300 my-2 pt-1 dark:text-gray-300  font-sans font-medium  text-base text-black text-center`;

const Text = ({ children, ...props }) => {
  return <Description {...props}>{children}</Description>;
};

export default Text;
