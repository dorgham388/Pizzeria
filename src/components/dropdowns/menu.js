/*
 * Created Date: Friday May 14th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 12:41:54 am
 * Modified By: Amir Dorgham
 * -----
 */
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";

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
  useEffect(() => {
    setIsOpen(props.open);
  });
  const variants = {
    open: { height: 230 },
    closed: { height: 0 },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  return (
    <>
      <motion.div
        className="flex flex-col  w-full"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.4 }}
        onAnimationStart={() => {
          setAnimating(true);
        }}
        onAnimationComplete={() => {
          setAnimating(false);
        }}
      >
        {isOpen &&
          !animating &&
          navigation.map((element, i) => {
            return (
              <DropdownItem href={element.href}>
                <Text>{element.title}</Text>
              </DropdownItem>
            );
          })}
      </motion.div>
    </>
  );
};
export default Dropdown;
