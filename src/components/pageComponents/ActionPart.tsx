import { useContext } from "react";
import { ActionContext } from "../../context/ActionValuePorvider";
import ActionButton from "../Buttons/ActionButton";
import BrightnessAction from "./BrightnessAction";

const ActionPart = () => {
  const { action, setAction } = useContext(ActionContext);
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-2">
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
      </div>
      {/* ---------------progressbar--------------- */}
      <div className="space-y-1">
        <BrightnessAction />
      </div>
    </>
  );
};

export default ActionPart;
