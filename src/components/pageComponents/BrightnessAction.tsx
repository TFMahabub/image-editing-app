import { useContext } from "react";
import { ActionContext } from "../../context/ActionValuePorvider";
import Progressbar from "../ProgressBar/Progressbar";
import MenuText from "../Texts/MenuText";

const BrightnessAction = () => {
  const { brightness, setBrightness } = useContext(ActionContext);

  console.log(brightness);

  return (
    <>
      <div className="flex items-center justify-between">
        <MenuText>Brightness</MenuText>
        <MenuText>{`${brightness}%`}</MenuText>
      </div>
      <Progressbar
        progressValue={brightness}
        setProgressValue={setBrightness}
      />
    </>
  );
};

export default BrightnessAction;
