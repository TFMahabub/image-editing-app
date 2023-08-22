import React from "react";
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StrokeButton = ({ children, ...attribute }: PropsType) => {
  return (
    <button
      {...attribute}
      className="border-borderColor text-textColor px-6 py-2 border rounded-sm"
    >
      {children}
    </button>
  );
};

export default StrokeButton;
