/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 9:00:20 pm
 * Modified By: Jasser Bouzidi
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CustomCard = tw.div`shadow-inner p-2 flex justify-center items-start dark:bg-gray-700 bg-yellow-500 bg-opacity-50 w-96 h-64 rounded  lg:(my-12 mx-6) md:(my-12 mx-12) sm:mx-6`;

const Card = ({ children }) => {
  return <CustomCard>{children}</CustomCard>;
};

export default Card;
