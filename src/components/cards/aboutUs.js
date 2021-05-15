/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 7:51:52 pm
 * Modified By: Jasser Bouzidi
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CustomCard = tw.div`shadow-inner p-2 flex justify-center items-start bg-gray-700 bg-opacity-50 w-96 h-64 rounded border border-gray-600 border-opacity-70 `;

const Card = ({ children }) => {
  return <CustomCard>{children}</CustomCard>;
};

export default Card;
