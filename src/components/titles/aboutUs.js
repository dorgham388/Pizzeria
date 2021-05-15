/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Saturday, May 15th 2021, 10:26:29 pm
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Text = tw.span`transition duration-300 my-1 dark:text-yellow-500 font-sans font-bold text-2xl text-gray-900 text-center `;

const Title = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Title;
