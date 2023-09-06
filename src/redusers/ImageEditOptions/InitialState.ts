export interface ImageEditInitialStateType {
  image: string;
  brightness: string;
  grayscale: string;
  saturate: string;
  contrast: string;
}

const ImageEditInitialState: ImageEditInitialStateType = {
  image: "",
  brightness: "100",
  grayscale: "0",
  saturate: "100",
  contrast: "100",
};

export default ImageEditInitialState;
