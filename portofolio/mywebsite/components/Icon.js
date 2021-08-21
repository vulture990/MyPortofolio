import React, { FC } from "react";


const Icon = ({ icon, size, className }) => {
  return (
    <img
      className={`${className} select-none`}
      width={size}
      src={`/assets/icons/${icon}.svg`}
      alt={icon}
    />
  );
};

export default Icon;
