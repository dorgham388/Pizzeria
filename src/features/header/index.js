/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, December 22nd 2021, 2:38:18 am
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import Light from "components/Icons/light";
import Menu from "components/Icons/menu";
import Close from "components/Icons/close";
import Cart from "components/Icons/cart";

import MenuDropdown from "components/dropdowns/menu";
import OutlinedButton from "components/buttons/outlined";
import DefaultButton from "components/buttons/default";
import LanguageDropdown from "components/dropdowns/language";
import tw from "twin.macro";
import ChefLottie from "assets/lotties/Chef";

const Container = tw.div`flex flex-col justify-center items-center`;
const Row = tw.div`flex justify-between items-center px-6 md:px-8 h-16 min-w-full`;
const LeftContainer = tw.div`flex justify-around items-center`;
const RightContainer = tw.div`flex justify-around items-center`;
const LightIcon = tw(Light)`cursor-pointer`;
const MenuIcon = tw(Menu)`cursor-pointer`;
const CloseIcon = tw(Close)`cursor-pointer`;
const CartIcon = tw(Cart)`cursor-pointer`;

const ResponsiveLanguageDropdown = tw(LanguageDropdown)`hidden md:inline`;
const ResponsiveDefaultButton = tw(DefaultButton)`hidden md:inline`;
const ResponsiveOutlinedButton = tw(OutlinedButton)`hidden md:inline`;

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Row>
        <LeftContainer>
          <LightIcon />
          <ResponsiveLanguageDropdown />
        </LeftContainer>
        <RightContainer>
          <ResponsiveDefaultButton>
            {/* {props.t("header.buttons.0")} */}
            <CartIcon />
          </ResponsiveDefaultButton>
          <ResponsiveDefaultButton>
            {props.t("header.buttons.1")}
          </ResponsiveDefaultButton>
          <ResponsiveDefaultButton>
            {props.t("header.buttons.2")}
          </ResponsiveDefaultButton>
          <ResponsiveOutlinedButton>
            {props.t("header.buttons.3")}
          </ResponsiveOutlinedButton>

          {open ? (
            <CloseIcon onClick={toggleMenu} />
          ) : (
            <MenuIcon onClick={toggleMenu} />
          )}
        </RightContainer>
      </Row>
      <ChefLottie />

      {<MenuDropdown open={open} />}
    </Container>
  );
};
export default withTranslation()(Header);
