/*
 * Created Date: Wednesday December 22nd 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, December 22nd 2021, 1:35:29 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import tw from "twin.macro";

const CartIcon = tw.div`transition duration-300 ease-in-out text-gray-900 hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500 h-8 w-8 cursor-pointer`;

const Cart = (props) => {
  return (
    <CartIcon onClick={props.onClick}>
      <span className="sr-only">Cart</span>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        fill="transparent"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      ></svg>
      <circle cx="10" cy="20.5" r="1" />
      <circle cx="18" cy="20.5" r="1" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="transparent"
        stroke="currentColor"
      >
        <circle cx="10" cy="20.5" r="1" />
        <circle cx="18" cy="20.5" r="1" />
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"
        />
      </svg>
    </CartIcon>
  );
};

export default Cart;
