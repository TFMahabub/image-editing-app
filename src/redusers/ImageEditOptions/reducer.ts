import {
  BRIGHTNESS,
  GRAYSCALE,
} from "../../components/Variables/PropertyVariables";

type TypeType = "brightness" | "grayscale";

const imageEditReducer = (
  state: any,
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
    default:
      state;
  }
};

export default imageEditReducer;
