import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({
  name,
  onClickFunc,
  isSelected,
}: {
  name: string;
  onClickFunc: any;
  isSelected: boolean;
}) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer `}
      onClick={() => onClickFunc(name)}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;