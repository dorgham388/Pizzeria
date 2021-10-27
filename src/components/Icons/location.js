/*
 * Created Date: Wednesday October 27th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, October 27th 2021, 5:07:55 am
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import tw from "twin.macro";

const LocationIcon = tw.div`text-gray-900 rounded-lg h-8 w-8 cursor-pointer`;
const Button = tw.div`outline-none focus:outline-none`;

const Location = (props) => {
  return (
    <LocationIcon onClick={props.onClick}>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
          viewBox="0 0 24 24"
          fill="transparent"
          stroke="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </Button>
    </LocationIcon>
  );
};

export default Location;
