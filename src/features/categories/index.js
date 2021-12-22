/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, December 22nd 2021, 3:43:20 am
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import Filled from "components/buttons/filled";
import Title from "components/titles/categories";
import tw from "twin.macro";

const FilledButton = tw(Filled)`mr-2 w-full md:max-w-min`;
const Container = tw.div`flex flex-col flex-wrap justify-center items-center  w-full `;
const Row = tw.div`  flex flex-wrap justify-start items-center w-full`;

const Categories = (props) => {
  const [selected, setSelected] = useState(0);
  return (
    <Container>
      <Row>
        {!props.notitle && <Title>{props.categories[selected].title}</Title>}
      </Row>
      <Row>
        {props.categories.map((element, i) => {
          return (
            <FilledButton
              key={i}
              active={selected === i}
              onClick={() => {
                setSelected(i);
                props.setSelected(i);
              }}
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
