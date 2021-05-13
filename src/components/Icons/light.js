/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 2:55:47 am
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useContext } from "react";
import { ThemeContext } from "utils/theme/index";
import tw from "twin.macro";

const LightIcon = tw.div`transition duration-300 ease-in-out text-gray-900 hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500 h-8 w-8 cursor-pointer`;

const Light = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = () => {
    return theme === "dark";
  };
  return (
    <LightIcon>
      <input
        id="toggle"
        hidden={true}
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <label for="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={props.className}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      </label>
    </LightIcon>
  );
};
export default Light;
