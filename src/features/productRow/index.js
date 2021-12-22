/*
 * Created Date: Wednesday December 22nd 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, December 22nd 2021, 3:57:33 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import tw from "twin.macro";
import Categories from "components/categories";
import Filled from "components/buttons/filled";

const FilledButton = tw(Filled)` w-full md:max-w-min`;
const Crossed = tw.span`line-through`;
const ProductRow = (props) => {
  const [selected, setSelected] = useState(0);

  return (
    <figure className="transition duration-300 ease-in-out  md:flex bg-gray-800 dark:bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg m-3 w-1/2 md:h-72 w-full">
      <img
        className="w-48 h-48 md:w-72 md:h-72 md:rounded-none rounded-full  object-cover rounded-xl md:rounded-none md:rounded-l-xl mx-auto md:mx-0"
        src={props.src}
        alt=""
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col justify-between w-full">
        <div>
          <p className="transition duration-300 ease-in-out text-3xl font-semibold text-gray-100 dark:text-gray-800">
            {props.title}
          </p>
          <p className="transition duration-300 ease-in-out text-md font-semibold text-gray-400 dark:text-gray-800 mt-3">
            {props.ingredients}
          </p>
          <Categories
            categories={CategoriesArray}
            notitle
            setSelected={(i) => {
              setSelected(i);
            }}
          />
        </div>

        <figcaption className="font-medium flex justify-between items-center flex-col md:flex-row w-full">
          <div>
            <div className="text-yellow-500 font-semibold text-xl">
              {props.prices[selected]} $
            </div>
            <div className="text-gray-500">
              {props.discount * 100}% Discount(
              <Crossed>
                {props.prices[selected] +
                  props.prices[selected] * props.discount}{" "}
                $
              </Crossed>
              )
            </div>
            <div className="text-gray-500">{props.extra}</div>
          </div>

          <FilledButton>Add to cart</FilledButton>
        </figcaption>
      </div>
    </figure>
  );
};
export default ProductRow;

const CategoriesArray = [
  { id: 0, title: "Small", category: "Small" },
  { id: 1, title: "Medium", category: "Medium" },
  { id: 2, title: "Large", category: "Large" },
];
