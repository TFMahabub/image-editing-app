import { useContext, useState } from "react";
import { ActionContext } from "../../context/ActionValuePorvider";
import FillButton from "../Buttons/FillButton";
import StrokeButton from "../Buttons/StrokeButton";
import Progressbar from "../ProgressBar/Progressbar";
import MenuText from "../Texts/MenuText";

const ActionPart = () => {
  const [progressValue, setProgressValue] = useState("");
  const { value } = useContext(ActionContext);
  console.log(value);

  return (
    <>
      <FillButton>Brightness</FillButton>
      <StrokeButton>Brightness</StrokeButton>
      <StrokeButton>Brightness</StrokeButton>
      <StrokeButton>Brightness</StrokeButton>
      <div className="space-y-1">
        <MenuText>Brightness</MenuText>
        <Progressbar
          progressValue={progressValue}
          setProgressValue={setProgressValue}
        />
      </div>
    </>
  );
};

export default ActionPart;
