/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Friday, May 14th 2021, 2:52:49 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Social = tw.a`transition duration-300 mx-3 lg:mx-0 my-1 text-gray-400 hover:opacity-60 flex flex-row `;

const socialIcon = ({ children, ...props }) => {
  return <Social {...props}>{children}</Social>;
};

export default socialIcon;
