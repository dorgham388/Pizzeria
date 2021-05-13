/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 10:26:53 pm
 * Modified By: Jasser Bouzidi
 * -----
 */

import React from "react";
import Light from "components/Icons/light";
import Menu from "components/Icons/menu";

import OutlinedButton from "components/Buttons/outlined";
import DefaultButton from "components/Buttons/default";

import LanguageDropdown from "components/dropdowns/language";

import tw from "twin.macro";

const Container = tw.div`flex justify-between items-center px-6 md:px-8 h-16`;
const LeftContainer = tw.div`flex justify-around items-center`;
const RightContainer = tw.div`flex justify-around items-center`;

const LightIcon = tw(Light)`cursor-pointer`;
const MenuIcon = tw(Menu)`cursor-pointer`;

const Header = () => {
  return (
    <Container>
      <LeftContainer>
        <LightIcon />
        <LanguageDropdown className="hidden md:inline">Europe</LanguageDropdown>

        <OutlinedButton className="hidden md:inline">
          Contact support
        </OutlinedButton>
        <DefaultButton className="hidden md:inline">How it works</DefaultButton>
        <DefaultButton className="hidden md:inline">Reviews</DefaultButton>
      </LeftContainer>
      <RightContainer>
        <OutlinedButton className="hidden md:inline">Sign in</OutlinedButton>

        <MenuIcon />
      </RightContainer>
    </Container>
  );
};
export default Header;
