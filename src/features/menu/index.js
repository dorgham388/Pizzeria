/*
 * Created Date: Saturday May 15th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 2:34:26 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import tw from "twin.macro";
import MenuItem from "components/buttons/menu";

const Container = tw.div`transition duration-300 ease-in-out flex flex-col justify-center items-center bg-gray-700 bg-opacity-90 dark:bg-opacity-20 m-6 hidden md:block`;

const options = [
  "Today Events",
  "Raids",
  "Dungeons",
  "Shadowlands",
  "PowerLeveling",
  "Character Boost",
  "PvP",
  "Collectibles",
  "Achievements",
];

const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      {options.map((element, i) => {
        return (
          <MenuItem
            key={i}
            active={selected === i}
            onClick={() => setSelected(i)}
          >
            {element}
          </MenuItem>
        );
      })}
    </Container>
  );
};
export default withTranslation()(Menu);
