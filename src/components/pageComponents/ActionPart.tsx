import { useEffect, useState } from "react";
import { MdOutlineRotateLeft, MdOutlineRotateRight } from "react-icons/md";
import { RiContractLeftRightFill } from "react-icons/ri";
import { OptionType } from "../../page/ImageEditPage";
import ActionButton from "../Buttons/ActionButton";
import RotationButton from "../Buttons/RotationButton";
import Progressbar from "../ProgressBar/Progressbar";
import MenuText from "../Texts/MenuText";
import { BRIGHTNESS, GRAYSCALE } from "../Variables/PropertyVariables";

export interface PropsType {
  option: any;
  setOption: any;
}

const ActionPart = ({ option, setOption }: PropsType) => {
  const [active, setActive] = useState(BRIGHTNESS);
  const [range, setRange] = useState("");

  useEffect(() => {
    if (active === BRIGHTNESS) {
      setOption((pre: OptionType) => {
        return { ...pre, brightness: range };
      });
    }
    if (active === GRAYSCALE) {
      setOption((pre: OptionType) => {
        return { ...pre, grayscale: range };
      });
    }
  }, [active, range, setOption]);

  return (
    <>
      <div className="space-y-1">
        <MenuText>Filter</MenuText>
        <div className="grid w-full grid-cols-2 gap-2">
          <ActionButton
            onClick={() => setActive(BRIGHTNESS)}
            active={active === BRIGHTNESS}
          >
            {BRIGHTNESS}
          </ActionButton>
          <ActionButton
            onClick={() => setActive(GRAYSCALE)}
            active={active === GRAYSCALE}
          >
            {GRAYSCALE}
          </ActionButton>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <MenuText>{active}</MenuText>
          <MenuText>{`${range}%`}</MenuText>
        </div>
        <Progressbar progressValue={range} setRange={setRange} />
      </div>
      <div className="space-y-1">
        <MenuText>Rotate & Flip</MenuText>
        <div className="flex items-center gap-2 space-y-1">
          <RotationButton>
            <MdOutlineRotateLeft className=" text-textColor text-2xl" />
          </RotationButton>
          <RotationButton>
            <MdOutlineRotateRight className=" text-textColor text-2xl" />
          </RotationButton>
          <RotationButton>
            <RiContractLeftRightFill className=" text-textColor text-2xl" />
          </RotationButton>
          <RotationButton>
            <RiContractLeftRightFill className=" text-textColor text-2xl rotate-90" />
          </RotationButton>
        </div>
      </div>
    </>
  );
};

export default ActionPart;
