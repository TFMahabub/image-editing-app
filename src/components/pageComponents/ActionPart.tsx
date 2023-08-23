import MenuText from "../Texts/MenuText";
import BrightnessAction from "./BrightnessAction";
import FilteringButtons from "./FilteringButtons";
import RotationFlipButtons from "./RotationFlipButtons";

const ActionPart = () => {
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-2">
        <FilteringButtons />
      </div>
      <div className="space-y-1">
        <BrightnessAction />
      </div>
      <div>
        <MenuText>Rotate & Flip</MenuText>
        <RotationFlipButtons />
      </div>
    </>
  );
};

export default ActionPart;
