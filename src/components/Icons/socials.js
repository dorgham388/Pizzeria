/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Thursday, May 13th 2021, 8:43:42 pm
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Social = tw.a` text-gray-400 hover:opacity-60 flex flex-row `;

const socialIcon = ({ children, ...props }) => {
  return <Social {...props}>{children}</Social>;
};

export default socialIcon;
