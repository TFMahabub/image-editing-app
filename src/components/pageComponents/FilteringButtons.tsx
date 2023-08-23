import { useContext } from "react";
import { ActionContext } from "../../context/ActionValuePorvider";
import ActionButton from "../Buttons/ActionButton";

const FilteringButtons = () => {
  const { action, setAction } = useContext(ActionContext);
  return (
    <>
      <ActionButton
        onClick={() => setAction("brightness")}
        active={action === "brightness"}
      >
        Brightness
      </ActionButton>
      <ActionButton
        onClick={() => setAction("brightness")}
        active={action === "brightnesss"}
      >
        Brightness
      </ActionButton>
      <ActionButton
        onClick={() => setAction("brightness")}
        active={action === "brightnesss"}
      >
        Brightness
      </ActionButton>
      <ActionButton
        onClick={() => setAction("grayscale")}
        active={action === "grayscale"}
      >
        Grayscale
      </ActionButton>
    </>
  );
};

export default FilteringButtons;
