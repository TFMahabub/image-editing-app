import { createContext, useState } from "react";

interface ContextType {
  value: string;
  setValue: string | unknown;
}

export const ActionContext = createContext<ContextType>();

const ActionValuePorvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("check");
  const actionValue = {
    value,
    setValue,
  };
  return (
    <ActionContext.Provider value={actionValue}>
      {children}
    </ActionContext.Provider>
  );
};

export default ActionValuePorvider;
