/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 2:30:43 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import Filled from "components/buttons/filled";
import Title from "components/titles/categories";
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
const FilledButton = tw(Filled)`mr-2`;
const Container = tw.div`flex flex-col flex-wrap justify-center items-center px-8 my-12 w-full`;
const Row = tw.div` my-2 flex flex-wrap justify-start items-center w-full`;

const Categories = () => {
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
export default Categories;