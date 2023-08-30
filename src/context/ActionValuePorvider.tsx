import { createContext, useState } from "react";

export interface ActionObject {
  id: number;
  name: string;
  value: number | string;
}
interface ValueType {
  allActionsArrayState: ActionObject[];
  setAllActionsArrayState: any;
  selectedAction: ActionObject;
  setSelectedAction: any;
  handleProgress: any;
}

export const ActionContext = createContext<ValueType | null>(null);

const ActionValuePorvider = ({ children }: { children: React.ReactNode }) => {
  const allActionsArray = [
    {
      id: 1,
      name: "Brightness",
      value: 0,
    },
    {
      id: 2,
      name: "Saturation",
      value: 0,
    },
    {
      id: 3,
      name: "Inversion",
      value: 0,
    },
    {
      id: 4,
      name: "Grayscale",
      value: 0,
    },
  ];
  const [selectedAction, setSelectedAction] = useState<ActionObject>({
    id: 1,
    name: "Brightness",
    value: 0,
  });
  const [allActionsArrayState, setAllActionsArrayState] =
    useState(allActionsArray);

  const handleProgress = (value: string) => {
    setAllActionsArrayState((preValue) => {
      preValue?.map((option) => {
        return { ...option, value };
      });
    });
  };

  const value: ValueType | null = {
    allActionsArrayState,
    setAllActionsArrayState,
    selectedAction,
    setSelectedAction,
    handleProgress,
  };

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
};

export default ActionValuePorvider;
