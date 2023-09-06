import demoImage from "../../assets/Demo.png";
import { ImageEditInitialStateType } from "../../redusers/ImageEditOptions/InitialState";

const ImagePart = ({ options }: { options: ImageEditInitialStateType }) => {
  const { image, brightness, grayscale } = options;

  return (
    <>
      <img
        src={demoImage}
        className="max-w-md"
        style={{ filter: `brightness(${brightness}%)` }}
        alt=""
      />
    </>
  );
};

export default ImagePart;
