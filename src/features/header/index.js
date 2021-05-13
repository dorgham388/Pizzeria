/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 3:12:46 am
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import Light from "components/Icons/light";
import OutlinedButton from "components/Buttons/outlined";
import DefaultButton from "components/Buttons/default";

import tw from "twin.macro";

const Container = tw.div`flex justify-between items-center px-8`;
const LeftContainer = tw.div`flex justify-around items-center`;
const RightContainer = tw.div`flex justify-around items-center`;

const LightIcon = tw(Light)`cursor-pointer`;

const Header = () => {
  return (
    <Container>
      <LeftContainer>
        <LightIcon />
        <OutlinedButton>Contact support</OutlinedButton>
        <DefaultButton>How it works</DefaultButton>
        <DefaultButton>Reviews</DefaultButton>
      </LeftContainer>
      <RightContainer>
        <DefaultButton>Europe</DefaultButton>
        <OutlinedButton>Sign in</OutlinedButton>
      </RightContainer>
    </Container>
  );
};
export default Header;
