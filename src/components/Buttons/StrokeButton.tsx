import React from "react";
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StrokeButton = ({ children, ...attribute }: PropsType) => {
  return (
    <button
      {...attribute}
      className=" text-textColor border-borderColor flex items-center justify-center h-10 px-6 text-sm border rounded-sm"
    >
      {children}
    </button>
  );
};

export default StrokeButton;
