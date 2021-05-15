/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 10:26:51 pm
 * Modified By: Jasser Bouzidi
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CustomCard = tw.div`duration-300 ease-in-out shadow-inner p-2 px-8  flex justify-center items-start  dark:(bg-gradient-to-b from-gray-800  to-gray-900)  bg-gradient-to-b from-yellow-400  to-gray-50  w-96 h-64 rounded  lg:(my-12 mx-6) md:(my-12 mx-12) `;

const Card = ({ children }) => {
  return <CustomCard>{children}</CustomCard>;
};

export default Card;
