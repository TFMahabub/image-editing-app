import React from "react";
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

const ActionButton = ({ children, active, ...attribute }: PropsType) => {
  return (
    <button
      {...attribute}
      className={`flex items-center justify-center h-10 px-6 text-sm border ${
        active
          ? "bg-primary border-primary text-white"
          : "text-textColor rounded-sm"
      } `}
    >
      {children}
    </button>
  );
};

export default ActionButton;
