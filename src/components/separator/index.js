/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Friday, May 14th 2021, 12:13:13 am
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";
const Container = tw.div`my-8 flex justify-center items-center w-full`;
const Separator = tw.div`transition duration-300  bg-gradient-to-r from-gray-50 via-gray-700 to-gray-50 w-3/4 h-0.5 rounded-lg opacity-50 dark:(bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900) `;
const Line = () => {
  return (
    <Container>
      <Separator />
    </Container>
  );
};
export default Line;
