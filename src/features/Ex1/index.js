/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Thursday, May 13th 2021, 4:48:16 am
 * Modified By: Jasser Bouzidi
 * -----
 */

import React, { useState } from "react";
import Filled from "components/ex1/buttons/filled";
import Title from "components/ex1/titles/ex1";
import tw from "twin.macro";

const categories = [
  {
    title: "WoW Raid Carries",
    category: "All",
  },
  {
    title: "Casle Nathria",
    category: "Casle Nathria",
  },
  {
    title: "TimeWalking Raids",
    category: "TimeWalking Raids",
  },
  {
    title: "Raid Mounts",
    category: "Raid Mounts",
  },
  {
    title: "Sanctrum of Domination",
    category: "Sanctrum of Domination",
  },
];
const FilledButton = tw(Filled)`mr-3`;
const Container = tw.div`flex flex-col flex-wrap justify-center items-center px-8 my-12 `;
const Row = tw.div` my-2 flex flex-wrap justify-start items-center w-full`;

const Button = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Container>
      <Row>
        <Title>{categories[selected].title}</Title>
      </Row>
      <Row>
        {categories.map((element, i) => {
          return (
            <FilledButton
              key={i}
              active={selected === i}
              onClick={() => setSelected(i)}
            >
              {element.category}
            </FilledButton>
          );
        })}
      </Row>
    </Container>
  );
};
export default Button;