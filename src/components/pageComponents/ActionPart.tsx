import { useState } from "react";
import { MdOutlineRotateLeft, MdOutlineRotateRight } from "react-icons/md";
import { RiContractLeftRightFill } from "react-icons/ri";
import { ImageEditInitialStateType } from "../../redusers/ImageEditOptions/InitialState";
import { TypeType } from "../../redusers/ImageEditOptions/reducer";
import { EventType } from "../../types/GlobalTypes";
import ActionButton from "../Buttons/ActionButton";
import RotationButton from "../Buttons/RotationButton";
import Progressbar from "../ProgressBar/Progressbar";
import MenuText from "../Texts/MenuText";
import {
  BRIGHTNESS,
  CONTRAST,
  GRAYSCALE,
  SATURATE,
} from "../Variables/PropertyVariables";

export interface PropsType {
  options: ImageEditInitialStateType;
  optionDispatch: ({
    type,
    payload,
  }: {
    type: TypeType;
    payload: string;
  }) => void;
}

const ActionPart = ({ options, optionDispatch }: PropsType) => {
  const [active, setActive] = useState(BRIGHTNESS);

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
          <ActionButton
            onClick={() => setActive(CONTRAST)}
            active={active === CONTRAST}
          >
            {CONTRAST}
          </ActionButton>
          <ActionButton
            onClick={() => setActive(SATURATE)}
            active={active === SATURATE}
          >
            {SATURATE}
          </ActionButton>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <MenuText>{active}</MenuText>
          {active === BRIGHTNESS && (
            <MenuText>{`${options.brightness}%`}</MenuText>
          )}
          {active === GRAYSCALE && (
            <MenuText>{`${options.grayscale}%`}</MenuText>
          )}
          {active === CONTRAST && <MenuText>{`${options.contrast}%`}</MenuText>}
          {active === SATURATE && <MenuText>{`${options.saturate}%`}</MenuText>}
        </div>
        {active === BRIGHTNESS && (
          <Progressbar
            type="range"
            min={1}
            max={200}
            step={1}
            value={options.brightness}
            onChange={(e: EventType) =>
              optionDispatch({ type: BRIGHTNESS, payload: e.target.value })
            }
          />
        )}
        {active === GRAYSCALE && (
          <Progressbar
            type="range"
            min={1}
            max={100}
            step={1}
            value={options.grayscale}
            onChange={(e: EventType) =>
              optionDispatch({ type: GRAYSCALE, payload: e.target.value })
            }
          />
        )}
        {active === CONTRAST && (
          <Progressbar
            type="range"
            min={1}
            max={200}
            step={1}
            value={options.contrast}
            onChange={(e: EventType) =>
              optionDispatch({ type: CONTRAST, payload: e.target.value })
            }
          />
        )}
        {active === SATURATE && (
          <Progressbar
            type="range"
            min={1}
            max={200}
            step={1}
            value={options.saturate}
            onChange={(e: EventType) =>
              optionDispatch({ type: SATURATE, payload: e.target.value })
            }
          />
        )}
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
