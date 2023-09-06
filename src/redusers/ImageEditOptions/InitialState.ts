export interface ImageEditInitialStateType {
  brightness: string;
  grayscale: string;
  saturate: string;
  contrast: string;
}

const ImageEditInitialState: ImageEditInitialStateType = {
  brightness: "100",
  grayscale: "0",
  saturate: "100",
  contrast: "100",
};

export default ImageEditInitialState;
