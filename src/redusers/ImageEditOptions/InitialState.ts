export interface ImageEditInitialStateType {
  image: string;
  brightness: string;
  grayscale: number;
}

const ImageEditInitialState: ImageEditInitialStateType = {
  image: "",
  brightness: "100",
  grayscale: "0",
};

export default ImageEditInitialState;
