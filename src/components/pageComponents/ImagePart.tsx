import demoImage from "../../assets/Demo.png";
import { ImageEditInitialStateType } from "../../redusers/ImageEditOptions/InitialState";

const ImagePart = ({ options }: { options: ImageEditInitialStateType }) => {
  const { brightness, grayscale, saturate, contrast } = options;

  return (
    <>
      <img
        src={demoImage}
        className="max-w-md"
        style={{
          filter: `brightness(${brightness}%) grayscale(${grayscale}%) contrast(${contrast}%) saturate(${saturate}%)`,
        }}
        alt=""
      />
    </>
  );
};

export default ImagePart;
