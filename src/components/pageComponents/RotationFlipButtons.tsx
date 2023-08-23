import { MdOutlineRotateLeft, MdOutlineRotateRight } from "react-icons/md";
import { RiContractLeftRightFill } from "react-icons/ri";
import RotationButton from "../Buttons/RotationButton";

const RotationFlipButtons = () => {
  return (
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
  );
};

export default RotationFlipButtons;
