/*
 * Created Date: Friday May 14th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, May 19th 2021, 3:10:28 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { withTranslation } from "react-i18next";

const DropdownItem = tw.a`flex justify-start items-center my-1 cursor-pointer hover:bg-yellow-500 transition duration-300 ease-in-out`;
const Text = tw.button`p-3  w-full text-white transition duration-300 ease-in-out text-gray-900  hover:text-white dark:text-white dark:hover:text-gray-900 font-semibold outline-none focus:outline-none`;

const Dropdown = (props) => {
  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const variants = {
    open: { height: 200 },
    closed: { height: 0 },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const navigation = [
    {
      title: props.t("header.buttons.0"),
      href: "#",
    },
    {
      title: props.t("header.buttons.1"),
      href: "#",
    },
    {
      title: props.t("header.buttons.2"),
      href: "#",
    },
    {
      title: props.t("header.buttons.3"),
      href: "#",
    },
  ];

  return (
    <>
      <motion.div
        className="flex flex-col w-full inline md:hidden"
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
        {props.open &&
          isOpen &&
          !animating &&
          navigation.map((element, i) => {
            return (
              <DropdownItem key={i} href={element.href}>
                <Text>{element.title}</Text>
              </DropdownItem>
            );
          })}
      </motion.div>
    </>
  );
};
export default withTranslation()(Dropdown);
