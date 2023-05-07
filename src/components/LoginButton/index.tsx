import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const LoginButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); rounded-2xl bg-slate-300 px-7 py-3 font-semibold transition-all duration-300 hover:bg-slate-50"
    >
      {children}
    </button>
  );
};

export default LoginButton;
