/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, May 12th 2021, 5:23:13 am
 * Modified By: Amir Dorgham
 * -----
 */
import React, { useContext } from "react";
import { ThemeContext } from "utils/theme/index";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    return theme === "dark";
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      Dark Mode
    </label>
  );
};
export default Toggle;
