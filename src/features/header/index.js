/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 12:08:30 am
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import Light from "components/Icons/light";
import Menu from "components/Icons/menu";
import Close from "components/Icons/close";

import MenuDropdown from "components/dropdowns/menu";
import OutlinedButton from "components/Buttons/outlined";
import DefaultButton from "components/Buttons/default";
import LanguageDropdown from "components/dropdowns/language";
import tw from "twin.macro";

const Container = tw.div`flex flex-col justify-center items-center `;
const Row = tw.div`flex justify-between items-center px-6 md:px-8 h-16 min-w-full`;
const LeftContainer = tw.div`flex justify-around items-center`;
const RightContainer = tw.div`flex justify-around items-center`;
const LightIcon = tw(Light)`cursor-pointer`;
const MenuIcon = tw(Menu)`cursor-pointer`;
const CloseIcon = tw(Close)`cursor-pointer`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Row>
        <LeftContainer>
          <LightIcon />
          <LanguageDropdown className="hidden md:inline">
            Europe
          </LanguageDropdown>
        </LeftContainer>
        <RightContainer>
          <OutlinedButton className="hidden md:inline">
            Contact support
          </OutlinedButton>
          <DefaultButton className="hidden md:inline">
            How it works
          </DefaultButton>
          <DefaultButton className="hidden md:inline">Reviews</DefaultButton>
          <OutlinedButton className="hidden md:inline">Sign in</OutlinedButton>

          {open ? (
            <CloseIcon onClick={toggleMenu} />
          ) : (
            <MenuIcon onClick={toggleMenu} />
          )}
        </RightContainer>
      </Row>
      {<MenuDropdown open={open} />}
    </Container>
  );
};
export default Header;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
