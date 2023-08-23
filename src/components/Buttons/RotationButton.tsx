import React from "react";
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const RotationButton = ({ children, ...attribute }: PropsType) => {
  return (
    <button
      {...attribute}
      className={`flex items-center justify-center h-8 w-10 text-sm border text-textColor rounded-sm `}
    >
      {children}
    </button>
  );
};

export default RotationButton;
