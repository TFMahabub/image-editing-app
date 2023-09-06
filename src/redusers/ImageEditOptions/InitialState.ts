export interface ImageEditInitialStateType {
  image: string;
  brightness: string;
  grayscale: number;
}

const ImageEditInitialState: ImageEditInitialStateType = {
  image: "",
  brightness: "100",
  grayscale: 5,
};

export default ImageEditInitialState;
