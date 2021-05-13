/*
 * Created Date: Thursday May 13th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 11:48:26 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import tw from "twin.macro";

const MenuIcon = tw.div`md:hidden transition duration-300 ease-in-out text-gray-900 hover:text-yellow-500 dark:hover:bg-gray-800 rounded-lg  dark:text-white dark:hover:text-yellow-500 h-8 w-8 cursor-pointer`;
const Button = tw.div`outline-none focus:outline-none`;

const Menu = (props) => {
  return (
    <MenuIcon>
      <Button>
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className={props.className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </MenuIcon>
  );
};
export default Menu;
