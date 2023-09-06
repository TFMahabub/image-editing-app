import React from "react";

const MenuText = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="text-textColor font-semibold capitalize">{children}</h4>
  );
};

export default MenuText;
