import {
  BRIGHTNESS,
  CONTRAST,
  GRAYSCALE,
  SATURATE,
} from "../../components/Variables/PropertyVariables";

export type TypeType = "brightness" | "grayscale" | "saturate" | "contrast";
interface StateType {
  brightness: string;
  grayscale: string;
  saturate: string;
  contrast: string;
}

const imageEditReducer = (
  state: StateType,
  { type, payload }: { type: TypeType; payload: string }
) => {
  switch (type) {
    case BRIGHTNESS:
      return {
        ...state,
        brightness: payload,
      };
    case GRAYSCALE:
      return {
        ...state,
        grayscale: payload,
      };
    case SATURATE:
      return {
        ...state,
        saturate: payload,
      };
    case CONTRAST:
      return {
        ...state,
        contrast: payload,
      };
    default:
      state;
  }
};

export default imageEditReducer;
