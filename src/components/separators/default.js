/*
 * Created Date: Thursday May 13th 2021
 * Author: Jasser Bouzidi
 * -----
 * Last Modified: Saturday, May 15th 2021, 2:23:15 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";
const Container = tw.div`my-8 flex justify-center items-center w-full`;
const Separator = tw.div`transition duration-1000 ease-in-out bg-yellow-500 w-3/4 h-0.5 rounded-lg opacity-50 rounded-full`;
const Line = () => {
  return (
    <Container>
      <Separator />
    </Container>
  );
};
export default Line;
