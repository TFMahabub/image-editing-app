import React from "react";
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FillButton = ({ children, ...attribute }: PropsType) => {
  return (
    <button
      {...attribute}
      className="bg-primary border-primary flex items-center justify-center h-10 px-6 text-sm text-white border rounded-sm"
    >
      {children}
    </button>
  );
};

export default FillButton;
