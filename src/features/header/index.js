/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 6:06:11 am
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import Light from "components/Icons/light";
import Menu from "components/Icons/menu";
import Close from "components/Icons/close";

import MenuDropdown from "components/dropdowns/menu";
import OutlinedButton from "components/buttons/outlined";
import DefaultButton from "components/buttons/default";
import LanguageDropdown from "components/dropdowns/language";
import tw from "twin.macro";

const Container = tw.div`flex flex-col justify-center items-center `;
const Row = tw.div`flex justify-between items-center px-6 md:px-8 h-16 min-w-full`;
const LeftContainer = tw.div`flex justify-around items-center`;
const RightContainer = tw.div`flex justify-around items-center`;
const LightIcon = tw(Light)`cursor-pointer`;
const MenuIcon = tw(Menu)`cursor-pointer`;
const CloseIcon = tw(Close)`cursor-pointer`;

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
          <LanguageDropdown className="hidden md:inline" />
        </LeftContainer>
        <RightContainer>
          <DefaultButton className="hidden md:inline">
            {props.t("header.buttons.0")}
          </DefaultButton>
          <DefaultButton className="hidden md:inline">
            {props.t("header.buttons.1")}
          </DefaultButton>
          <DefaultButton className="hidden md:inline">
            {props.t("header.buttons.2")}
          </DefaultButton>
          <OutlinedButton className="hidden md:inline">
            {props.t("header.buttons.3")}
          </OutlinedButton>

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
export default withTranslation()(Header);
