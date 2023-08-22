import React from "react";
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FillButton = ({ children, ...attribute }: PropsType) => {
  return (
    <button
      {...attribute}
      className="bg-primary border-primary px-6 py-2 text-white border rounded-sm"
    >
      {children}
    </button>
  );
};

export default FillButton;
