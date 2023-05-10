import React from "react";

interface Props {
  children: React.ReactNode;
  tooltipText: string;
}

const WithTooltip = ({ children, tooltipText }: Props) => {
  return (
    <span className="group relative">
      {children}
      <span
        className="absolute left-1/2 -my-3 mx-auto -translate-x-1/2 translate-y-full rounded-md bg-gray-800 px-1 
    text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
      >
        {tooltipText}
      </span>
    </span>
  );
};

export default WithTooltip;
