import React from "react";
import { createPopper } from "@popperjs/core";
import tw from "twin.macro";
import { ReactComponent as GlobalIcon } from "assets/images/icons/global.svg";

//flags
import usa from "assets/images/flags/us.jpg";
import france from "assets/images/flags/french.jpg";
import spain from "assets/images/flags/spain.jpg";
import germany from "assets/images/flags/germany.jpg";
import italy from "assets/images/flags/italy.jpg";
import russia from "assets/images/flags/russia.jpg";
import i18n from "i18n";

const DropdownItem = tw.div`flex justify-start items-center my-1 cursor-pointer hover:bg-gray-100 p-2 rounded-lg`;
const Flag = tw.img`w-7`;
const Language = tw.span`mx-3`;
const Title = tw.span`ml-3`;

const Global = tw(GlobalIcon)`w-9 h-9`;

const Dropdown = ({ children, color, ...props }) => {
  const getTitle = (lng) => {
    switch (lng.slice(0, 2)) {
      case "en":
        return "English";
      case "fr":
        return "Francais";
      case "it":
        return "Italiano";
      case "ru":
        return "Pусский";
      case "de":
        return "Deutsche";
      case "es":
        return "Español";
      default:
        break;
    }
  };
  const [title, setTitle] = React.useState(getTitle(i18n.language));

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap w-40">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "flex items-center mr-20 transition duration-300 ease-in-out py-2 px-4 text-gray-900  hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500 font-semibold outline-none focus:outline-none"
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <Global src={global} alt="" />
              <Title>{title}</Title>
            </button>

            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white " +
                "text-base z-50 float-left p-2 px-3 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <DropdownItem
                onClick={() => {
                  i18n.changeLanguage("en");
                  setTitle("English");
                  setDropdownPopoverShow(false);
                }}
              >
                <Flag src={usa} alt="" />
                <Language>English</Language>
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  i18n.changeLanguage("fr");
                  setTitle("Francais");
                  setDropdownPopoverShow(false);
                }}
              >
                <Flag src={france} alt="" />
                <Language>Francais</Language>
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  i18n.changeLanguage("es");
                  setTitle("Español");
                  setDropdownPopoverShow(false);
                }}
              >
                <Flag src={spain} alt="" />
                <Language>Español</Language>
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  i18n.changeLanguage("de");
                  setTitle("Deutsche");
                  setDropdownPopoverShow(false);
                }}
              >
                <Flag src={germany} alt="" />
                <Language>Deutsche</Language>
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  i18n.changeLanguage("it");
                  setTitle("Italiano");
                  setDropdownPopoverShow(false);
                }}
              >
                <Flag src={italy} alt="" />
                <Language>Italiano</Language>
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  i18n.changeLanguage("ru");
                  setTitle("Pусский");
                  setDropdownPopoverShow(false);
                }}
              >
                <Flag src={russia} alt="" />
                <Language>Pусский</Language>
              </DropdownItem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
