/*
 * Created Date: Thursday May 13th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 2:26:49 am
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CloseIcon = tw.div`md:hidden transition duration-300 ease-in-out text-gray-900 hover:text-yellow-500 dark:hover:bg-gray-800 rounded-lg  dark:text-white dark:hover:text-yellow-500 h-8 w-8 cursor-pointer`;
const Button = tw.div`outline-none focus:outline-none`;

const Close = (props) => {
  return (
    <CloseIcon onClick={props.onClick}>
      <Button>
        <span className="sr-only">Close menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
          fill="transparent"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </CloseIcon>
  );
};

export default Close;
