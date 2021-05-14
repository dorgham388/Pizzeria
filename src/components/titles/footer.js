/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Friday, May 14th 2021, 2:52:23 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Text = tw.span`transition duration-300 my-1 dark:text-gray-500 opacity-50 font-extrabold text-base transform skew-x-1 text-black `;

const Title = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Title;
