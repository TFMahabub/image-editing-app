import React from "react";

const FillButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-6 py-2 font-light text-white bg-blue-500 rounded-sm">
      {children}
    </button>
  );
};

export default FillButton;
