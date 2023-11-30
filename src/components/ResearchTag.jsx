import React from "react";

const ResearchTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-secondary-500 border-secondary-500"
    : "text-default-500 border-default-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer hover:border-secondary-400 hover:text-secondary-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ResearchTag;
