"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navigation_links = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contacts",
  },
];

const navigationLinkVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8">
        <Link
          href="/"
          className="text-xl md:text-xl text-white font-semibold p-4"
        >
          NKBK
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navigation_links.map((link, index) => (
              <motion.li
                variants={navigationLinkVariants}
                initial="initial"
                animate={"animate"}
                transition={{ duration: 0.025, delay: index * 0.1 + 0.025 }}
                key={link.title}>
                <NavigationLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navigation_links} /> : null}
    </nav>
  );
};

export default NavigationBar;
