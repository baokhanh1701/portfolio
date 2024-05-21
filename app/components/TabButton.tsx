import React, { ReactNode } from "react";

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
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>
    </button>
  );
};

export default TabButton;
