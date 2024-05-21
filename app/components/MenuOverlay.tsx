import React from "react";
import NavigationLink from "./NavigationLink";

type LinkType = {
  path: string;
  title: string;
};

const MenuOverlay = ({ links }: { links: Array<LinkType> }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavigationLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
