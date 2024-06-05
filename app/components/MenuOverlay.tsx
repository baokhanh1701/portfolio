import React from "react";
import NavigationLink from "./NavigationLink";
import { motion } from "framer-motion";

type LinkType = {
  path: string;
  title: string;
};

const MenuOverlay = ({ links }: { links: Array<LinkType> }) => {
  return (
    <motion.ul
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col py-4 items-center"
    >
      {links.map((link, index) => {
        return (
          <motion.li
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.025, delay: index * 0.1 + 0.025 }}
            className="flex flex-col py-4 items-center"
          >
            <NavigationLink href={link.path} title={link.title} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default MenuOverlay;
