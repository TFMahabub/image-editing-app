import { createContext, useState } from "react";

interface ContextType {
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  brightness: string;
  setBrightness: React.Dispatch<React.SetStateAction<string>>;
  grascale: string;
  setGrascale: React.Dispatch<React.SetStateAction<string>>;
}

export const ActionContext = createContext<ContextType | object>({});

const ActionValuePorvider = ({ children }: { children: React.ReactNode }) => {
  const [brightness, setBrightness] = useState("0");
  const [grascale, setGrascale] = useState("0");
  const [action, setAction] = useState("brightness");
  const actionValue = {
    action,
    setAction,
    brightness,
    setBrightness,
    grascale,
    setGrascale,
  };
  return (
    <ActionContext.Provider value={actionValue}>
      {children}
    </ActionContext.Provider>
  );
};

export default ActionValuePorvider;
