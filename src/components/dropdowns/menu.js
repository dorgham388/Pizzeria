/*
 * Created Date: Friday May 14th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Friday, May 14th 2021, 7:59:20 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";

const Container = tw.div`flex flex-col flex-wrap w-full `;
const DropdownItem = tw.a`flex justify-start items-center my-1 cursor-pointer hover:bg-yellow-500 transition duration-300 ease-in-out`;
const Text = tw.button`p-3  w-full text-white transition duration-300 ease-in-out text-gray-900  hover:text-white dark:text-white dark:hover:text-gray-900 font-semibold outline-none focus:outline-none`;

const Dropdown = ({
  navigation = [
    {
      title: "Contact support",
      href: "#",
    },
    {
      title: "How it works",
      href: "#",
    },
    {
      title: "Reviews",
      href: "#",
    },
    {
      title: "Sign in",
      href: "#",
    },
  ],
  ...props
}) => {
  return (
    <>
      <Container>
        {navigation.map((element, i) => {
          return (
            <DropdownItem href={element.href}>
              <Text>{element.title}</Text>
            </DropdownItem>
          );
        })}
      </Container>
    </>
  );
};
export default Dropdown;
