/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Thursday, May 13th 2021, 8:41:55 pm
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Text = tw.span`dark:text-gray-500 opacity-50 font-extrabold text-base transform skew-x-1 text-black `;

const Title = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Title;
