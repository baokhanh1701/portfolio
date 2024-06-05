import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" }
}

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) => {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <span className={`mr-3 font-semibold hover:text-white duration-200 ${buttonClasses}`}>
        {children}
      </span>
      <motion.div
        initial="default"
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
